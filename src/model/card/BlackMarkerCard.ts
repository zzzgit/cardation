import CardError from "../../error/CardError"
import MarkerCard from "./MarkerCard"


class BlackMarkerCard extends MarkerCard {
	private _rank: number

	private _score: number = 0

	constructor(score?: number) {
		super()
		this._rank = 0
		this._score = this._rank
		if (score === undefined) {
			this._score = this._rank
		} else {
			if (Number.isNaN(+score as any)) {
				throw new CardError(`[BlackCard][constructor]: score is expected to be a number but get the type ${typeof score}!`)
			}
			this._score = +score as any
		}
	}

	getCardId(): string {
		return `b${this._rank}.${this._score}`
	}

	getCardScore(): number {
		return this._score
	}

	getRank(): number {
		return this._rank
	}

	setCardScore(score: number): void {
		this._score = score
	}

	toString(): string {
		return '⬛'
	}
}

export default BlackMarkerCard
