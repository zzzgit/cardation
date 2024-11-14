import CardError from '../../error/CardError'
import Card from '../card/Card'
import Collection from './Collection'

/**
 * A hand is a collection of cards.
 * @todo 可以考慮再做一個IHand
 */
class Hand extends Collection{

	/**
	 * Form a hand from a card array.
	 * @param hands
	 * @returns
	 */
	static from(...hands: Hand[]): Hand{
		const allCards: Card[] = []
		hands.forEach((hand: Hand)=> {
			const cardArray = hand.getDuplicatedCardArray()
			allCards.push(...cardArray)
		})
		return new Hand(allCards)
	}

	constructor(cardArray?: Card[]){
		super()
		if (Array.isArray(cardArray)){
			this.pushCard(...cardArray)
		}
		if (cardArray instanceof Card){
			throw new CardError('[Hand][constructor]: Card is not acceptable as a parameter here!')
		}
	}

	/**
	 * Get a baccarat based point of the hand.
	 * @returns {number} the point of the hand
	 */
	getPoint(): number{
		const cards_array = this.getDuplicatedCardArray()
		let result = 0
		for (const card of cards_array){
			result += card.getPoint()
		}
		return result % 10
	}

	pushCard(...card: Card[]): void{
		this.getCardArray().push(...card)
	}

	/**
	 * Get the first card in the array.
	 * @returns {Card[]} the first card of the hand
	 */
	getFirstCard(): Card | undefined{
		const cards_array = this.getDuplicatedCardArray()
		if (cards_array.length){
			return cards_array[0]
		}
		return undefined
	}

	/**
	 * Get the last card in the array.
	 * @returns {Card} the last card of the hand
	 */
	getLastCard(): Card | undefined{
		const cards_array = this.getDuplicatedCardArray()
		if (cards_array.length){
			return cards_array[cards_array.length - 1]
		}
		return undefined
	}

	// 或者deal
	play(): void{
		throw new Error('Method not implemented.')
	}

	// public recycle(collector: Collection): void {
	// 	collector.pushCard(...this.getDuplicatedCardArray())
	// 	this.clear()
	// }

	/**
	 * Clear the hand, all cards will be removed.
	 */
	clear(): void{
		this.getCardArray().length = 0
	}

}

export default Hand
