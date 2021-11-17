const express = require('express');
const router = express.Router();

// RENDER PARA PLANTILLAS
router.get('/', (req, res) =>{
    res.render("index", {titulo : "mi titulo dinámico"});
})

// página de servicios ej
router.get('/servicios', (req, res) => {
    res.render("servicios", {tituloServicios : "Esto es un título de servicios"});
}) 

module.exports = router;