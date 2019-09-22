var express = require('express');
var router = express.Router();
const mysql = require('mysql2');

console.log('Inside recordData');

const connection = mysql.createConnection({
    host: 'series.cfe2ta0a8zok.eu-north-1.rds.amazonaws.com',
    user: 'series',
    password: 'etcaSceEyEa375R88d',
    database: 'Series'
  });

router.get('/', function(req, res) {
    console.log('Inside router recordData');
    var nombre = req.query.nombre;
    var id = req.query.id;
    var madrid = req.query.madrid;
    var dallas = req.query.dallas;
    console.log('Req URL: '+req.url);
    console.log('Req params: '+JSON.stringify(req.query));
    console.log('Req params nombre: '+req.query.nombre);
    //connection.query('SELECT * FROM coordinacion', (err,rows) => {
    var myquery = 'INSERT INTO coordinacion (nombre, idSerie, madrid, dallas) VALUES ("'+nombre+'", '+id+', '+madrid+', '+dallas+')';
    console.log(myquery);
    connection.query(myquery, (err,rows) => {
            /*
        INSERT INTO coordinacion (nombre, idSerie) VALUES (nombre, id);
        */
        if(err) throw err;
        //console.log(rows);
        //console.log(rows[0].idSerie);
        res.json(rows);
    });  
});

module.exports = router;
