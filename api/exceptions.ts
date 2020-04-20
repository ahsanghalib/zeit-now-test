import { HttpExceptionInterface } from './interfaces'

export class HttpException implements HttpExceptionInterface {
  public status: number
  public message: string[]

  constructor(status: number, message: string[]) {
    this.status = status
    this.message = message
  }
}

export class WrongParams extends HttpException {
  constructor(params: string) {
    super(400, [`You entered wrong parameter ${params}`])
  }
}
