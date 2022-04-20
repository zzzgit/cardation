import CardError from "../../error/CardError"
import Suit from "../suit/Suit"
import SuitCard from "./SuitCard"

class NumberCard extends SuitCard {
	private _suit: Suit

	private _score: number

	private _rank: number

	constructor(suit: Suit, rank: number, score?: number) {
		super()
		this._suit = suit
		rank = +rank
		if (rank < 2 || rank > 10) {
			throw new CardError(`[NumberCard][constructor]: rank shoulb be in the range from 2 to 10!`)
		}
		this._rank = rank
		if (score === undefined) {
			this._score = this._rank
		} else {
			if (Number.isNaN(+score as any)) {
				throw new CardError(`[NumberCard][constructor]: score is expected to be a number but get the type ${typeof score}!`)
			}
			this._score = +score as any
		}
	}

	getCardId(): string {
		return `${this._suit.getShortName()}${this._rank}.${this._score}`
	}

	getCardScore(): number {
		return this._score
	}

	getRank(): number {
		return this._rank
	}

	getCardSuit(): Suit {
		return this._suit
	}

	setCardScore(score: number): void {
		this._score = score
	}

	toString():string {
		return `${this._suit.getIcon()}${this._rank}`
	}
}

export default NumberCard
