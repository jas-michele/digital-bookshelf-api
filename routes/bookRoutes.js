const express = require('express');
const router = express.Router();

const Book = require("../models/digitalModel")

router.post("/new", async (req, res) => {
    try {
        const newBook = await Book.create(req.body);
        res.status(201).json(newBook);
    } catch (error) {
        console.error("Error creating book", error)

        res.status(400).json({
            error: error.message
        });
    }
}
)

router.get("/bookshelf", async (req, res) => {
    try {
        const result = await Book.find({});

        res.json(result);
    } catch (error) {
        console.error("Error loading books", error);
    }
    
}

)

module.exports = router;