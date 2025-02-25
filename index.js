const express = require("express");
const app = express();
app.use(express.json());

const Restaurant = require("./src/models/restaurant");
const Items = require("./src/models/items");

console.log(Restaurant)
console.log(Items)

require("dotenv").config({
    path: "./src/config/.env"
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`App is running at port ${PORT}`)
})

app.get("/", (request, response) => {
    response.send("Databases CA completed..")
})
