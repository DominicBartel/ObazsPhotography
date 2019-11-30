var express = require('express');
var router = express.Router();

const fs = require("fs");



/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/imgData/:folder', (req, res) =>{
  
  let directory = "./public/images/" + req.params.folder;
  let dirBuff = Buffer.from(directory);

  let files = fs.readdirSync(directory);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.send(files);
});

module.exports = router;
