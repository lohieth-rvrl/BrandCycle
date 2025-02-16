const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../Models/users");

router.get("/users", async (req, res) => {
    try {
      const user = await User.find();
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ success: false, message: "Error fetching products" });
    }
  });

router.post("/signup", async (req, res) => {
    try {
      const { username, phone, email, password } = req.body;
  
      if (!username || !phone || !email || !password) {
        return res.status(400).json({ message: "All fields are required" });
      }
  
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: "Email already exists" });
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
  
      const newUser = new User({ username, phone, email, password: hashedPassword });
      await newUser.save();
  
      res.json({ message: "User registered successfully" });
    } catch (error) {
      console.error("Signup error:", error);
      res.status(500).json({ message: "Server error", error: error.message });
    }
  });

  router.post("/login", async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
  
      if (!user) return res.status(400).json({ message: "User not found" });
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });
  
      const token = jwt.sign({ id: user._id }, "secretkey", { expiresIn: "1h" });
      res.json({ token, message: "Login successful" });
  
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  });

   router.delete("/delete-user/:id", async (req, res) => {
      try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json({ success: true, message: "user deleted successfully" });
      } catch (error) {
        res.status(500).json({ success: false, message: "Error deleting product" });
      }
    });

  module.exports = router;