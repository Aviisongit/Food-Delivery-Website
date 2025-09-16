import mongoose from "mongoose";

export const connectDB = async () => {
  // Use the variable from the .env file
  await mongoose.connect(process.env.MONGO_URI); 
};