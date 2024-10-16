const books = require('../data/books'); // Adjust the path as needed
generalRoutes.get('/books/:isbn', (req, res) => {
    const isbn = req.params.isbn;
    
    // Check if the book exists in the data
    if (books[isbn]) {
        res.status(200).json(books[isbn]);
    } else {
        res.status(404).json({ message: "Book not found" });
    }
});
