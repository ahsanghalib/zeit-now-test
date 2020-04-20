import { Request, Response } from 'express'

const controller = {
  helloWorld: (req: Request, res: Response) => {
    const name = req.params.name
    res.status(200).json({ name, message: 'Hello World from Controller' })
  },

  testQuery: (req: Request, res: Response) => {
    const name = req.query.name
    res.status(200).json({ name, message: 'Testing Query Parameter' })
  }
}

export default controller
