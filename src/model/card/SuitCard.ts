import Suit from '../suit/Suit'
import Card from './Card'

/**
 * Cards belong to heart, diamond, spade and club. (4 suits)
 * Jonker doesn't belong to any suit.
 */
abstract class SuitCard extends Card{
	/**
	 * 4 suits: heart, diamond, spade and club.
	 * @returns {Suit}
	 */
	abstract getCardSuit(): Suit
}

export default SuitCard
