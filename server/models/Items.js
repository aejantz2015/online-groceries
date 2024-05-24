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
        min: 0.25
    },
    quantity: {
        type: Number,
        min: 0,
        default: 0
    },
    department: {
        type: Schema.Types.ObjectId,
        ref: "Department",
        required: true
    }
})

const Items = model('Items', itemsSchema);
  
  module.exports = Items;