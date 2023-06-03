import CardError from "../../error/CardError"
import MarkerCard from "./MarkerCard"

class BlackMarkerCard extends MarkerCard {
	private _rank: number

	private _point: number = 0

	constructor(point?: number) {
		super()
		this._rank = 0
		this._point = this._rank
		if (point === undefined) {
			this._point = this._rank
		} else {
			if (Number.isNaN(+point as any)) {
				throw new CardError(
					`[BlackCard][constructor]: point is expected to be a number but get the type ${typeof point}!`
				)
			}
			this._point = +point as any
		}
	}

	getCardId(): string {
		return `b${this._rank}.${this._point}`
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

	toString(): string {
		return "⬛"
	}
}

export default BlackMarkerCard
