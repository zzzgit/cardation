import CardError from "../../error/CardError"

/**
 * Internal use only
 */
class CardImage {
	private _suit

	private _rank

	private _point

	constructor(id: string) {
		const id_regexp = /^[a-zA-Z]\d{1,3}\.\d{1,4}$/
		if (!id_regexp.test(id)) {
			throw new CardError(
				`[CardId][constructor]: the format of id should match /^[a-zA-Z]\\d{1,3}\\.\\d{1,4}$/!`
			)
		}
		const info_array = id.split(".")
		const [firstPart] = info_array
		const type: string = firstPart.slice(0, 1)
		const rank: number = +firstPart.slice(1)
		const point: number = +info_array[1]
		// if (suit.length !== 1) {
		// 	throw new CardError(`[cardation][CardId]: suit should be a single letter!`)
		// }
		// if (typeof rank != "number") {
		// 	throw new CardError(`[cardation][CardId]: rank should be a number!`)
		// }
		// if (typeof point != "number") {
		// 	throw new CardError(`[cardation][CardId]: point should be a number!`)
		// }
		this._suit = type
		this._rank = rank
		this._point = point
	}

	getType(): string {
		return this._suit
	}

	getRank(): number {
		return this._rank
	}

	getPoint(): number {
		return this._point
	}
}

export default CardImage
