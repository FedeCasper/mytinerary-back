import express from "express";
import eventRouter from "./eventRouter.js";
import authRouter from "./authRouter.js"

const router = express.Router()

router.use( "/events",  eventRouter )
router.use( "/auth",  authRouter )

export default router 