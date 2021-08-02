const mongoose = require("mongoose");


const customerSchema = new mongoose.Schema ({


  username: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  address: {
    type: Number,
    required: true

  },
  birthdate: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true
  }
})



const Customer = mongoose.model('Customer', customerSchema );



module.exports = Customer;
