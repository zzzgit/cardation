import Suit from "../suit/Suit"
import CardError from "../../error/CardError"
import SuitCard from "./SuitCard"


class AceCard extends SuitCard {
	private _suit: Suit

	private _point:number

	private _score:number

	constructor(suit: Suit, score?:number) {
		super()
		this._suit = suit
		this._point = 1
		if (score === undefined) {
			this._score = this._point
		} else {
			if (Number.isNaN(+score as any)) {
				throw new CardError(`[AceCard][constructor]: score is expected to be a number but get the type ${typeof score}!`)
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

	setCardScore(score: number): void {
		this._score = score
	}

	getCardPoint(): number {
		return this._point
	}

	getCardSuit(): Suit {
		return this._suit
	}

	toString():string {
		return `${this._suit.getIcon()}A`
	}
}

export default AceCard
