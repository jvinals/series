var express = require('express');
var router = express.Router();
const mysql = require('mysql2');

console.log('Inside testAPI');

const connection = mysql.createConnection({
    host: 'testsdatabase.cbcwzu6t23dh.eu-north-1.rds.amazonaws.com',
    user: 'series',
    password: 'etcaSceEyEa375R88d',
    database: 'Series'
  });

router.get('/', function(req, res, next) {
    connection.query('SELECT * FROM coordinacion', (err,rows) => {
        if(err) throw err;
        console.log(rows);
        console.log(rows[0].idSerie);
        res.json(rows);
    });  
});

module.exports = router;

/*
[ TextRow {
    id: 1,
    idSerie: 46952,
    nombre: 'The Blacklist',
    season: 6,
    madrid: 14,
    dallas: 14 },
  TextRow {
    id: 2,
    idSerie: 71738,
    nombre: 'The Orville',
    season: 4,
    madrid: 0,
    dallas: 0 },
  TextRow {
    id: 3,
    idSerie: 82094,
    nombre: 'Whiskey Cavalier',
    season: 1,
    madrid: 0,
    dallas: 4 } ]
*/