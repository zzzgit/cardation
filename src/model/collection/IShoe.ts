import Card from "../card/Card"
import ICollection from "./ICollection"

/**
 * A shoe is a collection of cards.
 */
interface IShoe extends ICollection {
	/**
	 * Shuffle.
	 * @todo 傳入random函數
	 */
	shuffle():void
	/**
	 * Sort a shoe.
	 */
	sort():void
	/**
	 * Cut the cards conllection.
	 * @param number the index from where to cut
	 */
	cut(number: number):void
	deal(number: number):Card[]
	/**
	 * Clear the shoe, all cards will be removed.
	 */
	clear(): void
}

export default IShoe
