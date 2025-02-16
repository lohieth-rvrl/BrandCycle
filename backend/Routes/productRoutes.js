const express = require("express");
const router = express.Router();
const Product = require("../Models/Product");

router.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    
    // Ensure the correct image path
    const updatedProducts = products.map(product => ({
      ...product._doc,
      image: product.image ? `http://localhost:5000/uploads/${product.image}` : null,
    }));

    res.json(updatedProducts);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

module.exports = router;
