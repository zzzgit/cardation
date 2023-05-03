import CardError from "../../error/CardError"
import Card from "../card/Card"
import SuitCard from "../card/SuitCard"
import Suit from "../suit/Suit"
import IPattern from "./IPattern"


class Flush implements IPattern {
	/**
	 * Test if the cards form a flush.
	 * @param {Card[]}cards cards to be tested
	 * @returns {boolean} true if the cards form a flush
	 */
	static isFlush(cards: SuitCard[]): boolean {
		const [firstCard] = cards
		const isNoiseExisting = cards.some((card) => {
			if (!(card instanceof SuitCard)) {
				return true
			}
			if (card.getCardSuit() != firstCard.getCardSuit()) {
				return true
			}
			return false
		})
		return !isNoiseExisting
	}

	private _suit: Suit

	private _cards: Card[]

	constructor(cards: SuitCard[]) {
		const [firstCard] = cards
		if (!Flush.isFlush(cards)) {
			throw new CardError(`[Flush][constructor]: all the cards must be of the same suit to form a flush!`)
		}
		this._suit = firstCard.getCardSuit()
		this._cards = [...cards]
	}

	getCards(): Card[] {
		return [...this._cards]
	}

	getSuit(): Suit {
		return this._suit
	}
}

export default Flush

