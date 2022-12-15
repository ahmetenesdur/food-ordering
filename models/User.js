import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        phoneNumber: {
            type: String,
        },
        address: {
            type: String,
        },
        image: {
            type: String,
        },
        job: {
            type: String,
        },
        bio: {
            type: String,
        },
        password: {
            type: String,
            required: true,
        },
        confirmPassword: {
            type: String,
            required: true,
        },
        emailVerified: {
            type: String,
            default: null,
        },
    },
    { timestamps: true }
);

export default mongoose.model.User || mongoose.model("User", UserSchema);