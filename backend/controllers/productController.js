import ProductModel from "../models/productModule.js";
import fs from "fs";
import path from "path";

const getProduct = async (req, res) => {
  const products = await ProductModel.find();
  res.json(products);
};

const postProducts = async (req, res) => {
  const imagePath = "/carbon/" + req.file.filename;   

  const product = await ProductModel.create({
    image: imagePath,
  });

  res.json(product);
};

const deleteProducts = async (req, res) => {
  const { id } = req.params;

  const product = await ProductModel.findById(id);

  const filePath = path.join(
    "carbon",
    product.image.replace("/carbon/", "")
  );

  fs.unlink(filePath, () => {});

  await ProductModel.findByIdAndDelete(id);

  res.json(`${id} -li product silindi`);
};

export { getProduct, postProducts, deleteProducts };
