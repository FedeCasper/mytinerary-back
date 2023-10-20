import express from "express";

const eventRouter = express.Router()

eventRouter.get("/", (req, res) => {
     res.send(' Eventos ')
})

export default eventRouter