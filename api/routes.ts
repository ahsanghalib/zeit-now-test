import express, { Request, Response } from 'express'
import { testMiddleware } from './middlewares'
import controller from './controller'

const routes = express.Router()

routes.get(`/`, (req: Request, res: Response) => {
  res.status(200).json({ message: 'Root' })
})

routes.get(`/hello/:name`, testMiddleware, controller.helloWorld)
routes.get(`/test`, controller.testQuery)

export default routes
