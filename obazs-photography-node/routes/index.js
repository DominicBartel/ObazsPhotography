var express = require('express');
var router = express.Router();

router.use(express.static(__dirname.replace('obazs-photography-node\/routes', "obazs-photography-react\/build")));

const fs = require("fs");



/* GET home page. */
router.get('/', function(req, res) {
  let build = __dirname.replace('obazs-photography-node\/routes', "obazs-photography-react\/build\/index.html");
  res.sendFile(build);
});
// '../../obazs-photography-react/build/static/index.html'
router.get('/imgData/:folder', (req, res) =>{
  
  let directory = "./public/images/" + req.params.folder;
  let dirBuff = Buffer.from(directory);

  let files = fs.readdirSync(directory);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.send(files);
});

module.exports = router;
