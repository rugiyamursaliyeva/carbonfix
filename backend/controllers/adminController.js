import Admin from "../models/adminModel.js";
import ProductModel from "../models/productModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import fs from "fs";
import path from "path";

const SECRET_KEY = process.env.JWT_SECRET || "supersecretkey123";

// Admin Login
export const adminLogin = async (req, res) => {
  try {
    const { username, password } = req.body;
    const admin = await Admin.findOne({ username });
    if (!admin) return res.status(401).json({ message: "İstifadəçi tapılmadı" });

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) return res.status(401).json({ message: "Şifrə yanlışdır" });

    const token = jwt.sign({ id: admin._id }, SECRET_KEY, { expiresIn: "24h" });
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get all products
export const getProducts = async (req, res) => {
  try {
    const products = await ProductModel.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Create product
export const postProduct = async (req, res) => {
  try {
    const { title, description } = req.body;
    if (!req.file) return res.status(400).json({ message: "Şəkil yüklənməlidir" });

    // Full URL construction (ready format)
    const imageUrl = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;

    const product = await ProductModel.create({
      title,
      description,
      image: imageUrl,
    });
    res.status(201).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Update product
export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    const updateData = { title, description };

    if (req.file) {
      const imageUrl = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;
      updateData.image = imageUrl;

      // Delete old file
      const product = await ProductModel.findById(id);
      if (product && product.image && product.image.includes("/uploads/")) {
        const filename = product.image.split("/").pop();
        const oldPath = path.join(process.cwd(), "uploads", filename);
        if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath);
      }
    }

    const updatedProduct = await ProductModel.findByIdAndUpdate(id, updateData, { new: true });
    if (!updatedProduct) return res.status(404).json({ message: "Product not found" });

    res.json(updatedProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Delete product
export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await ProductModel.findById(id);
    if (!product) return res.status(404).json({ message: "Product not found" });

    if (product.image && product.image.includes("/uploads/")) {
      const filename = product.image.split("/").pop();
      const oldPath = path.join(process.cwd(), "uploads", filename);
      if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath);
    }

    await ProductModel.findByIdAndDelete(id);
    res.json({ message: `Product ${id} deleted` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};