import Card from '../model/card/Card'
import ICollection from '../model/collection/ICollection'
import { parseCardFromId } from '../model/serialization/utils'

/**
 * A serialization tool for decks.
 */
class Persistence{
	static serialize(coll: ICollection): string{
		const cards = coll.getDuplicatedCardArray()
		let hash = ''
		for (const card of cards){
			hash += card.getCardId() + ' '
		}
		return hash.trimEnd()
	}

	static parse(hash: string): Card[]{
		const ids_array = hash.split(' ')
		const result: Card[] = []
		for (const id of ids_array){
			const card = parseCardFromId(id)
			result.push(card)
		}
		return result
	}
}

export default Persistence
