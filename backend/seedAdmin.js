// backend/seedAdmin.js
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import Admin from "./models/adminModel.js";
import { configDotenv } from "dotenv";

configDotenv();

const seedAdmin = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB for seeding...");

        const NEW_PASSWORD = "2@1#admin"; // Sizin yeni parolunuz

        const adminExists = await Admin.findOne({ username: "admin" });
        if (adminExists) {
            console.log(`Admin already exists. Updating password to '${NEW_PASSWORD}'...`);
            adminExists.password = await bcrypt.hash(NEW_PASSWORD, 10);
            await adminExists.save();
        } else {
            console.log(`Creating new admin with password '${NEW_PASSWORD}'...`);
            const hashedPassword = await bcrypt.hash(NEW_PASSWORD, 10);
            await Admin.create({
                username: "admin",
                password: hashedPassword
            });
        }

        // console.log("-----------------------------------------");
        // console.log("PAROL UĞURLA YENİLƏNDİ!");
        // console.log(`İstifadəçi adı: admin`);
        // console.log(`Yeni Parol: ${NEW_PASSWORD}`);
        // console.log("-----------------------------------------");

        mongoose.connection.close();
    } catch (error) {
        console.error("Error seeding admin:", error);
        process.exit(1);
    }
};

seedAdmin();
