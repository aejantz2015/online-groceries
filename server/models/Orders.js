const { Schema, model } = require('mongoose');

const orderSchema = new Schema({
    total: {
        type: Number,     
    },
    purchaseDate: {
        type: Date,
        default: Date.now
    },
    user: [
        {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    ],
    items: [
        {
            type: Schema.Types.ObjectId,
            ref: "Items"
        }
    ]
})

const Orders = model('Orders', orderSchema);

module.exports = Orders