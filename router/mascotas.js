const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
    res.render("mascotas", {
        arrayMascotas: [
            {id: 00000001, nombre: "Marqués", descripcion: "gato blanco"},
            {id: 00000002, nombre: "Nieve", descripcion: "conejo blanco"},
        ]
    })
})

module.exports = router;