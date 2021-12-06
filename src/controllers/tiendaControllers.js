const databaseConnection = require("../../config/database");

//pido a la DB información
const renderHome = (req,res) => {
    databaseConnection.query('SELECT * FROM categorias',(error,data)=>{
        if (error) {
            console.log(error);
        } else {
          res.render("pages/index",{
              data
          });
        };
    });
};

const renderProductos = (req,res)=>{
    databaseConnection.query("SELECT * FROM productos",(error,data) => {
        if (error) {
            console.log(error)
        } else {
            res.render("pages/productos",{data});
        }
    });
};

const addNewProduct =(req,res)=>{
    const {producto,categoria,descripcion,precio}= req.body;
  
         databaseConnection.query('INSERT INTO productos(producto,categoria,imagen,descripcion,precio)VALUES(?,?,"/imagenes/estilo-madera.png",?,?)',[producto,categoria,descripcion,
        // str a int
        parseInt(precio)],(error,data)=>{
            if(error){
                console.log(error)
            }else{
                res.redirect('/productos')
            }
    });
};

const getForm = (req,res) => {
    res.render('pages/formularios')
};



module.exports = {
    renderHome,
    renderProductos,
    getForm,
    addNewProduct
};