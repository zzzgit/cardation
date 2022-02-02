import Persistence from "../../tool/Persistence"
import Card from "../card/Card"
import ICollection from "./ICollection"

/**
 *
 * abstract class for all collection which implements the serialize method
 *
 */
abstract class Collection implements ICollection {
	private _cardArray: Card[] = []

	getCardArray(): Card[] {
		return this._cardArray
	}

	insertCard(index: number, ...cards: Card[]):void {
		this.getCardArray().splice(index, 0, ...cards)
	}

	getDuplicatedCardArray(): Card[] {
		return [...this._cardArray]
	}

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
