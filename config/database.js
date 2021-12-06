const mysql = require("mysql2");

//conecto con base de datos externa
const databaseConnection = mysql.createConnection({
    host:"beexdzt16mv7n5bk42ei-mysql.services.clever-cloud.com",
    user:"ucvlzebdvgqx35wu",
    database:"beexdzt16mv7n5bk42ei",
    password: "rSOg8Ji4O3ln49y91c61",
    port: 3306
});

databaseConnection.connect((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Connected to MySQL");
    };
});

module.exports = databaseConnection;