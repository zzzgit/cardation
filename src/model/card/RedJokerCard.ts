import CardError from "../../error/CardError"
import JokerCard from "./JokerCard"


class RedJokerCard extends JokerCard {
	private _rank: number

	private _score: number = 10

	constructor(rank: number = 32, score?:number) {
		super()
		this._rank = rank
		this._score = this._rank
		if (score === undefined) {
			this._score = this._rank
		} else {
			if (Number.isNaN(+score as any)) {
				throw new CardError(`[RedJokerCard][constructor]: score is expected to be a number but get the type ${typeof score}!`)
			}
			this._score = +score as any
		}
	}

	getCardId(): string {
		return `j${this._rank}.${this._score}`
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

	toString():string {
		return '🂿'
	}
}

export default RedJokerCard
