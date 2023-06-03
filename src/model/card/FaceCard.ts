import CardError from "../../error/CardError"
import Suit from "../suit/Suit"
import SuitCard from "./SuitCard"

const notationMap: {[key: string]: number} = {
	j: 11,
	J: 11,
	q: 12,
	Q: 12,
	k: 13,
	K: 13,
}
// eslint-disable-next-line no-sparse-arrays
const notationArray = [, , , , , , , , , , , "J", "Q", "K"]

class FaceCard extends SuitCard {
	private _suit: Suit

	private _rank: number

	private _point: number

	constructor(suit: Suit, rank: number | string, point?: number) {
		super()
		this._suit = suit
		if (typeof rank == "string") {
			rank = notationMap[rank]
		}
		if (typeof rank != "number") {
			throw new CardError(
				`[FaceCard][constructor]: rank should be one of the elements of ["J", "Q", "K", "j", "q", "k", "11", "12", "13"]!`
			)
		}
		if (rank < 11 || rank > 13) {
			throw new CardError(
				`[FaceCard][constructor]: rank should be in the range from 11 to 13!`
			)
		}
		this._rank = rank
		if (point === undefined) {
			this._point = this._rank
		} else {
			if (Number.isNaN(+point as any)) {
				throw new CardError(
					`[FaceCard][constructor]: point is expected to be a number but get the type ${typeof point}!`
				)
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

	setPoint(point: number): void {
		this._point = point
	}

	getCardSuit(): Suit {
		return this._suit
	}

	toString(): string {
		return `${this._suit.getIcon()}${notationArray[this._rank]}`
	}
}

export default FaceCard
