import Book from "../models/Book.js";

// Add Book
export const addBook = async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.status(201).json(book);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get All Books
export const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Issue Book
export const issueBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    book.status = "Issued";
    await book.save();
    res.json(book);
  } catch (error) {
    res.status(404).json({ message: "Book not found" });
  }
};

// Return Book
export const returnBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    book.status = "Available";
    await book.save();
    res.json(book);
  } catch (error) {
    res.status(404).json({ message: "Book not found" });
  }
};

// Delete Book
export const deleteBook = async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.json({ message: "Book deleted successfully" });
  } catch (error) {
    res.status(404).json({ message: "Book not found" });
  }
};
