var db = require("../conexion/conexion");

exports.save = (req, res)=> {    
const Foto = req.body.Foto;
const descripcion = req.body.descripcion;

db.query('INSERT INTO personas (Foto, descripcion) VALUES(?,?)',
[Foto, descripcion],
(error, resultado)=>{
    if(error){
        console.log(error);
    }
    else{
        res.redirect('creacion')
    }
});
}
exports.editar = (req, res)=> { 
    const rID = req.body.ID;    
    const rFoto = req.body.Foto;
    const rdescripcion = req.body.descripcion;
    db.query('UPDATE personas SET ? WHERE ID=?',
    [{Foto:rFoto,descripcion:rdescripcion},rID],
    (error, resultado)=>{
        if(error){
            console.log(error);
        }
        else{
            res.redirect('creacion')
        }
    });
}

/*exports.auth = (req, res)=>{
    const REmail = req.body.email;
    const RContra = req.body.password;
    console.log(REmail+"-"+RContra);
    if(Remail && Rpass){
        db.query('SELECT * FROM Usuarios WHERE Correo = ?',[Remail],
        function(error,resultado){
            if(resultado.length == 0 || (Rpass != resultado[0].contra))
            {
                
                console.log("Inicio de Sesión Correcto!");
                //res.redirect('/creacion')
            }
            else
            {
                console.log("Usuario Y/O contraseña INCORRECTOS!");
                //res.redirect('/creacion')
            }
        });
    }
    else
    {
        console.log("Llena los campos faltantes!!");
        //res.redirect('/creacion')
    }
}*/