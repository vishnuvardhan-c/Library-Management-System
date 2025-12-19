import axios from "axios";

const API = "http://localhost:5000/api/books";

export default function BookCard({ book, refresh }) {
  const wikiUrl = `https://en.wikipedia.org/wiki/${book.title
    .trim()
    .replace(/\s+/g, "_")}`;

  const handleIssue = async () => {
    await axios.put(`${API}/issue/${book._id}`);
    refresh();
  };

  const handleReturn = async () => {
    await axios.put(`${API}/return/${book._id}`);
    refresh();
  };

  const handleDelete = async () => {
    await axios.delete(`${API}/${book._id}`);
    refresh();
  };

  return (
    <div className="card">
      <h3>{book.title}</h3>
      <p><strong>Author:</strong> {book.author}</p>

      <span className={`status ${book.status === "Available" ? "available" : "issued"}`}>
        {book.status}
      </span>

      <div className="actions">
        {/* VIEW BOOK → AUTO WIKIPEDIA */}
        <a
          href={wikiUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="view-btn"
        >
          View Book
        </a>

        {book.status === "Available" ? (
          <button className="secondary" onClick={handleIssue}>
            Issue
          </button>
        ) : (
          <button className="secondary" onClick={handleReturn}>
            Return
          </button>
        )}

        <button className="danger" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}
