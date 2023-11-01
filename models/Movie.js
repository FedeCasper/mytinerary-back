import mongoose from 'mongoose';

const { Schema } = mongoose;

// Creo el esquema
const MovieSchema = new Schema({
   title: { type: String, required: true },
   genre: [ {type: String} ],
   revenues: Number
});

// Creo el modelo
const Movie = mongoose.model('movie', MovieSchema);

export default Movie;