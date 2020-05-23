var express = require('express');
var router = express.Router();

const textToImage = require('text-to-image');


/* GET home page. */
router.get('/', function(req, res, next) {
 
  textToImage.generate('Lorem ipsum dolor sit amet').then(function (dataUri) {
    res.render('index',
    { 
      title: 'Express',
      link: dataUri
    });

  });


});

router.post('/', (req, res, next)=>{
  console.log(req.body.name);

  textToImage.generate(req.body.name + '\n' + req.body.content, {
    debug: true,
    maxWidth: 1000,
    fontSize: 30,
    fontFamily: 'Arial',
    lineHeight: 30,
    margin: 200,
    // textAlign: "center",
    float: 'right',
    bgColor: "orange",
    textColor: "#222"
  }).then(function (dataUri) {
    res.redirect(dataUri);
  })

})

module.exports = router;
