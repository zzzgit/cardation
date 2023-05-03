import Card from "../card/Card"
import ICollection from "./ICollection"

/**
 * A shoe is a collection of cards.
 */
interface IShoe extends ICollection {
	/**
	 * Shuffle.
	 * @todo 傳入random函數
	 * @param {Card[]} cards cards to be shuffled
	 * @returns {Card[]} shuffled cards
	 */
	shuffle():void
	/**
	 * Sort a shoe.
	 */
	sort():void
	/**
	 * Cut the cards conllection.
	 * @param num the index from where to cut
	 */
	cut(num: number):void
	deal(number: number):Card[]
	/**
	 * Clear the shoe, all cards will be removed.
	 */
	clear(): void
}

export default IShoe
