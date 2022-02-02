import CardError from "../../error/CardError"
import Card from "../card/Card"
import Collection from "./Collection"

// 可以考慮再做一個IHand
class Hand extends Collection {
	static from(...hands: Hand[]): Hand {
		const allCards: Card[] = []
		hands.forEach((hand:Hand) => {
			const cardArray = hand.getDuplicatedCardArray()
			allCards.push(...cardArray)
		})
		return new Hand(allCards)
	}

	constructor(cardArray?: Card[]) {
		super()
		if (Array.isArray(cardArray)) {
			this.pushCard(...cardArray)
		}
		if (cardArray instanceof Card) {
			throw new CardError(`[Hand][constructor]: Card is not acceptable as a parameter here!`)
		}
	}

	// baccarat oriented
	getScore(): number {
		const cards_array = this.getDuplicatedCardArray()
		let result = 0
		for (const card of cards_array) {
			result += card.getCardScore()
		}
		return result % 10
	}

	pushCard(...card: Card[]): void {
		this.getCardArray().push(...card)
	}

	getFirstCard(): Card | undefined {
		const cards_array = this.getDuplicatedCardArray()
		if (cards_array.length) {
			return cards_array[0]
		}
		return undefined
	}

	getLastCard(): Card | undefined {
		const cards_array = this.getDuplicatedCardArray()
		if (cards_array.length) {
			return cards_array[cards_array.length - 1]
		}
		return undefined
	}

	// 或者deal
	play(): void {

	}

	// public recycle(collector: Collection): void {
	// 	collector.pushCard(...this.getDuplicatedCardArray())
	// 	this.clear()
	// }
	clear(): void {
		this.getCardArray().length = 0
	}
}

export default Hand
