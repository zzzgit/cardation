import Card from "../card/Card"
import Collection from "./Collection"

/**
 *
 * abstract father class for all collection
 */
abstract class Deck extends Collection {
	/**
	 *  deck靜態數組裡面的東西要保護起來，數組和數組內容都不能被修改
	 * score will be specified in implementation
	 */
	abstract getOrCreatArray() :Card[]
	/**
	 * detect the integety of the deck
	 */
	abstract detect() :boolean
}

export default Deck
