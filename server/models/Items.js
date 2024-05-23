const { Schema, model } = require('mongoose');

const itemsSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
    },
    image: {
        type: String
    },
    price: {
        type: Number,
        required: true,
        min: 0.99
    },
})