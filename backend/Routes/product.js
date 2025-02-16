const express = require("express");
const router = express.Router();
const multer = require("multer");
const Product = require("../Models/Product");

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post("/add-product", upload.single("image"), async (req, res) => {
  try {
    const { name, description, price, stock, category } = req.body;
    if (!req.file) return res.status(400).json({ error: "Image is required" });

    const imageBase64 = req.file.buffer.toString("base64");

    const newProduct = new Product({
      name,
      description,
      price,
      stock,
      category,
      image: imageBase64,
    });

    await newProduct.save();
    res.json({ message: "Product added successfully" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

router.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// Fetch All Products
router.get("/products", async (req, res) => {
    try {
      const products = await Product.find();
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ success: false, message: "Error fetching products" });
    }
  });
  
  // Update Product
  router.put("/update-product/:id", upload.single("image"), async (req, res) => {
    try {
      const { id } = req.params;
      const { name, description, price, stock, category } = req.body;
  
      // Find the product by ID
      let product = await Product.findById(id);
      if (!product) return res.status(404).json({ message: "Product not found" });
  
      // Update product fields if provided
      if (name) product.name = name;
      if (description) product.description = description;
      if (price) product.price = price;
      if (stock) product.stock = stock;
      if (category) product.category = category;
  
      // Handle image upload (convert to Base64)
      if (req.file) {
        product.image = req.file.buffer.toString("base64");
      }
  
      // Save updated product
      await product.save();
      res.status(200).json({ message: "Product updated successfully", product });
    } catch (error) {
      res.status(500).json({ message: "Error updating product", error });
    }
  });
  
  // Delete Product
  router.delete("/delete-product/:id", async (req, res) => {
    try {
      await Product.findByIdAndDelete(req.params.id);
      res.status(200).json({ success: true, message: "Product deleted successfully" });
    } catch (error) {
      res.status(500).json({ success: false, message: "Error deleting product" });
    }
  });

  router.get("/products/:category", async (req, res) => {
    try {
      const products = await Product.find({ category: req.params.category });
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: "Server error" });
    }
  });
  
  module.exports = router;
  

module.exports = router;
