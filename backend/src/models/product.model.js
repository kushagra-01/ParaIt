const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    image: { type: String },
    name: { type: String,required:true },
    brand: { type: String },
    category: { type: String },
    type: { type: String },
    price: { type: Number },
    description: { type: String },
    rating: { type: Number },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const product = mongoose.model("product", productSchema);

module.exports = product;
