/**
 * all Suits should implement this interface
 */
abstract class AbstractSuit {
	abstract getId(): string
	/**
	 * in customised classes, h d c s j should be avoided.
	 */
	abstract getShortName(): string
	abstract getIcon(): string
}

export default AbstractSuit
