import CardError from "../../error/CardError"
import Suit from "../suit/Suit"
import SuitCard from "./SuitCard"

class NumberCard extends SuitCard {
	private _suit: Suit

	private _point: number

	private _rank: number

	constructor(suit: Suit, rank: number, point?: number) {
		super()
		this._suit = suit
		rank = +rank
		if (rank < 2 || rank > 10) {
			throw new CardError(`[NumberCard][constructor]: rank should be in the range from 2 to 10!`)
		}
		this._rank = rank
		if (point === undefined) {
			this._point = this._rank
		} else {
			if (Number.isNaN(+point as any)) {
				throw new CardError(`[NumberCard][constructor]: point is expected to be a number but get the type ${typeof point}!`)
			}
			this._point = +point as any
		}
	}

	getCardId(): string {
		return `${this._suit.getShortName()}${this._rank}.${this._point}`
	}

	getPoint(): number {
		return this._point
	}

	getRank(): number {
		return this._rank
	}

	getCardSuit(): Suit {
		return this._suit
	}

	setPoint(point: number): void {
		this._point = point
	}

	toString():string {
		return `${this._suit.getIcon()}${this._rank}`
	}
}

export default NumberCard
