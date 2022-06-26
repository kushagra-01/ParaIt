const express = require("express");

const router = express.Router();

const product_model = require("../models/product.model");
const cart_model = require("../models/cart");



router.post("", async (req, res) => {
  try {
    const product_ = await product_model.create(req.body);
    return res.send(product_);
  } catch (err) {
    return res.send(err.message);
  }
});

//api to get all product_
router.get("", async (req, res) => {
  try {
    const product_ = await product_model.find().lean().exec();

    return res.send(product_);
  } catch (err) {
    return res.send(err.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const product_ = await product_model.findById(req.params.id);

    return res.send(product_);
  } catch (err) {
    return res.send(err.message);
  }
});

router.post("/cart", async (req, res) => {
  try {
    const product_ = await cart_model.create(req.body);
    return res.send(product_);
  } catch (err) {
    return res.send(err.message);
  }
});

//api to get all product_
router.get("/cart", async (req, res) => {
  try {
    const product_ = await cart_model.find().lean().exec();

    return res.send(product_);
  } catch (err) {
    return res.send(err.message);
  }
});


module.exports = router;
