import { NextFunction, Request, Response } from 'express'
import { HttpException, WrongParams } from './exceptions'

export const testMiddleware = (req: Request, res: Response, next: NextFunction) => {
  if (req.params.name !== 'ahsan') {
    throw new WrongParams(req.params.name)
  }

  next()
}

export const errorMiddleware = (error: HttpException, request: Request, response: Response, next: NextFunction) => {
  const status = error.status || 500
  const message = [error.message] || ['Something went wrong...']
  response
    .status(status)
    .json({ message, status })
  next()
}
