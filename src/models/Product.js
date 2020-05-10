const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  quantity: {
    type: Number
  }
})

mondule.exports = mongoose.model('product', ProductSchema)