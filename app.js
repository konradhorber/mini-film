const express = require("express");
const app = express();

const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config();

// middleware
const filmsRoute = require("./routes/films");

app.use("/films", filmsRoute);

app.get("/", (req,res) => {
    res.send("Homepage");
});

mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log("Your mongoDB connector is on...");
});

app.listen(3000, () => {
    console.log("Your server is up and running...");
});
