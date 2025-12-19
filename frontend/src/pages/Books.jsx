import "../styles/books.css";
import BookForm from "../components/BookForm";
import BookCard from "../components/BookCard";

export default function Books({ books, refresh }) {
  return (
    <div className="books-container">
      <h2 className="books-title">Available Books</h2>

      {/* Add Book Form */}
      <BookForm refresh={refresh} />

      {/* Books Grid */}
      <div className="books-grid">
        {books.length === 0 ? (
          <p>No books available</p>
        ) : (
          books.map(book => (
            <BookCard
              key={book._id}
              book={book}
              refresh={refresh}
            />
          ))
        )}
      </div>
    </div>
  );
}
