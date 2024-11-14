import Suit from '../suit/Suit'
import CardError from '../../error/CardError'
import SuitCard from './SuitCard'
import Rank from '../rank/Rank'
import { getGraph } from '../serialization/utils'

class AceCard extends SuitCard{

	private _suit: Suit

	private _rank: number

	private _point: number

	constructor(suit: Suit, point?: number){
		super()
		this._suit = suit
		this._rank = Rank.A
		if (point === undefined){
			this._point = this._rank
		} else {
			if (Number.isNaN(+point)){
				throw new CardError(`[AceCard][constructor]: point is expected to be a number but get the type ${typeof point}!`)
			}
			this._point = +point
		}
	}

	getCardId(): string{
		return `${this._suit.getShortName()}${this._rank}.${this._point}`
	}

	getPoint(): number{
		return this._point
	}

	setPoint(point: number): void{
		this._point = point
	}

	getRank(): number{
		return this._rank
	}

	getCardSuit(): Suit{
		return this._suit
	}

	toString(): string{
		return `${this._suit.getIcon()}A`
	}

	/**
     * Convert the card to a colored string, which can be printed to the console.
     * @returns {string}
     */
	getGraph(): string{
		return getGraph(this)
	}

}

export default AceCard
