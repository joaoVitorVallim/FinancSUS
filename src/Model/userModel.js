import { Schema, model } from "mongoose";

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    admin: { type: Boolean, required: true },
}, { timestamps: true });

const User = model("User", userSchema);

const vakinhaSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String },
    goal: { type: Number, required: true },
    owner: { type: Schema.Types.ObjectId, ref: "User", required: true },
}, { timestamps: true });

const Vakinha = model("Vakinha", vakinhaSchema);

export { User, Vakinha };