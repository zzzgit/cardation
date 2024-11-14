import Suit from './Suit'

class Spade extends Suit{

	private _id: string = 'SUIT_SPADE'

	getId(): string{
		return this._id
	}

	getShortName(): string{
		return 's'
	}

	getIcon(): string{
		return '♠'
	}

}

export default Spade
