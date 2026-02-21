require('dotenv').config();
const mongoose = require('mongoose');


async function connectDB() {


    const uri = process.env.MONGO_URI;
    try {

        await mongoose.connect(uri); 
        console.log("DB connected !!!");
    
    } catch (err) {
        console.error("Connection error: " + err);
    }
}

module.exports = connectDB;
