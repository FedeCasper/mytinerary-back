import express from "express";
import moviesControllers from ".././controllers/moviesControllers.js"

const moviesRouter = express.Router()

moviesRouter.get( "/", moviesControllers.getMovies )
moviesRouter.post( "/", moviesControllers.postMovies )

moviesRouter.get( "/categories", moviesControllers.getMoviesCategories )

moviesRouter.get( "/unamovie", (req, res) => res.send(' GET una movie ') )

export default moviesRouter