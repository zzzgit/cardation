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
	const point = +entity.getPoint()
	const score = +entity.getScore()
	if (type == "b") {
		return Factory.createBlackCard(score)
	}
	if (type == "j") {
		if (point === 31) {
			return Factory.createBlackJokerCard(point, score)
		}
		return Factory.createRedJokerCard(point, score)
	}
	// if (['h', 'd', 's', 'c'].includes(type)) {
	// }
	const suit: Suit = short2entity_map[type]
	if (point === 1) {
		return Factory.createAceCard(suit, score)
	}
	if (1 < point && point < 11) {
		return Factory.createNumberCard(suit, point, score)
	}
	// if (point > 10) {
	// }
	return Factory.createFaceCard(suit, point, score)
}


export default Persistence
