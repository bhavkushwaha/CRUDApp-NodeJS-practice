const express = require("express");
const { default: mongoose } = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello from Node API Server");
});

// <------------------ INITIALLY HARD CODED IN index.js STARTS ------------------>

// Read/Fetch All Products from the Database
// app.get("/api/products", async (req, res) => {
//   try {
//     const products = await Product.find();
//     res.status(200).json(products);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// Read/Fetch a Single Product from the Database
// app.get("/api/products/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findById(id);
//     res.status(200).json(product);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// Update a Product in the Database
// app.put("/api/products/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findByIdAndUpdate(id, req.body);

//     if(!product) {
//       res.status(404).json({ message: "Product not found!" });
//     }

//     const updatedProduct = await Product.findById(id);
//     res.status(200).json(updatedProduct);

//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// })

// Delete a Product from the Database
// app.delete("/api/products/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findByIdAndDelete(id);

//     if(!product) {
//       res.status(404).json({ message: "Product not found!" });
//     }

//     res.status(200).json({ message: "Product deleted successfully!"});

//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// })

// // Create a Product in the Database
// app.post("/api/products", async (req, res) => {
//   // To Check is the POST API is working properly we use below 2 lines
//   // console.log(req.body);
//   // res.send(req.body);

//   try {
//     const product = await Product.create(req.body);
//     res.status(200).json(product);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// <------------------ INITIALLY HARD CODED IN index.js ENDS ------------------>

// Connect to the Database
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
