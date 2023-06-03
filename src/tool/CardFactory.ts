import AceCard from "../model/card/AceCard"
import BlackCard from "../model/card/BlackMarkerCard"
import FaceCard from "../model/card/FaceCard"
import NumberCard from "../model/card/NumberCard"
import Suit from "../model/suit/Suit"
import BlackJokerCard from "../model/card/BlackJokerCard"
import RedJokerCard from "../model/card/RedJokerCard"

/**
 * A tool which pass the parameters to constructor as is.
 */
const CardFactory = {
	createAceCard(suit: Suit, point?: number): AceCard {
		return new AceCard(suit, point)
	},
	createNumberCard(suit: Suit, rank: number, point?: number): NumberCard {
		return new NumberCard(suit, rank, point)
	},
	createFaceCard(suit: Suit, rank: number, point?: number): FaceCard {
		return new FaceCard(suit, rank, point)
	},
	createBlackJokerCard(rank: number, point?: number): BlackJokerCard {
		return new BlackJokerCard(rank, point)
	},
	createRedJokerCard(rank: number, point?: number): RedJokerCard {
		return new RedJokerCard(rank, point)
	},
	createBlackCard(point?: number): BlackCard {
		return new BlackCard(point)
	},
}

export default CardFactory
