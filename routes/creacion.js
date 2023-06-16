var db = require("../conexion/conexion");
var express = require('express');
var router = express.Router();



router.get('/', function (req, res, next) {
    db.query("SELECT * FROM personas", function (err, resultado) {
        console.log(resultado);
        res.render('creacion', { title: 'Honkai', VARIABLE: resultado });
    });

    //MEtodo
    var crud = require('../metodos/CRUD');
    router.post('/save', crud.save);
    router.post('/edit', crud.editar);
    router.post('/login', crud.login);

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
module.exports = router;