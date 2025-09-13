import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(process.env.MONGODB_URI, {
      dbName: DB_NAME, // ✅ this is enough
    });

    console.log(`✅ MongoDB Connected`);
    console.log(`📍 Host: ${connectionInstance.connection.host}`);
    console.log(`📂 Database: ${connectionInstance.connection.name}`);
  } catch (error) {
    console.error("❌ MongoDB Connection Failed:", error.message);
    process.exit(1);
  }
};

export default connectDB;
