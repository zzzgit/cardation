import Suit from "./Suit"


class Heart extends Suit {
	private readonly _id: string = "SUIT_HEART"

	getId(): string {
		return this._id
	}

	getShortName(): string {
		return "h"
	}

	getIcon(): string {
		return "♥"
	}
}

export default Heart
