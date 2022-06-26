const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    name: { type:String,required:true },
    image: { type: String },
    price: { type: Number },
    size: { type: Number },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const cart = mongoose.model("cart", cartSchema);

module.exports = cart;
