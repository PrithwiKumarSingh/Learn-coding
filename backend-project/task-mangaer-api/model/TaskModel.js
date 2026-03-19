
import mongoose from "mongoose"
const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minLength: 5, 
        maxLength: 30
    },
    description: {
        type: String,
        maxLength:300,
    },
    status: {
        type: String,
        enum: ["pending", "completed"],
        default: "pending"
    }
}, { timestamps: true });
export const Task = mongoose.model("Task", schema);
