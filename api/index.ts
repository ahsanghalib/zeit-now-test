import express, { Request, Response } from 'express'
import cors from 'cors'
import { errorMiddleware } from './middlewares'
import routes from './routes'

const app = express()

app.use(express.urlencoded({ extended: false }))

// all routes
app.use('/api', routes, cors())

// global not found
app.use((req: Request, res: Response) => {
  res
    .status(404)
    .json({
      message: ['Request resource not found.'],
      url: req.originalUrl,
    })
})

app.use(errorMiddleware)

export default app
