// CommonJS Forma antigua de importar el servidor
// const express = require('express')

// ESModule
import express from "express";
import indexRouter from "./routes/index.js";
import cors from 'cors'


// El servidor está en app, es donde instancio express
const app = express()

app.use( cors() )

// El servidor usa en el endpoint /api, el indexRouter
app.use("/api", indexRouter)

app.listen( 8080, ()=>{
     console.log("Servidor escuchando en puerto 8080");
})