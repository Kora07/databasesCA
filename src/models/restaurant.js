const mongoose = require("mongoose");

const Restaurant = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
    },
    City: {
        type: String,
        required: true,
    },
    Items: {
        type: [String],
    }
})

const restaurantModel = mongoose.model("Restaurant", Restaurant);

module.exports = restaurantModel;