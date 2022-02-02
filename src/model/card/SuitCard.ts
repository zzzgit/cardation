import Suit from "../suit/Suit"
import Card from "./Card"

abstract class SuitCard extends Card {
	/**
	 * heart, diamond, spade, club
	 */
	abstract getCardSuit(): Suit
}

export default SuitCard
