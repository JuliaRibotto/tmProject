//TRONCO
const express = require('express');
const app = express();
const routes = require("./routes/tiendaRoutes");
const path = require("path");
const databaseConnection = require("../config/database");
//usa el puerto del hosting o el puerto 4000
const port = process.env.PORT || 4000;

//Coneccion mysql
databaseConnection.connect();

//Vamos a recibir info en formato json
app.use(express.json());
// Vamos a recibir info en forma de arrays 
app.use(express.urlencoded ({extended:false}));

app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
app.set("view engine","ejs");

// Rutas
app.use("",routes);




//SIEMPRE AL FINAL -----------------------------------------------------------
app.listen(port,() => {
    console.log( `Server corriendo en puerto ${port} ........................ `);
});