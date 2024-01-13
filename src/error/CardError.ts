import { CustomError } from 'ts-custom-error'

class CardError extends CustomError{
	constructor(message?: string){
		super(message)
		this.message = '[cardation]' + message
	}
}
export default CardError
