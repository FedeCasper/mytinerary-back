import express from "express";

const authRouter = express.Router()

authRouter.get("/", (req, res) => {
     res.send(' GET Usuarios ')
})

export default authRouter