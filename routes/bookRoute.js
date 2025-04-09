import express from "express";
import {
  createBook,
  getAllBooks,
  getBookById,
  updateBookById,
  deleteBookById,
  filterBooks,
  searchBooksByTitle,
} from "../controllers/bookController.js";
import { SignIn } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", createBook);
router.get("/", getAllBooks);
router.get("/filter", filterBooks);
router.get("/search", searchBooksByTitle);
router.get("/:id", getBookById);
router.put("/:id", updateBookById);
router.delete("/:id", deleteBookById);

export default router;
