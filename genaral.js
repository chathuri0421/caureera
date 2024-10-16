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
const books = require('../data/books'); // Adjust the path as needed

// Route to get all books by a specific author
generalRoutes.get('/books/author/:author', (req, res) => {
    const author = req.params.author.toLowerCase();
    const booksByAuthor = [];

    // Iterate over all books and check for matches
    for (const isbn in books) {
        if (books[isbn].author.toLowerCase() === author) {
            booksByAuthor.push({ isbn, ...books[isbn] });
        }
    }

    // Check if books were found and respond accordingly
    if (booksByAuthor.length > 0) {
        res.status(200).json(booksByAuthor);
    } else {
        res.status(404).json({ message: "No books found by this author" });
    }
});
