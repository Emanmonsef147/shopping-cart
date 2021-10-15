var express = require('express');
var router = express.Router();
const {check,validationResult}=require('express-validator');
const User=require('../models/user');


/* GET users listing. */
router.get('/Signup', function(req, res, next) {
  var massagesError=req.flash('errorSignup');
  res.render('user/Signup',{masseges:massagesError})
});

router.post('/Signup' ,[
  check('email').not().isEmpty().withMessage('please enter your Email'),
  check('email').isEmail().withMessage('please enter valid Email'),
  check('password').not().isEmpty().withMessage('please enter your Password'),
  check('password').isLength({min:5}).withMessage('please enter more than 5 characters'),
  check('confirm-password').custom((value ,{req})=>{
    if(value !== req.body.password){
      throw new Error('password and confirm-password not matching')
    }
      return true;
  })
] ,(req, res, next)=>{
  const errors=validationResult(req);
  if(! errors.isEmpty()){
    var valditionMassages=[];
    for(var i=0;i<errors.errors.length;i++){
      valditionMassages.push(errors.errors[i].msg);

    }
   req.flash('errorSignup',valditionMassages);
   res.redirect('signup');
    return;
  }
  const user=new User({
    email:req.body.email,
    password:new User().hashPassword(req.body.password)
  })
   

  User.findOne({email:req.body.email},(err,result)=>{
    if(err){
      console.log(err);
    }
    if(result){
      console.log('this email already exist')
      req.flash('errorSignup','this email already exist');
      res.redirect('signup')
      return;
    }
    user.save((error,doc)=>{
      if(error){
        console.log(error)
      }
      res.send(doc)
    })
  })
})


module.exports = router;
