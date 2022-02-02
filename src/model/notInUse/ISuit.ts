/**
 * all Suits should implement this interface
 */

interface ISuit {
	getId(): string
	/**
	 * in customised classes, h d c s j should be avoided.
	 */
	getShortName(): string
	getIcon(): string
	/**
	 * register itself to the Suit namespace
	 */
	register(): void
}

export default ISuit
