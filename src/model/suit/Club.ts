import Suit from "./Suit"


class Club extends Suit {
	private _id: string = "SUIT_CLUB"

	getId(): string {
		return this._id
	}

	getShortName(): string {
		return "c"
	}

	getIcon(): string {
		return "♣"
	}
}

export default Club
