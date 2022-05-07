const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Account = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
}, { timestamps: true })

module.exports = mongoose.model("Account", Account)