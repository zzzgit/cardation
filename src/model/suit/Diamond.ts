import Suit from './Suit'

class Diamond extends Suit{

	private _id: string = 'SUIT_DIAMOND'

	getId(): string{
		return this._id
	}

	getShortName(): string{
		return 'd'
	}

	getIcon(): string{
		return '♦'
	}

}

export default Diamond
