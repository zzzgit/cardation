import CardError from "../../error/CardError"
import Card from "../card/Card"
import IPattern from "./IPattern"

class Pair implements IPattern {
	/**
	 * Test if the cards form a pair.
	 * @param {Card[]} cards cards to be tested
	 * @returns {boolean} true if the cards form a pair
	 */
	static isPair(cards: Card[]): boolean {
		if (cards.length !== 2) {
			return false
		}
		const [firstCard] = cards
		if (firstCard.getRank() !== cards[1].getRank()) {
			return false
		}
		return true
	}

	private _cards: Card[]

	constructor(cards:Card[]) {
		if (cards.length !== 2) {
			throw new CardError(`[Pair][constructor]: there must be two cards to form a pair!`)
		}
		const [firstCard] = cards
		if (!firstCard.equals(cards[1])) {
			throw new CardError(`[Pair][constructor]: the two cards must be identical to form a pair!`)
		}
		this._cards = [...cards]
	}

	getCards(): Card[] {
		return [...this._cards]
	}
}

export default Pair
