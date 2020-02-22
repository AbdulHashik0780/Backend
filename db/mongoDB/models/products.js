const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductSchema = new Schema(
  {
    name: String ,
    price: String ,
    imageUrl: String,
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('Product', ProductSchema);
