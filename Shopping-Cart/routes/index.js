var express = require('express');
var router = express.Router();
const Product=require('../models/product')


/* GET home page. */
router.get('/', function(req, res, next) {
  Product.find({}, (error, doc) => {
    if (error) {
      console.log(error)
    }
    var productGrid = [];
    var colGrid = 3;

    for (var i = 0; i < doc.length; i += colGrid) {
      productGrid.push(doc.slice(i, i + colGrid))
    }
    console.log(productGrid)
    res.render('index', { title: 'Shopping-project' , products :productGrid});
  })

  })


module.exports = router;
