// public_users.js

const express = require('express');
let books = require("./booksdb.js");
const public_users = express.Router();

// Get all books using an async callback function
public_users.get('/books', async (req, res) => {
    try {
        // Simulating an asynchronous operation, e.g., fetching from a database
        const allBooks = await new Promise((resolve) => {
            resolve(Object.values(books)); // Resolve with the array of book objects
        });
        return res.status(200).json(allBooks); // Send the books array in response
    } catch (error) {
        return res.status(500).json({ message: "Error retrieving books" });
    }
});

module.exports.general = public_users;
