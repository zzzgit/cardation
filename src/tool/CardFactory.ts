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
	createNumberCard(suit: Suit, point: number, score?:number): NumberCard {
		return new NumberCard(suit, point, score)
	},
	createFaceCard(suit: Suit, point: number, score?:number): FaceCard {
		return new FaceCard(suit, point, score)
	},
	createBlackJokerCard(point: number, score?: number): BlackJokerCard {
		return new BlackJokerCard(point, score)
	},
	createRedJokerCard(point: number, score?: number): RedJokerCard {
		return new RedJokerCard(point, score)
	},
	createBlackCard(score?: number): BlackCard {
		return new BlackCard(score)
	},
}

export default Factory
