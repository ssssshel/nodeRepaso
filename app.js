const express = require('express');
const app = express();
require('dotenv').config();

//conexión a base de datos
const mongoose = require('mongoose');

const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.mpipy.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`; 

mongoose.connect(uri, 
    { useNewUrlParser: true, useUnifiedTopology: true}
)
    .then(() => console.log('Base de datos conectada'))
    .catch(e => console.log(e))

//CONFIGURAMOS VARIABLE DE ENTORNO Y PUERTO OPCIONAL PARA REALIZAR LA CONEXION CON EL HOSTING

const port = process.env.PORT || 3000;

//MOTOR DE PLANTILLAS
app.set('view engine', 'ejs');
//indicamos en donde se encuentran las plantillas
app.set('views', __dirname + '/views');

//middleware
// PERMITE QUE EXPRESS PUEDA DEFINIR UNA CARPETA CON PÁGINAS ESTÁTICAS COMO PÚBLICA
app.use(express.static(__dirname + "/public"));

//RUTAS WEB
app.use('/', require('./router/appWeb'));
app.use('/mascotas', require('./router/mascotas'));

// Página no encontrada
app.use((req, res, next) =>{
    res.status(404).render("404", {
        titulo: "404",
        descripcion: "Título del sitio web 404"
    });
})

app.listen(port, () => {
    console.log("Servidor a su servicio", port);
})