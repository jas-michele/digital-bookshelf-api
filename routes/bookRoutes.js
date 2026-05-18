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
});

router.get("/book/:id", async (req, res) => {
    try {
        const response = await Book.findById(req.params.id);

        res.json(response);
    } catch (error) {
        console.error("Error finding book")

        res.status(500).json({
            error: error.message
        });
    }
});

router.patch("/update/:id", async (req, res) => {
    try {
        const response = await Book.findByIdAndUpdate(req.params.id, req.body, {returnDocument: 'after'});

        res.json(response);
    } catch (error) {
        console.error("Error updating")

        res.status(500).json({
            error: error.message
        })
    }
})

module.exports = router;