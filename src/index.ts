// error
import CardError from "./error/CardError"
// card
import Card from "./model/card/Card"
import AceCard from "./model/card/AceCard"
import BlackJokerCard from "./model/card/BlackJokerCard"
import BlackMarkerCard from "./model/card/BlackMarkerCard"
import FaceCard from "./model/card/FaceCard"
import JokerCard from "./model/card/JokerCard"
import MarkerCard from "./model/card/MarkerCard"
import NumberCard from "./model/card/NumberCard"
import RedJokerCard from "./model/card/RedJokerCard"
import SuitCard from "./model/card/SuitCard"
// collection
import Collection from "./model/collection/Collection"
import Deck from "./model/collection/Deck"
import Hand from "./model/collection/Hand"
import ICollection from "./model/collection/ICollection"
import IShoe from "./model/collection/IShoe"
import Shoe from "./model/collection/Shoe"
// pattern
import Flush from "./model/pattern/Flush"
import IPattern from "./model/pattern/IPattern"
import Pair from "./model/pattern/Pair"
// serialization
import CardImage from "./model/serialization/CardImage"
// suit
import Club from "./model/suit/Club"
import Diamond from "./model/suit/Diamond"
import Heart from "./model/suit/Heart"
import Spade from "./model/suit/Spade"
import Suit from "./model/suit/Suit"
// tool
import CardFactory from "./tool/CardFactory"
import Persistence from "./tool/Persistence"


/**
 * namespace for this lib, not in use
 */
const Cardation: { [key: string]: any } = { // readonly
	__initailized: false,
	__descriptor: {
		configurable: false,	// 不可刪除
		enumerable: true,		// 可讀
		writable: false,		// 不可修改
	},
	initialize: function():number {
		if (this.__initailized) {
			return 0
		}
		this.__initailized = true
		return 1
	},
}
export default Cardation


export {CardError}
export {Card, AceCard, BlackJokerCard, BlackMarkerCard, FaceCard, JokerCard, MarkerCard, NumberCard, SuitCard, RedJokerCard}
export {Collection, Deck, Hand, ICollection, IShoe, Shoe}
export {Flush, IPattern, Pair}
export {CardImage}
export {Club, Diamond, Heart, Spade, Suit}
export {CardFactory, Persistence}
