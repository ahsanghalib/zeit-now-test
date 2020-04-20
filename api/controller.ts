import { Request, Response } from 'express'

const controller = {
  helloWorld: (req: Request, res: Response) => {
    const name = req.params.name
    res.status(200).json({ name, message: 'Hello World from Controller' })
  },
}

export default controller
