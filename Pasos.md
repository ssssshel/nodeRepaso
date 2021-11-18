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

