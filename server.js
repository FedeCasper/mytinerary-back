// CommonJS Forma antigua de importar el servidor
// const express = require('express')

// ESModule
import express from "express";
import router from "./routes/index.js";


// El servidor está en app, es donde instancio express
const app = express()

// El servidor usa en el endpoint /api, el router
app.use("/api", router)

app.listen( 8080, ()=>{
     console.log("Servidor escuchando en puerto 8080");
})