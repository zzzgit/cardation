import Persistence from "../../tool/Persistence"
import Card from "../card/Card"
import ICollection from "./ICollection"

/**
 *
 * Abstract class for all collection which implements the serialize method.
 *
 */
abstract class Collection implements ICollection {
	private _cardArray: Card[] = []

	getCardArray(): Card[] {
		return this._cardArray
	}

	/**
	 * Insert card(s) to the collection.
	 * @param index where to insert
	 * @param cards the cards to be inserted
	 */
	insertCard(index: number, ...cards: Card[]):void {
		this.getCardArray().splice(index, 0, ...cards)
	}

	getDuplicatedCardArray(): Card[] {
		return [...this._cardArray]
	}

	/**
	 * Push card(s) to the collection.
	 * @param card card to be push in
	 */
	pushCard(...card:Card[]): void {
		this._cardArray.push(...card)
	}

	includes(card: Card): boolean {
		const cardArray = this.getDuplicatedCardArray()
		return cardArray.find(element => card.equals(element)) ? true : false
	}

	serialize(): string {
		return Persistence.serialize(this)
	}
}

export default Collection
