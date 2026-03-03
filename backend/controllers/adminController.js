// backend/controllers/adminController.js
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import Admin from "../models/adminModel.js";

const SECRET_KEY = process.env.JWT_SECRET || "supersecretkey123";

export const adminLogin = async (req, res) => {
  const { username, password } = req.body;

  try {
    const admin = await Admin.findOne({ username });
    if (!admin || !(await bcrypt.compare(password, admin.password))) {
      return res.status(401).json({
        success: false,
        message: "Incorrect username or password.",
      });
    }

    const token = jwt.sign(
      { username: admin.username, role: "admin" },
      SECRET_KEY,
      { expiresIn: "1d" }
    );

    return res.status(200).json({
      success: true,
      message: "Admin login successful",
      token: token,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

// Note: To create an initial admin, you can run this once manually:
// const hashedPassword = await bcrypt.hash("1234", 10);
// await Admin.create({ username: "admin", password: hashedPassword });