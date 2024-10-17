// Get all books by a specific author
public_users.get('/author/:author', (req, res) => {
    const author = req.params.author.toLowerCase();

    // Filter books where the author matches (case-insensitive)
    const booksByAuthor = Object.values(books).filter((book) => 
        book.author.toLowerCase() === author
    );

    if (booksByAuthor.length > 0) {
        return res.status(200).json(booksByAuthor);
    } else {
        return res.status(404).json({ message: "No books found by this author" });
    }
});
