// public_users.js

const express = require('express');
let books = require("./booksdb.js"); // Importing the books data
const public_users = express.Router();

// Get the book based on ISBN
public_users.get('/isbn/:isbn', (req, res) => {
    const ISBN = req.params.isbn;

    // Check if the book exists in the books database
    if (books[ISBN]) {
        return res.status(200).json(books[ISBN]);
    } else {
        return res.status(404).json({ message: "Book not found" });
    }
});

module.exports.general = public_users;
