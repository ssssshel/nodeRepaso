const express = require('express');
const app = express();

const port = 3000;

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