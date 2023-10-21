import { MOVIES } from "../data/data.js"

const moviesController = {
     getMovies : ( _, res) => {
          res.status( 200 ).json( { movies: MOVIES } )
     },
     getMoviesCategories : ( req, res) => {
          res.status( 200 ).json( { moviesCategories: [...new Set(MOVIES.map(movie => movie.gender))] } )
     },
     postMovies : (req, res) => {
          res.send(' POST movies ')
     }
}

export default moviesController