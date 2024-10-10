const express = require("express");
const app = express();

const mongoose = require("mongoose");

// middleware
const filmsRoute = require("./routes/films");

app.use("/films", filmsRoute);

app.get("/", (req,res) => {
    res.send("Homepage");
});
// delete before push
const MURL = "";

mongoose.connect(MURL).then(() => {
    console.log("Your mongoDB connector is on...");
});

app.listen(3000, () => {
    console.log("Your server is up and running...");
});
