import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  items: [
    {
      food: { type: mongoose.Schema.Types.ObjectId, ref: "Food" },
      quantity: { type: Number, required: true }
    }
  ],
  totalPrice: { type: Number, required: true },
  status: { 
    type: String, 
    enum: ["Pending", "Preparing", "Out for Delivery", "Delivered"], 
    default: "Pending" 
  }
}, { timestamps: true });

const orderModel = mongoose.model("Order", orderSchema);
export default orderModel;
