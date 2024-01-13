import Card from '../card/Card'

/**
 * Pattern interface
 */
interface IPattern {
	/**
	 * Get the cards which form this pattern.
	 * @returns {Card[]}
	 */
	getCards(): Card[]
}

export default IPattern
