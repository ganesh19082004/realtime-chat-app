import mongoose from "mongoose";

const LOCAL_MONGODB_URI = "mongodb://127.0.0.1:27017/chat_db";

export const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI?.trim() || LOCAL_MONGODB_URI;

    if (!mongoUri) {
      throw new Error("MongoDB connection string is not defined");
    }

    if (
      mongoUri.includes("<db_password>") ||
      mongoUri.includes("<username>") ||
      mongoUri.includes("<cluster>")
    ) {
      throw new Error(
        "MONGODB_URI still contains placeholder values. Replace <username>, <password>, and <cluster> in backend/.env with your real MongoDB Atlas credentials."
      );
    }

    const conn = await mongoose.connect(mongoUri);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    if (error?.message?.includes("querySrv ENOTFOUND")) {
      console.error(
        "MongoDB Atlas SRV lookup failed. Check backend/.env for a valid MONGODB_URI, and make sure the cluster hostname is correct and reachable from this network."
      );
    }

    console.log("MongoDB connection error:", error);
    throw error;
  }
};
