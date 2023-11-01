import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
let uri_lin = process.env.MONGO;

console.log(uri_lin);

mongoose.connect(uri_lin)
   .then( ()=> console.log(' <-- ** Database connected ** -->') )
   .catch( err => console.log(err) );