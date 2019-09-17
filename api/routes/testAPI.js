var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    //res.send({ "name":"John", "age":30, "car":null });
    console.log({ 'results':'Cosa', 'name':'John', 'age':30, 'car':null });
    res.json({ 'results':'Cosa', 'name':'John', 'age':30, 'car':null });
});

module.exports = router;