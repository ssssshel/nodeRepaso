const express = require('express');
const router  = express.Router();

//SE CREA UNA VARIABLE QUE REPRESENTE EL SCHEMA CREADO
const Mascota = require('../models/mascota');

//MOSTRAR LOS DOCUMENTOS DE LA BD

router.get('/',async (req, res) => {

    try {
        const arrayMascotasDB = await Mascota.find(); 
        console.log(arrayMascotasDB);
        res.render("mascotas",{
            arrayMascotasDB
        })
    } catch (error) {
        console.log(error);
    } 
})


//MOSTRAR PAGINA FORMULARIO PARA AGREGAR NUEVOS DOCUMENTOS

router.get('/crear', (req, res) => {
    res.render('crear')
})


//AGREGAR NUEVO DOCUMENTO A LA BD

router.post('/', async (req, res) => {
    const body = req.body;
    try {
        // const mascotaDB = new Mascota(body);
        // await mascotaDB.save();

        await Mascota.create(body);  //ESPERAR A QUE EL DOCUMENTO SE CREE EN LA PLANTILLA CON EL DOCUMENTO QUE ESTÁ EN BODY

        res.redirect('/mascotas');
    } catch (error) {
        console.log(error);
    }
})


//LEER UN ÚNICO DOCUMENTO DE LA BD

//se configura una variable :id en la ruta para que asi esta pueda tomar su valor y buscar el documento de manera
//individual
router.get('/:id', async(req, res) => {
    const id = req.params.id;

    try {
        const mascotaDB = await Mascota.findOne({ _id: id }); //la constante mascota espera a que el schema pueda encontrar el valor del elemento id en forma de objeto
        console.log(mascotaDB);

        res.render('detalle', {
            mascota: mascotaDB,
            error: false
        })
    } catch (error) {
        console.log(error);
        res.render('detalle', {
            error: true,
            mensaje: 'No se encuentra el ID seleccionado'
        })
    }
})


//ELIMINAR UN DOCUMENTO ESPECÍFICO

//CONTIENE LA RUTA E INSTRUCCIONES ESPECIFICAS PARA REALIZAR LA TAREA

router.delete('/:id', async(req, res) =>{
    const id = req.params.id;

    try {
        const mascotaDB = await Mascota.findByIdAndDelete({_id: id});

        if(mascotaDB){
            res.json({
                estado: true,
                mensaje: 'Eliminado'
            })
        }else{
            res.json({
                estado: false,
                mensaje: 'Falló eliminar'
            })
        }
    } catch (error) {
        console.log(error);
    }
})


//EDITAR UN DOCUMENTO ESPECÍFICO

router.put('/:id', async(req, res) =>{
    const id = req.params.id;
    const body = req.body;

    try {
        const mascotaDB = await Mascota.findByIdAndUpdate(id, body, { useFindAndModify: false });
        console.log(mascotaDB);

        res.json({
            estado: true,
            mensaje: 'Editado'
        });
    } catch (error) {
        console.log(error);
        res.json({
            estado: false,
            mensaje: 'Fallamos'
        })
    }
})

module.exports = router;