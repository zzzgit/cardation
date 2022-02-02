import CardError from "../../error/CardError"
import Suit from "../suit/Suit"
import SuitCard from "./SuitCard"

class NumberCard extends SuitCard {
	private _suit: Suit

	private _score: number

	private _point: number

	constructor(suit: Suit, point: number, score?: number) {
		super()
		this._suit = suit
		point = +point
		if (point < 2 || point > 10) {
			throw new CardError(`[NumberCard][constructor]: point shoulb be in the range from 2 to 10!`)
		}
		this._point = point
		if (score === undefined) {
			this._score = this._point
		} else {
			if (Number.isNaN(+score as any)) {
				throw new CardError(`[NumberCard][constructor]: score is expected to be a number but get the type ${typeof score}!`)
			}
			this._score = +score as any
		}
	}

	getCardId(): string {
		return `${this._suit.getShortName()}${this._point}.${this._score}`
	}

	getCardScore(): number {
		return this._score
	}

	getCardPoint(): number {
		return this._point
	}

	getCardSuit(): Suit {
		return this._suit
	}

	setCardScore(score: number): void {
		this._score = score
	}

	toString():string {
		return `${this._suit.getIcon()}${this._point}`
	}
}

export default NumberCard
