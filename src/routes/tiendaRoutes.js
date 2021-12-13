const { render } = require("ejs");
const express = require("express");

//Routeo
const routes = express.Router();

//Destructure para traerme varias funciones y guardarlas en distintas constantes
const {renderHome,renderProductos,getForm,addNewProduct} = require("../controllers/tiendaControllers");

routes.get("/", renderHome);

//productos.ejs
routes.get("/productos", renderProductos);

routes.get("/nuevoProducto",getForm);

routes.post("/nuevoProducto",addNewProduct);

module.exports = routes;