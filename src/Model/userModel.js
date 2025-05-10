import { Schema, model } from "mongoose";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { 
        type: String, 
        required: true, 
        unique: true,
        validate: {
            validator: function(v) {
                return emailRegex.test(v);
            },
            message: props => `${props.value} não é um email válido!`
        }
    },
    password: { type: String, required: true },
    admin: { type: Boolean, required: true },
    vakinhas: [{ type: Schema.Types.ObjectId, ref: 'Vakinha' }],
    refresh_token: { type: String },
});

const User = model("User", userSchema);

const vakinhaSchema = new Schema({
    title: { type: String, required: true, index: 'text' },
    description: { type: String, required: true },
    goal: { type: Number, required: true },
    owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    image: String,
    received: { type: Number, default: 0 },
});

const Vakinha = model("Vakinha", vakinhaSchema);

export { User, Vakinha };