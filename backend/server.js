// backend/server.js
import express from "express";
import cors from "cors";
import { connectDB } from "./configs/config.js";
import ProductRouter from "./routes/productRoutes.js";
import AdminRouter from "./routes/adminRoutes.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/carbon", express.static(path.join(__dirname, "carbon")));

app.use("/", ProductRouter);
app.use("/api", AdminRouter);

connectDB();

app.listen(5000, () => {
  console.log("Backend running on port 5000");
});