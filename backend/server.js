const express = require("express");
const app = express();
const cors= require('cors');
const dotenv = require("dotenv");
dotenv.config();

const bodyParser = require("body-parser");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
  })
  .then(console.log("Connected to database of Railway  "))
  .catch((err) => console.log(err));

const PORT = 5000;
app.use("/auth", authRoute);
app.use("/product", productRoute);

app.listen(PORT, () => {
  console.log("Server is running on Port No " + PORT);
});
