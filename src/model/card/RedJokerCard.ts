import CardError from "../../error/CardError"
import JokerCard from "./JokerCard"


class RedJokerCard extends JokerCard {
	private _point: number

	private _score: number = 10

	constructor(point: number = 32, score?:number) {
		super()
		this._point = point
		this._score = this._point
		if (score === undefined) {
			this._score = this._point
		} else {
			if (Number.isNaN(+score as any)) {
				throw new CardError(`[RedJokerCard][constructor]: score is expected to be a number but get the type ${typeof score}!`)
			}
			this._score = +score as any
		}
	}

	getCardId(): string {
		return `j${this._point}.${this._score}`
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

	toString():string {
		return '🂿'
	}
}

export default RedJokerCard
