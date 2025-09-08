import dotenv from "dotenv";
dotenv.config();

import connectDB from "./db/db.js";
import app from "./app.js";   // ✅ import app with routes

const startServer = async () => {
    try {
        await connectDB();
        app.listen(process.env.PORT || 5000, () => {
            console.log(`🚀 Server running on port ${process.env.PORT || 5000}`);
        });
    } catch (error) {
        console.error("❌ Failed to start server:", error.message);
    }
};

startServer();
