import express from "express";
import {
  addBook,
  getBooks,
  issueBook,
  returnBook,
  deleteBook
} from "../controllers/bookController.js";

const router = express.Router();

router.post("/", addBook);
router.get("/", getBooks);
router.put("/issue/:id", issueBook);
router.put("/return/:id", returnBook);
router.delete("/:id", deleteBook);

export default router;
