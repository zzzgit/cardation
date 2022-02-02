import Suit from "../suit/Suit"


/**
 * not in use
 * interface for all cards
 */
interface ICard{
	getCardId():string

	getCardScore(): number

	setCardScore(): void

	getCardPoint(): number

	getCardSuit(): Suit
}

export default ICard
