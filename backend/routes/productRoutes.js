import express from "express";
import { deleteProducts, getProduct, postProducts } from "../controllers/productController.js";
import { upload } from "../middlewares/upload.js";

const router = express.Router();

router.get("/product", getProduct);
router.post("/product", upload.single("image"), postProducts);
router.delete("/product/:id", deleteProducts);

export default router;
