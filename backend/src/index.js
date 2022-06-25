require("dotenv").config();
const express = require("express");
const connect = require("./config/db");
const { login, register } = require("./controllers/auth.controller");

const food = require("./controllers/Product.controller");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());


app.use("", food);
app.post("/login", login);
app.post("/register", register);

//connecting ans starting server
const PORT = 5000;

app.listen(PORT, async () => {
  try {
    await connect();
    console.log("listening on port 5000.....");
  } catch (err) {
    console.log(err);
  }
});
