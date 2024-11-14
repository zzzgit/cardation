import CardError from '../../error/CardError'
import Rank from '../rank/Rank'
import JokerCard from './JokerCard'

class BlackJokerCard extends JokerCard{

	private _rank: number

	private _point: number = 10

	constructor(rank: number = Rank.BlackJoker, point?: number){
		super()
		this._rank = rank
		this._point = this._rank
		if (point === undefined){
			this._point = this._rank
		} else {
			if (Number.isNaN(+point)){
				throw new CardError(`[BlackCardCard][constructor]: point is expected to be a number but get the type ${typeof point}!`)
			}
			this._point = +point
		}
	}

	getCardId(): string{
		return `j${this._rank}.${this._point}`
	}

	getPoint(): number{
		return this._point
	}

	getRank(): number{
		return this._rank
	}

	setPoint(point: number): void{
		this._point = point
	}

	toString(): string{
		return '🃏'
	}

}

export default BlackJokerCard
