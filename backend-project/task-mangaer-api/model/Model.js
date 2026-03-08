
import mongoose from "mongoose"
const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    status: {
        type: String,
        enum: ["pending", "completed"],
        default: "pending"
    }
}, { timestamps: true });
export const Task = mongoose.model("Task", schema);
