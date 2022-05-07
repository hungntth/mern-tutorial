const mongoose = require('mongoose');
const dotenv = require("dotenv");

dotenv.config();

async function connect() {

    try {
        await mongoose.connect(process.env.MONGO_URL), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        }
        console.log("succesfully")
    } catch (error) {
        console.log("fail")
    }

}

module.exports = { connect };