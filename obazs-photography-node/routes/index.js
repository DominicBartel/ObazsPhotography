var express = require('express');
var router = express.Router();
var sizeOf = require('image-size');
//windows filestructure
router.use(express.static(__dirname.replace('obazs-photography-node\\routes', "obazs-photography-react\\build")));
//linux
// router.use(express.static(__dirname.replace('obazs-photography-node\/routes', "obazs-photography-react\/build")));

const fs = require("fs");



/* GET home page. */
router.get('/', function(req, res) {
  //windows filestructure
  let build = __dirname.replace('obazs-photography-node\\routes', "obazs-photography-react/\\uild\\index.html");
  //linux
  // let build = __dirname.replace('obazs-photography-node\/routes', "obazs-photography-react\/build\/index.html"); 
  res.sendFile(build);
});


// '../../obazs-photography-react/build/static/index.html'
router.get('/imgData/:folder', (req, res) =>{
  
  let directory = "./public/images/" + req.params.folder;
  let dirBuff = Buffer.from(directory);

  let fileName = fs.readdirSync(directory);
  let files = []
  
  for(var i = 0; i < fileName.length; i++){

    let fileLocation = (directory + "/" + fileName[i]).toLowerCase();
    var size = sizeOf(fileLocation);
    let x = size.width;
    let y = size.height;
    

    files.push({
      fileName: fileName[i],
      fileX: x, 
      fileY: y, 
      testData: fileLocation
    })
  }
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.send(files);
});

module.exports = router;
