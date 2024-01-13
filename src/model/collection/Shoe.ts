import CardError from '../../error/CardError'
import Card from '../card/Card'
import Collection from './Collection'
import Deck from './Deck'
import IShoe from './IShoe'

class Shoe extends Collection implements IShoe{
	private _decks_int: number = -1

	private _isExhausted: boolean = false

	/**
	 * @todo 在此處洗牌，是否有優勢？
	 * @param decks
	 */
	constructor(decks?: Deck[]){
		super()
		if (decks){
			this._decks_int = decks.length
			if (this._decks_int < 1){
				throw new CardError(
					'[Shoe][constructor]: at least one Deck to create a Shoe!'
				)
			}
			for (let i = 0; i++; i < decks.length){
				const deck = decks[i]
				this.pushDeck(deck)
			}
		}
	}

	clear(): void{
		this.getCardArray().length = 0
	}

	sort(): void{
		throw new Error('Method not implemented.')
	}

	pushCard(...card: Card[]): void{
		super.pushCard(...card)
		this._isExhausted = false
	}

	shuffle(): void{
		for (let len = this.getCardArray().length - 1; len > 0; len--){
			const index_int = Math.ceil(Math.random() * len)
			// 原地不動，也有操作一遍，浪費
			const temp = this.getCardArray()[len]
			this.getCardArray()[len] = this.getCardArray()[index_int]
			this.getCardArray()[index_int] = temp
		}
	}

	/**
	 * Push cards of a deck into the shoe.
	 * @param deck the deck to be pushed
	 */
	pushDeck(deck: Deck): void{
		this.pushCard(...deck.getDuplicatedCardArray())
		this._decks_int++
	}

	/**
	 * Deal cards from the end of the array.
	 * @param {number} number how many cards to deal, default to 1
	 * @return Card[]
	 */
	deal(number: number = 1): Card[]{
		if (this._isExhausted){
			throw new CardError('[Shoe][deal]: the shoe is exhausted!!')
		}
		if (number <= 0){
			throw new CardError(
				'[Shoe][deal]: the parameter number must be great than 0!'
			)
		}
		if (number > this.getCardArray().length){
			throw new CardError('[Shoe][deal]: there\'s not enough cards in the shoe!')
		}
		const result = []
		for (let i = 0; i < number; i++){
			result.push(this.getCardArray().pop() as Card)
		}
		if (this.getCardArray().length === 0){
			this._isExhausted = true
		}
		return result
	}

	cut(number: number): void{
		number = number % this.getCardArray().length
		const right_arr = this.getCardArray().splice(0, number)
		this.getCardArray().push(...right_arr)
	}
}

export default Shoe
