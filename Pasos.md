## 1. MODULE EXPORTS Y REQUIRE

const {frutas, dinero} = require('./frutas');

//Se instala pequeña librería

const cowsay = require("cowsay");
console.log(cowsay.say({
    text : "holaaa uwu",
    e : "oO",
    T : "U "
}));
// se iteran los elementos del array
frutas.forEach(item => {
    console.count(item);
});
console.log(dinero)

****************************************************

## 2. SERVER HTTP MANUAL

//SE LEVANTA EL SERVER
const http = require('http');
const server = http.createServer((req, res) =>{
    res.end("Estoy respondiendo a tu solicitud v2");
})

//SE DEFINE AL PUERTO
const puerto = 3000;

//RESPUESTA DEL SERVIDOR AL TENER RESPUESTA SATISFACTORIA
server.listen(puerto, () =>{
    console.log("escuchando solicitudes")
})

**********************************************

## 3. SERVER CON EXPRESS

Express es un framework que simplifica el uso de node

npm i express

const express = require('express');
const app = express();

const port = 3000;


*************************************************

## 4. NODEMON PARA ACTUALIZAR SERVER DE MANERA AUTOMATICA

Se instala con ayuda del npm
Graba todos los archivos seleccionados, en este caso un server http

npm i nodemon

*****************************************************

## 5. ESQUEMA BÁSICO DE UNA SOLICITUD HTTP

app.verboHTTP('/ruta', (req, res){
    res.acción
})

*****************************************************

## 6. EXPRESS

Es un framework que simplifica (entre otras cosas) el uso de Node.

OJITO:

npm i express

const express = require("express");
const app = express();

* app.use(express.static(__dirname + "/rutaCarpPublic"));
    Permite mostrar una carpeta con páginas estáticas en el servidor

* app.use((req, res) next){
   res.status(codStatus).sendfile(__dirname - "/ruta")
   }
   Dependiendo del estado de la repuesta podemos programar una respuesta u otra

CUANDO SE USA "USE" ES UN MIDDLEWARE

********************************************************

## 7. TEMPLATE ENGINES

* EJS: Combina JS con HTML para asi darle funcionalidades dinámias a nuestras páginas

npm i ejs

app.set('view engine', 'ejs');

********************************************************

## 8. CARPETAS IMPORTANTES

* PUBLIC: Almacena contenido visile para el cliente. EJ: CSS, HTML, imagenes, etc.
* VIEWS: Contiene EJS y similares que son renderizados por express para luego exportarlas a public.
  * Templates: Guarda plantillas (header, footer, etc).
* ROUTER: Contiene servicios modularizados que se conectan al app
* MODELS: Guarda los modelos o plantillas que se producen con Schema, estos modelos incluyen los objetos que
  posteriormente seran documentos dentro de las colecciones de las BD.


********************************************************

## 9. EMBEBER DE EJS A JS

res.send => SOLO PARA TEXTO
res.render("archivo",{elemento:"contenido"}); => EMBEBER A HTML

* EJS TAGS:
  * <%= %> => EXTERNOS
  * <%- %> => ARCHIVOS EJS

* INCLUDE ENTRE EJS
  * <%- include("/rutaArchivo", {elemento:"contenido"})%>

*********************************************************

## 10. EJECUTAR SCRIPT DE PACKAGE.JSON

npm run nombreScript

*********************************************************

## 11. ROUTER

Router es una funcionalidad de express que permite ordenar mediante modulos las rutas de los servicios 
que implementamos en el desarrollo.

const express = require('express');
const router = express.Router();

* Para exportar
    module.exports = nombredeCarpeta;

* Para importar
    app.use('/rutaaAsignar', require('./rutaDocumento'));

**********************************************************

## 12. MONGOOSE

Es una funcionalidad de express que provee a node de las herramientas necesarias para poder trabajar con
MongoDB de manera sencilla.

npm i mongoose

* Configurar MongoDB
* const mongoose = require('mongoose');
* CREDENCIALES DE MONGODB
    const user = '', password y dbname;

* INTERPOLACIÓN DE CREDENCIALES A LA URI
    const uri = `uri en comillas invertidas://${user}, etc `

* CONEXION Y VERIFICACION DE CONEXION SATISFACTORIA
   mongoose.connect(uri,
        {useNewUriParser: true, useUnifiedTopology: true}
   )
        .then(() => console.log('Base de datos conectada'))
        .catch(e => console.log(e));

