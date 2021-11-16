1. MODULE EXPORTS Y REQUIRE

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

2. SERVER HTTP MANUAL

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

3. 