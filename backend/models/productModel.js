import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    title: { type: String },
    description: { type: String },
    image: { type: String, required: true },
  },
  { timestamps: true }
);

const ProductModel = mongoose.model("Product", productSchema);

export default ProductModel;