import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config(); // Load .env file

console.log("MONGO_URL:", process.env.MONGO_URL); // Make sure this prints a URL

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`MongoDB connection error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
