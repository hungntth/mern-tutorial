const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema({
    email: { type: String, required: true, unique: true },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true }
}, { timestamps: true })

module.exports = mongoose.model("User", User)