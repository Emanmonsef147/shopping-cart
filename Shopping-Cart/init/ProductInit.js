const product = require('../models/product')
 const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/node-project' ,{ useNewUrlParser: true },(err)=>{
  if (err) {
    console.log(err)
  } else {
    console.log("connect to DB.........")
  }
})


const products = [ new product({
        imgpath: '/images/Apple iPhone X with FaceTime - 64GB, 4G LTE, Space Grey.jpg',

        productName: 'Apple iPhone X' ,
        Information: {
            Size: 6.7 ,
            Color:  'Grey' ,
            RAM: 64,
            numberofSIM: 'Dual SIM' ,
        },
        Price:220 ,
        
    }) ,
    new product({
        imgpath:'/images/HTC Desire 10 Pro Dual Sim - 64GB, 4GB RAM, 4G LTE, Polar White.jpg',
        productName:'HTC Desire',
        Information:{
            Size: 6.5 ,
            Color:  'Polar White' ,
            RAM: 64 ,
            numberofSIM: 'Dual SIM' ,
        },
        Price:200 ,
        
    }),
    new product({
        imgpath:'/images/Huawei Y9 2019 Dual SIM - 64GB, 4GB RAM, 4G LTE, Arabic Blue.jpg',
        productName:'Huawei Y9',
        Information:{
            Size: 5.5 ,
            Color:  'Blue' ,
            RAM: 64,
            numberofSIM: 'Dual SIM' ,
        },
        Price:250 ,
        
    }),
    new product({
        imgpath:'/images/Oppo A3S Dual SIM - 16GB, 2GB RAM, 4G LTE, Purple.jpg',
        productName:'Oppo A3S ',
        Information:{
            Size: 6.43 ,
            Color:  'Purple' ,
            RAM: 64 ,
            numberofSIM: 'Dual SIM' ,
        },
        Price:180 ,
        
    }),
    new product({
        imgpath:'/images/Samsung Galaxy Note 9 Dual SIM - 128GB, 6GB RAM, 4G LTE, Midnight Black.jpg',
        productName:'Samsung Galaxy Note 9',
        Information:{
            Size: 6.4 ,
            Color:  ' Black' ,
            RAM: 64 ,
            numberofSIM: 'Dual SIM' ,
            
        },
        Price:150 ,
        
    }),
    new product({
        imgpath:'/images/Sony Xperia XZ1 Dual Sim - 64 GB, 4GB RAM, 4G LTE, Moonlight Blue.jpg',
        productName:'Sony Xperia',
        Information:{
            Size: 6.6 ,
            Color:  ' Moonlight Blue' ,
            RAM: 64,
            numberofSIM: 'Dual SIM' ,
        },
        Price:170 ,
        
    })

]
 var done = 0;

for( var i = 0 ; i<products.length ; i++){
    products[i].save((error ,doc)=>{
        if(error){
            console.log(error);
        }
        console.log(doc)
        done ++
        if(done === products.length){
            mongoose.disconnect();
        }
    })
}