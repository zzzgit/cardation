import Card from "../model/card/Card"
import ICollection from "../model/collection/ICollection"
import CardImage from "../model/serialization/CardImage"
import Factory from "./CardFactory"
import Suit from "../model/suit/Suit"
import Heart from "../model/suit/Heart"
import Diamond from "../model/suit/Diamond"
import Spade from "../model/suit/Spade"
import Club from "../model/suit/Club"

/**
 * a serialization tool for decks
 */
class Persistence {
	static serialize(coll: ICollection):string {
		const cards = coll.getDuplicatedCardArray()
		let hash = ""
		for (const card of cards) {
			hash += card.getCardId() + " "
		}
		return hash.trimEnd()
	}

	static parse(hash: string): Card[] {
		const ids_array = hash.split(" ")
		const result: Card[] = []
		for (const id of ids_array) {
			const card = parseCard(id)
			result.push(card)
		}
		return result
	}
}
const short2entity_map: {[key: string]: Suit} = {
	h: new Heart(),
	d: new Diamond(),
	s: new Spade(),
	c: new Club(),
}

function parseCard(id:string): Card {
	const entity: CardImage = new CardImage(id)
	const type = entity.getType()
	const rank = +entity.getRank()
	const point = +entity.getPoint()
	if (type == "b") {
		return Factory.createBlackCard(point)
	}
	if (type == "j") {
		if (rank === 31) {
			return Factory.createBlackJokerCard(rank, point)
		}
		return Factory.createRedJokerCard(rank, point)
	}
	// if (['h', 'd', 's', 'c'].includes(type)) {
	// }
	const suit: Suit = short2entity_map[type]
	if (rank === 1) {
		return Factory.createAceCard(suit, point)
	}
	if (1 < rank && rank < 11) {
		return Factory.createNumberCard(suit, rank, point)
	}
	// if (rank > 10) {
	// }
	return Factory.createFaceCard(suit, rank, point)
}


export default Persistence
