import CardError from "../../error/CardError"
import Card from "../card/Card"
import IPattern from "./IPattern"

// 對子、三條，可以再抽象一下
class Pair implements IPattern {
	static isPair(cards: Card[]): boolean {
		if (cards.length !== 2) {
			return false
		}
		const [firstCard] = cards
		if (!firstCard.equals(cards[1])) {
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
