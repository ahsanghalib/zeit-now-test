import express from 'express'

const app = express()
const port = 5000;

app.use(express.urlencoded({extended: false}));

const routes = express.Router()

routes.get("/api/", (req, res) => {
    res.status(200).json({message: 'Root'})
})

routes.get("/api/hello", (req, res) => {
    res.status(200).json({message: 'Hello World'})
})

app.use(routes)

export default app


