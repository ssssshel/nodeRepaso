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


