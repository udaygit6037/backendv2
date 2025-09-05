import dotenv from "dotenv";
dotenv.config(); // make sure this comes first

import express from "express";
import connectDB from "./db/db.js";

const app = express();

const startServer = async () => {
    try {
        await connectDB();
        app.listen(process.env.PORT || 3000, () => {
            console.log(`🚀 Server running on port ${process.env.PORT || 3000}`);
        });
    } catch (error) {
        console.error("❌ Failed to start server:", error.message);
    }
};

startServer();
