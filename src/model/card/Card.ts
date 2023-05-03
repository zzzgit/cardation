

// super class of all kinds of cards
abstract class Card {
	/**
	 * Get the card's rank which is game independent.
	 * (ranks are 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 and 100 200)
	 * @returns {number}
	 */
	abstract getRank(): number
	/**
	 * Get the universal id in a deck.
	 * @returns {string}
	 */
	abstract getCardId(): string
	/**
	 * Get the card's point(positive only). It varies in different games.
	 * @returns {number}
	 */
	abstract getPoint(): number
	/**
	 * Set point according to the game while creating a deck.
	 * @param {number} point
	 */
	abstract setPoint(point: number): void
	/**
	 * Determine whether two cards are the same, according to the card id.
	 * @param {Card} other
	 * @returns {boolean}
	 */
	equals(other:Card): boolean {
		return this.getCardId() == other.getCardId()
	}
}

export default Card
