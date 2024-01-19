import mongoose from "mongoose";

const { Schema } = mongoose;

const userUpdateSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: false,
    },
    approved: {
        type: Boolean,
        required: true,
        default: false
    }
},
    { timestamps: true }
);

export default mongoose.model("UserUpdate", userUpdateSchema)