import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    },
    pages: {
      type: Number,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    status: {
      type: String,
      default: "Available"
    }
  },
  { timestamps: true }
);

const Book = mongoose.model("Book", bookSchema);
export default Book;
