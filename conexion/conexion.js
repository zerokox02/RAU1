var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'personajesH'
});

connection.connect(
    (err)=>{
        if(!err){
            console.log('Conexion Establecida');
        }
        else{
            console.log('Conexion fallida');
        }
    }
);

module.exports=connection;