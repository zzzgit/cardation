import {
	AceCard,
	CardFactory,
	Club,
	FaceCard,
	Flush,
	Hand,
	Heart,
	Pair,
	Rank,
	Shoe,
} from '../src'

const acecard = new AceCard(new Club())
const facecard = new FaceCard(new Club(), Rank.K, 12)
const club = new Club()
const heart = new Heart()
const shoe = new Shoe()

describe('shoe.ts', () => {
	test('clear', () => {
		shoe.clear()
		shoe.pushCard(acecard)
		shoe.pushCard(facecard)
		shoe.clear()
		return expect(shoe.getDuplicatedCardArray()).toHaveLength(0)
	})
	test('pushCard', () => {
		shoe.clear()
		shoe.pushCard(acecard)
		shoe.pushCard(facecard)
		return expect(shoe.getDuplicatedCardArray()).toHaveLength(2)
	})
	test('pushDeck', () => {
		shoe.clear()
		// shoe.pushDeck(new Shoe())
		return expect(shoe.getDuplicatedCardArray()).toHaveLength(0)
	})
	test('deal', () => {
		shoe.clear()
		shoe.pushCard(acecard)
		shoe.pushCard(facecard)
		shoe.deal()
		const cards = shoe.deal()
		const [card] = cards
		return expect(card).toEqual(acecard)
	})
	test('cut', () => {
		shoe.clear()
		shoe.pushCard(facecard)
		shoe.pushCard(acecard)
		for (let i = 2; i < 8; i++){
			const c = CardFactory.createNumberCard(club, i)
			shoe.pushCard(c)
		}
		shoe.cut(4)
		const [card] = shoe.deal()
		return expect(card.getCardId()).toBe('c3.3')
	})
	test('shuffle', () => {
		shoe.clear()
		shoe.pushCard(facecard)
		shoe.pushCard(acecard)
		for (let i = 2; i < 8; i++){
			const c = CardFactory.createNumberCard(club, i)
			shoe.pushCard(c)
		}
		shoe.shuffle()
		const [card] = shoe.deal()
		return expect(card.getCardId()).not.toBe('c4.4')
	})
	test('getDuplicatedCardArray', () => {
		shoe.clear()
		shoe.pushCard(facecard)
		shoe.pushCard(acecard)
		for (let i = 2; i < 8; i++){
			const c = CardFactory.createNumberCard(club, i)
			shoe.pushCard(c)
		}
		const arr = shoe.getDuplicatedCardArray()
		return expect(arr).toHaveLength(8)
	})
	test('getCardArray', () => {
		shoe.clear()
		shoe.pushCard(facecard)
		shoe.pushCard(acecard)
		for (let i = 2; i < 8; i++){
			const c = CardFactory.createNumberCard(club, i)
			shoe.pushCard(c)
		}
		const arr = shoe.getCardArray()
		arr.pop()
		return expect(shoe.getCardArray()).toHaveLength(7)
	})
})

describe('collection.ts', () => {
	test('insertCard', () => {
		const hand = new Hand()
		hand.pushCard(facecard)
		hand.pushCard(acecard)
		hand.pushCard(CardFactory.createNumberCard(club, 3))
		hand.pushCard(CardFactory.createNumberCard(club, 4))
		hand.insertCard(2, CardFactory.createNumberCard(club, 8))
		expect(hand.getCardArray()).toHaveLength(5)
		return expect(hand.getDuplicatedCardArray()[2].getCardId()).toBe('c8.8')
	})
	test('pushCard', () => {
		const hand = new Hand()
		hand.pushCard(CardFactory.createNumberCard(club, 3))
		hand.pushCard(CardFactory.createNumberCard(club, 4))
		hand.pushCard(CardFactory.createNumberCard(club, 8))
		hand.pushCard(facecard, acecard)
		return expect(hand.getCardArray()).toHaveLength(5)
	})
	test('includes', () => {
		const hand = new Hand()
		hand.pushCard(facecard)
		hand.pushCard(acecard)
		return expect(hand.includes(facecard)).toBeTruthy()
	})
	test('includes false', () => {
		const hand = new Hand()
		hand.pushCard(facecard)
		return expect(hand.includes(acecard)).toBeFalsy()
	})
	test('serialize', () => {
		const hand = new Hand()
		hand.pushCard(facecard)
		hand.pushCard(acecard)
		const str = hand.serialize()
		return expect(str).toBe('c12.12 c1.1')
	})
})

describe('hand.ts', () => {
	test('getFirstCard', () => {
		const hand = new Hand()
		hand.pushCard(facecard)
		hand.pushCard(acecard)
		const card = hand.getFirstCard()
		return expect(card).toEqual(facecard)
	})
	test('getLastCard', () => {
		const hand = new Hand()
		hand.pushCard(facecard)
		hand.pushCard(acecard)
		const card = hand.getLastCard()
		return expect(card).toEqual(acecard)
	})
	test('clear', () => {
		const hand = new Hand()
		hand.pushCard(facecard)
		hand.pushCard(acecard)
		hand.clear()
		return expect(hand.getCardArray()).toHaveLength(0)
	})
})
describe('flush.ts', () => {
	test('isFlush', () => {
		const a = CardFactory.createAceCard(club)
		const b = CardFactory.createNumberCard(club, 2)
		const c = CardFactory.createNumberCard(club, 3)
		return expect(Flush.isFlush([a, b, c])).toBeTruthy()
	})
	test('getSuit', () => {
		const a = CardFactory.createAceCard(club)
		const b = CardFactory.createNumberCard(club, 2)
		const c = CardFactory.createNumberCard(club, 3)
		const flush = new Flush([a, b, c])
		return expect(flush.getSuit()).toEqual(club)
	})
})
describe('pair.ts', () => {
	test('isPair', () => {
		const b = CardFactory.createNumberCard(club, 2)
		const c = CardFactory.createNumberCard(heart, 2)
		return expect(Pair.isPair([b, c])).toBeTruthy()
	})
})
