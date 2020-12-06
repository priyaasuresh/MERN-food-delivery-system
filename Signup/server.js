const express = require('express');
const cors =require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const hostname = 'localhost';
const port = 3002;
const app=express();

app.use(cors());

mongoose.connect('mongodb://localhost/signup', {useNewUrlParser: true});

app.use(bodyParser.urlencoded({extended:true}))

app.use(bodyParser.json())

app.post('/signup',function(req,res){

    var name     =req.body.name;
    var email    =req.body.email;
    var password =req.body.password;

    var SignUpSchema = mongoose.Schema({
        name: String,
        email: String,
        password: String
      });
   
      // compile schema to model
      var User = mongoose.model('User', SignUpSchema, 'users');
   
      // a document instance
      var User1 = new User({name:name, email:email, password:password  });
   
      // save model to database
      User1.save(function (err, data) {
        if (err) {
            res.send({status:0,result:err})
        }else{
            res.send({status:1,result:data})
        }
      });
  });

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});