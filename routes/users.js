var express = require('express');
var router = express.Router();

//var pg = require('pg');
//
//var connectionString = "host=cus-pgsql-prd.postgres.database.azure.com port=5432 dbname=demo user=kmicro@cus-pgsql-prd password=mdef@tpY1824;";
//
//var pgClient = new pg.Client(connectionString);
//
//pgClient.connect();
//
//var query = pgClient.query("SELECT id from customers where name = 'hamed'");
//
//query.on("row", function(row,result){
//
//result.addRow(row);
//
//});


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