***********************************************************

## 13. SCHEMA

Con el fin de automatizar la tarea de registrar documentos en las colecciones de una DB ´pdemos usar Scheme, 
una funcionalidad de Mongoose que nos permite crear plantillas de nuestros documentos.

const mongoose = require('mongoose);
const Schema = mongoose.Schema();

const nombreSchema = new Schema(){
    variable: valor,
    variable2: valor2,
}

* SE CREA EL MODELO
  
  const nombreDocumento = mongoose.model('nombreDocumento', nombreSchema);

module.exports = nombreDocumento;

***************************************************

## 14. VARIABLES DE ENTORNO (DOTENV)

Debemos ocultar ciertas variables que pueden contener información privada como credenciales o ontraseñas,
para ello utilizamos las variables de entorno en colaboración al .gitignore.

* Se instala el módulo dotenv => npm i dotenv

* Creamos un arhcivo .env donde guardaremos las VE con el siguiente formato:
    NOMBREVAR = valor,


*************************************************************

## 15. CRUD

Create, read, update y delete. Los 4 funtamentos de todo servicio dinámico.

### 15.1 CREAR DOCUMENTOS

Necesitaremos del módulo "body parser"

* npm i body-parser

* ADAPTAMOS LOS FORMULARIOS
  <form action="/habitualmenteSeUsaLaRamaPadre" method="verboHTTP">
  <input name="elemento del documento a representar, guiarse del Schema">

* PARA AGREGAR DOCUMENTOS:
  
  router.post('/', async(req, res) => {
      const body = req.body  //el request del contenido del body se hace variable

      try{
          await nombreSchema.create(body)  //se espera a que la platilla Schema cree un documento en base 
                                            al contenido del body :)
          res.redirect('/ruta destino')    // Respond personalizado
      }
  })

### 15.2 LEER UN ÚNICO DOCUMENTO


* Se configura una variable :id en la ruta para que asi esta pueda tomar su valor y buscar el documento de manera individual
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


### 15.3. ELIMINAR DOCUMENTOS

* CONTIENE LA RUTA E INSTRUCCIONES ESPECIFICAS PARA REALIZAR LA TAREA

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

* SE CAPTURA EL BTN ELIMINAR PARA PODER ENVIAR EL METODO DELETE POR MEDIO DEL FETCH
* SOLICITA LA ELIMINACION YVERIFICA EN LA MISMA VENTANA DEL CLIENTE LA CONSULTA AL MODULO PARA VER SI SE REALIZO LA TAREA, NO EJECUTA LA ORDEN DIRECTAMENTE
    const btnEliminar = document.querySelector('#btnEliminar');

    btnEliminar.addEventListener('click', async() =>{
        const id = btnEliminar.dataset.id;
        try {
            const data = await fetch(`/mascotas/${id}`, {
                method: 'delete'
            });
            const res = await data.json();
            
            if(res.estado){
                alert('Se eliminó con éxito');
                window.location.href = '/mascotas';
            }else{
                console.log(res);
            }
        } catch (error) {
            console.log(error);
        }
    })

    * OJITO
    <button 
            id="btnEliminar"
            data-id="<%= mascota.id %>"
            >
                Eliminar
    </button>


### 15.4. EDITAR DOCUMENTOS

* MODULO

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


    * SE CAPTURA EL FORMULARIO PARA PODER EDITAR UN DOCUMENTO USANDO FETCH CON EL METODO PUT

    const formularioEditar = document.querySelector('#formularioEditar');

    formularioEditar.addEventListener('submit', async(e) =>{
        e.preventDefault();

        //las 2 maneras de capturar el valor de un elemento
        const nombre = formularioEditar.elements['nombre'].value;
        const descripcion = document.querySelector('#descripcionInput').value;
        const id = formularioEditar.dataset.id;

        try {
            const data = await fetch(`/mascotas/${id}`, {
                method: 'put',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({nombre, descripcion})
            })
            const res = await data.json();
            if(res.estado){
                alert('editado con éxito');
                window.location.href = '/mascotas';
            }else{
                console.log(res);
            }
        } catch (error) {
            console.log(error);
        }
    })

* OJITO
  <form id="formularioEditar" data-id="<%= mascota.id %>">