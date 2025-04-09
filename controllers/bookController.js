import Book from "../models/bookModule.js";

export const createBook = async (req, res) => {
  try {
    const book = new Book(req.body);
    await book.save();
    res.status(201).json(book);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: "Book not found" });
    res.json(book);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateBookById = async (req, res) => {
  try {
    const updated = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updated) return res.status(404).json({ message: "Book not found" });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const deleteBookById = async (req, res) => {
  try {
    const deleted = await Book.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Book not found" });
    res.json({ message: "Book deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const filterBooks = async (req, res) => {
  try {
    const { author, category, rating } = req.query;

    const query = {};
    if (author) query.author = author;
    if (category) query.category = category;
    if (rating) query.rating = { $gte: Number(rating) };

    const books = await Book.find(query);
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const searchBooksByTitle = async (req, res) => {
  try {
    const { title } = req.query;

    if (!title) return res.status(400).json({ message: "Title is required" });

    const books = await Book.find({
      title: { $regex: title, $options: "i" },
    });

    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
