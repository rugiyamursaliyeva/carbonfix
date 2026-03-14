import ProductModel from "../models/productModel.js";
import fs from "fs";
import path from "path";

export const getProducts = async (req, res) => {
  try {
    const products = await ProductModel.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const postProduct = async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: "Şəkil yüklənməlidir" });
    }

    const imageUrl = `/uploads/${req.file.filename}`;

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

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    const updateData = { title, description };

    if (req.file) {
      updateData.image = `/uploads/${req.file.filename}`;
      // Optional: Delete old image
      const product = await ProductModel.findById(id);
      if (product && product.image && product.image.startsWith("/uploads/")) {
        const oldPath = path.join(process.cwd(), product.image);
        if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath);
      }
    }

    const updatedProduct = await ProductModel.findByIdAndUpdate(id, updateData, { new: true });
    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(updatedProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await ProductModel.findById(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Delete file from uploads
    if (product.image && product.image.startsWith("/uploads/")) {
      const oldPath = path.join(process.cwd(), product.image);
      if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath);
    }

    await ProductModel.findByIdAndDelete(id);
    res.json({ message: `Product ${id} deleted` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};