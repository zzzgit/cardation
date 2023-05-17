import Card from "../card/Card"

/**
 * A collection of cards.
 */
interface ICollection {
	/**
	 * Return a duplicated collection with the same cards. This is not neccessarily a deep copy.
	 * @returns {Card[]}
	 */
	getDuplicatedCardArray(): Card[]
	/**
	 * Return the original collection of cards.
	 * @returns {Card[]}
	 */
	getCardArray(): Card[]
	/**
	 * Return the length of the array of cards.
	 * @returns {number}
	 */
	getLength(): number
	/**
	 * Whether or not the collection contains a certain card.
	 * @param {Card} card
	 * @returns {boolean} true if the collection contains the card
	 */
	includes(card:Card):boolean
	/**
	 * An id of this deck based on the order of the cards.
	 * @returns {string} id
	 */
	serialize(): string
}

export default ICollection
