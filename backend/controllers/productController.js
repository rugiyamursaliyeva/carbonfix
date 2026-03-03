// backend/controllers/productController.js
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
    const imagePath = "/carbon/" + req.file.filename;

    const product = await ProductModel.create({
      title,
      description,
      image: imagePath,
    });

    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    const updateData = { title, description };

    if (req.file) {
      const product = await ProductModel.findById(id);
      if (product && product.image) {
        const oldFilePath = path.join("carbon", product.image.replace("/carbon/", ""));
        fs.unlink(oldFilePath, (err) => {
          if (err) console.error("Error deleting old image:", err);
        });
      }
      updateData.image = "/carbon/" + req.file.filename;
    }

    const updatedProduct = await ProductModel.findByIdAndUpdate(id, updateData, { new: true });
    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(updatedProduct);
  } catch (error) {
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

    const filePath = path.join("carbon", product.image.replace("/carbon/", ""));
    fs.unlink(filePath, (err) => {
      if (err) console.error("Error deleting image:", err);
    });

    await ProductModel.findByIdAndDelete(id);
    res.json({ message: `Product ${id} deleted` });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};