const express = require('express');
const app = express();

const mongoose = require('mongoose');

require('dotenv').config();
const PORT = process.env.PORT;






app.listen(PORT, () => {
    console.log(`Running on localhost: ${PORT}`)
})
