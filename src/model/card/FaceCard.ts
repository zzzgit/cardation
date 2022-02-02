import CardError from "../../error/CardError"
import Suit from "../suit/Suit"
import SuitCard from "./SuitCard"


const notationMap: { [key: string]: number } = {
	"j": 11,
	"J": 11,
	"q": 12,
	"Q": 12,
	"k": 13,
	"K": 13,
}
// eslint-disable-next-line no-sparse-arrays
const notationArray = [, , , , , , , , , , , "J", "Q", "K"]


class FaceCard extends SuitCard {
	private _suit: Suit

	private _point: number

	private _score: number

	constructor(suit: Suit, point: number | string, score?:number) {
		super()
		this._suit = suit
		if (typeof point == "string") {
			point = notationMap[point]
		}
		if (typeof point != "number") {
			throw new CardError(`[FaceCard][constructor]: point shoulb be one of the elements of ["J", "Q", "K", "j", "q", "k", "11", "12", "13"]!`)
		}
		if (point < 11 || point > 13) {
			throw new CardError(`[FaceCard][constructor]: point shoulb be in the range from 11 to 13!`)
		}
		this._point = point
		if (score === undefined) {
			this._score = this._point
		} else {
			if (Number.isNaN(+score as any)) {
				throw new CardError(`[FaceCard][constructor]: score is expected to be a number but get the type ${typeof score}!`)
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

	setCardScore(score: number): void {
		this._score = score
	}

	getCardSuit(): Suit {
		return this._suit
	}

	toString(): string {
		return `${this._suit.getIcon()}${notationArray[this._point]}`
	}
}

export default FaceCard
