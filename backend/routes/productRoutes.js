// backend/routes/productRoutes.js
import express from "express";
import {
  getProducts,
  postProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";
import { upload } from "../middlewares/upload.js";
import { adminAuth } from "../middlewares/adminAuth.js";

const router = express.Router();

router.get("/product", getProducts); // Public GET

// Admin only
router.post("/product", adminAuth, upload.single("image"), postProduct);
router.put("/product/:id", adminAuth, upload.single("image"), updateProduct);
router.delete("/product/:id", adminAuth, deleteProduct);

export default router;