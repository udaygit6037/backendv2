import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(
            `${process.env.MONGODB_URI}/${process.env.DB_NAME}`,
           
        );
        console.log("✅ Connected to MongoDB");
        console.log(`📂 Using database: ${process.env.DB_NAME}`);
    } catch (error) {
        console.error("❌ Error connecting to MongoDB:", error.message);
        process.exit(1); // Exit process on failure
    }
};

export default connectDB;
