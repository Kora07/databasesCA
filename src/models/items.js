const mongoose = require("mongoose");

const Items = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
    },
    Price: {
        type: Number,
        required: true,
    },
})

const itemModel = mongoose.model("Items", Items);

module.exports = itemModel;