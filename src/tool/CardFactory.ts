import AceCard from "../model/card/AceCard"
import BlackCard from "../model/card/BlackMarkerCard"
import FaceCard from "../model/card/FaceCard"
import NumberCard from "../model/card/NumberCard"
import Suit from "../model/suit/Suit"
import BlackJokerCard from "../model/card/BlackJokerCard"
import RedJokerCard from "../model/card/RedJokerCard"

/**
 * a tool which pass the parameters to constructor as is
 */
const Factory = {
	createAceCard(suit: Suit, score?: number): AceCard {
		return new AceCard(suit, score)
	},
	createNumberCard(suit: Suit, rank: number, score?:number): NumberCard {
		return new NumberCard(suit, rank, score)
	},
	createFaceCard(suit: Suit, rank: number, score?:number): FaceCard {
		return new FaceCard(suit, rank, score)
	},
	createBlackJokerCard(rank: number, score?: number): BlackJokerCard {
		return new BlackJokerCard(rank, score)
	},
	createRedJokerCard(rank: number, score?: number): RedJokerCard {
		return new RedJokerCard(rank, score)
	},
	createBlackCard(score?: number): BlackCard {
		return new BlackCard(score)
	},
}

export default Factory
