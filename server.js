// CommonJS Forma antigua de importar el servidor
// const express = require('express')

// ESModule
import './config/dababase.js'
import express from "express";
import indexRouter from "./routes/index.js";
import cors from 'cors'

// El servidor está en app, es donde instancio express
const app = express()

app.use( cors() )

// El servidor usa en el endpoint /api, el indexRouter
app.use("/api", indexRouter)

// Usa el que ponen el lugar donde la hosteas o si trabajas local el 8080 
app.listen( process.env.PORT || 8080, ()=>{
     console.log("Servidor escuchando en puerto 8080");
})
