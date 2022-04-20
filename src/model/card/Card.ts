

// super class of all kinds of cards
abstract class Card {
	/**
	 * ranks are 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 and 100 200
	 */
	abstract getRank(): number
	/**
	 * universal id in a deck
	 */
	abstract getCardId(): string
	/**
	 * score varies in different games, positive only
	 */
	abstract getCardScore(): number
	/**
	 * set score according to the game while creating a deck
	 */
	abstract setCardScore(score: number): void

	equals(other:Card): boolean {
		return this.getCardId() == other.getCardId()
	}
}

export default Card
