const express = require("express");
const { default: mongoose } = require("mongoose");
const Product = require("./models/product.model.js");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from Node API Server");
});

app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/api/products", async (req,res) => {
  // To Check is the POST API is working properly we use below 2 lines
  // console.log(req.body);
  // res.send(req.body);

  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
});

mongoose
  .connect(
    "mongodb+srv://12111002cse:uNBbYjPEMULlN27B@cluster0.a0haim4.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Database connected");

    app.listen(3000, () => {
      console.log("Server running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection Failed!");
  });
