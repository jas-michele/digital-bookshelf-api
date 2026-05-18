const express = require('express');
const app = express();

const mongoose = require('mongoose');
require("./config/db");
require('dotenv').config();
const PORT = process.env.PORT;

const bookRoutes = require("./routes/bookRoutes");

app.use(express.json());

app.use("/", bookRoutes);

app.get("/", bookRoutes);

app.patch("/", bookRoutes);




app.listen(PORT, () => {
    console.log(`Running on localhost: ${PORT}`)
})
