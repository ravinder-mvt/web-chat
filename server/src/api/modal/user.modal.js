import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName: { type: String, required: true },
    email: {
        type: String, required: true, unique: true,
        match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    },
    password: {
        type: String, required: true
    },
    //role can be user admin and super admin
    role: {
        type: String,
        default: "user",
        enum: ["user", "admin", "super-admin"]
    }

}, {
    timestamps: true
})

const UserData = mongoose.model("user", userSchema)
export default UserData