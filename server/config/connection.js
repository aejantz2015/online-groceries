const mongoose = require('mongoose');
require('dotenv').config()

mongoose.connect(process.env.MONGODB_URI ? process.env.MONGODB_URI : "mongodb://localhost:27017/groceries");

module.exports = mongoose.connection;
