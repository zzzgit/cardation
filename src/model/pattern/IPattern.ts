import Card from "../card/Card"

interface IPattern {
	/**
	 * the cards which form this pattern
	 */
	getCards(): Card[]
}

export default IPattern
