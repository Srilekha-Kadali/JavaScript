var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let data = [{
    name:"srilekha",
    age:22,
    salary:10000},
    {
      name:"roshini",
      age:23,
      salary:20000}
  ]
  res.render('index', { title: 'Express', 
  myName:"Srilekha", 
  users: data });
});

module.exports = router;
