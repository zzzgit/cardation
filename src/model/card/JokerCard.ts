import Card from './Card'
import { getGraph } from '../serialization/utils'

abstract class JokerCard extends Card{
	/**
     * Convert the card to a colored string, which can be printed to the console.
     * @returns {string}
     */
	getGraph(): string{
		return getGraph(this)
	}
}

export default JokerCard
