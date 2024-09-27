import * as chalk from 'chalk'
import Suit from '../suit/Suit'
import Heart from '../suit/Heart'
import Diamond from '../suit/Diamond'
import Spade from '../suit/Spade'
import Club from '../suit/Club'
import CardFactory from '../../tool/CardFactory'
import Card from '../card/Card'
import CardError from '../../error/CardError'
import SuitCard from '../card/SuitCard'
import JokerCard from '../card/JokerCard'
import RedJokerCard from '../card/RedJokerCard'
import MarkerCard from '../card/MarkerCard'

/**
 * Get the colored graph of a card.  
 * @param card A SuitCard instance 
 * @returns Colored string which can show in console
 */
const getGraph = (card: Card): string=>{
	const line1 = '┌─────┐'
	const line5 = '\n└─────┘'
	let line2, line3, line4
	// eslint-disable-next-line @typescript-eslint/ban-types
	let colorise: Function = (str: string)=>str
	const rank = card.getRank()
	let score = rank + ''
	if(card instanceof MarkerCard){
		line2 = '\n│     |'
		line4 = '\n│     |'
		line3 = '\n│  M  │'
	}
	if(card instanceof JokerCard){
		line2 = '\n│     |'
		line4 = '\n│     |'
		if(card instanceof RedJokerCard){
			colorise = chalk.red
		}else{
			// colorise = (str: string)=>str
		}
		const coloredNumber = colorise('Joker')
		line3 = `\n│${coloredNumber}│`
	}else {
		if(rank === 1){
			score = 'A'
		}else if(rank === 10){
			// score = 'T'
			// score = '+'
		}else if(rank === 11){
			score = 'J'
		}else if (rank === 12){
			score = 'Q'
		}else if (rank === 13){
			score = 'K'
		}
		const suit = (card as SuitCard).getCardSuit().getShortName()
		if(suit === 'h' || suit === 'd'){
			colorise = chalk.red
		}
		const coloredNumber = colorise(score)
		const coloredSuit = colorise(short2char_map[(card as SuitCard).getCardSuit().getShortName()])
		line2 = `\n│${coloredSuit}    │`
		line3 = `\n│  ${coloredNumber}  │`
		line4 = `\n│    ${coloredSuit}│`
		if(rank == 10){
			line3 = `\n│  ${coloredNumber} │`
		}
	}
	return `${line1}${line2}${line3}${line4}${line5}`
}

const short2entity_map: {[key: string]: Suit} = {
	h: new Heart(),
	d: new Diamond(),
	s: new Spade(),
	c: new Club(),
}

const short2char_map: {[key: string]: string} = {
	h: '♥',
	d: '♦',
	s: '♠',
	c: '♣',
}
/**
 * Parse a card from a string id.
 * @param id the id of a card
 * @returns the card parsed from the id
 */
function parseCardFromId(id: string): Card{
	const id_regexp = /^[a-zA-Z]\d{1,3}\.\d{1,4}$/
	if (!id_regexp.test(id)){
		throw new CardError(
			'[utils][parseCardFromId]: the format of id should match /^[a-zA-Z]\\d{1,3}\\.\\d{1,4}$/!'
		)
	}
	const info_array = id.split('.')
	const [firstPart] = info_array
	const type: string = firstPart.slice(0, 1)
	const rank: number = +firstPart.slice(1)
	const point: number = +info_array[1]
	// if (suit.length !== 1) {
	// 	throw new CardError(`[utils][CardId]: suit should be a single letter!`)
	// }
	// if (typeof rank != "number") {
	// 	throw new CardError(`[utils][CardId]: rank should be a number!`)
	// }
	// if (typeof point != "number") {
	// 	throw new CardError(`[utils][CardId]: point should be a number!`)
	// }
	if (type == 'b'){
		return CardFactory.createBlackCard(point)
	}
	if (type == 'j'){
		if (rank === 31){
			return CardFactory.createBlackJokerCard(rank, point)
		}
		return CardFactory.createRedJokerCard(rank, point)
	}
	// if (['h', 'd', 's', 'c'].includes(type)) {
	// }
	const suit: Suit = short2entity_map[type]
	if (rank === 1){
		return CardFactory.createAceCard(suit, point)
	}
	if (rank < 11){
		return CardFactory.createNumberCard(suit, rank, point)
	}
	return CardFactory.createFaceCard(suit, rank, point)
}

export {
	getGraph,
	short2entity_map,
	short2char_map,
	parseCardFromId
}
