import Card from "../card/Card"
import Collection from "./Collection"

/**
 *
 * Abstract father class for all collection.
 */
abstract class Deck extends Collection {
	/**
	 * Create an array of cards for the deck, if already exist, return the array.
	 * @param {Card[]} cards
	 */
	abstract getOrCreatArray(): Card[]
	/**
	 * Detect the integety of the deck.
	 * @returns {boolean} true if the deck is valid
	 */
	abstract detect(): boolean
}

export default Deck
