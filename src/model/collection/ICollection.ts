import Card from "../card/Card"

interface ICollection {
	/**
	 * it is a duplicated array
	 */
	getDuplicatedCardArray(): Card[]

	getCardArray(): Card[]
	/**
	 * whether or not the collection contains a certain card
	 * @param card
	 */
	includes(card:Card):boolean
	/**
	 * an id of this deck based on the order of the cards
	 */
	serialize(): string
}

export default ICollection
