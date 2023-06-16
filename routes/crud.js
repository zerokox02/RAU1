var db = require("../conexion/conexion");
var express = require('express');
var router = express.Router();


/* router.get("/", function(req, res, next){
    res.render("crud")
})
 */

router.get('/', function (req, res, next) {
    let Remail = req.query.email;  
    let Rpass =  req.query.password;
    console.log(Remail+"-"+Rpass);
    if(Remail && Rpass){
        db.query('SELECT * FROM Usuarios WHERE Correo = ?',[Remail],
        function(error,resultado){
            console.log(resultado[0].contra);
            console.log(Rpass);
            if(Rpass == resultado[0].contra)
            {
                
                console.log("Inicio de Sesión Correcto!");
                res.redirect('/login')
            }
            else
            {
                console.log("Usuario Y/O contraseña INCORRECTOS!");
                res.redirect('/creacion')
            } 
        });
    }
    else
    {
        console.log("Llena los campos faltantes!!");
        res.redirect('/login')
    }
});
module.exports = router;