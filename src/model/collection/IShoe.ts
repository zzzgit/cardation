import Card from "../card/Card"
import ICollection from "./ICollection"

/**
 * shuffle 和 cut 本來是入shoe之前的動作，為了方便才寫在這個class中
 */
interface IShoe extends ICollection {
	// 傳入random函數
	shuffle():void
	sort():void
	cut(num: number):void
	/**
	 * 牌不夠，需要報錯
	 */
	deal():Card[]
	clear(): void
}

export default IShoe
