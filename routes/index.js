var db = require("../conexion/conexion");
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Honkai' });
});

/* GET home page. */
router.get('/cambiar/:ID', function (req, res, next) {
  const ID = req.params.ID;
  db.query("SELECT * FROM personas WHERE ID = ?", [ID], (error, resultado) => {
    console.log(resultado);
    res.render('cambiar', { title: 'Editar', VARIABLE: resultado[0] });
  })

});

/* GET agregar page. */
router.get('/agregar', function (req, res, next) {
  res.render('agregar', { title: 'Agregar' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Honkai' });
});

router.get('/creacion', function (req, res, next) {
  db.query("SELECT * FROM personas", function (err, resultado) {
    console.log(resultado);
    res.render('creacion', { title: 'Honkai', VARIABLE: resultado });
});

  //MEtodo
  var crud = require('../metodos/CRUD');
  router.post('/save', crud.save);
  router.post('/edit', crud.editar);

  router.get('/eliminar/:ID', (req, res) => {
    const ID = req.params.ID;
    db.query('DELETE FROM personas WHERE ID = ?', [ID],
      function (error, resultado) {
        if (error) {
          console.log(error);
        }
        else {
          res.redirect('/creacion');
        }
      });
  });
});
router.post('/auth', function (req, res, next) {
  const Remail = req.body.email;  
  const Rpass =  req.body.contraseña;
  console.log(Remail+"-"+Rpass);
  if(Remail && Rpass){
    db.query('SELECT * FROM Usuarios WHERE correo = ?',[Remail],
    function(error,resultado){
        if(error)
        {
          console.log(error);
        }
        else
        {
          if(Rpass == resultado[0].contra)
          {
            console.log("SI");
          }
          else
          {
            res.redirect('creacion')
          }
        }
    });
}
else
{
    console.log("Llena los campos faltantes!!");
    res.redirect('login')
}
});
module.exports = router;
