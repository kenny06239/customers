const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const ejs = require("ejs");
require('dotenv').config({ path: './.env' })
const Customer = require('./models/Customer')
const app = express();


mongoose.connect(process.env.MONGO_URI,{ useNewUrlParser: true, useUnifiedTopology: true })
  .then(function(){
    console.log('mongodb connected')
  })
  .catch(function(err){
    console.error(err);
  })
// const db = mongoose.connection
app.set('view engine', 'ejs')

app.get('/', function(req, res){
 res.render('list');
});

app.get('/customers',function(req, res){
  Customer.find({}, function(err, data){
    if(err) {
      console.error(err);
    }
    console.log('Data from MongoDB: ', data);
    res.send(data);
  });
  // res.render('customers', {Customer : Customer })
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server started at PORT ${PORT}`))
