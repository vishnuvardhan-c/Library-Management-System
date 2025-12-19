import axios from "axios";

const API = "http://localhost:5000/api/books";

function BookList({ books, refresh }) {

  const issueBook = async (id) => {
    await axios.put(`${API}/issue/${id}`);
    refresh();
  };

  const returnBook = async (id) => {
    await axios.put(`${API}/return/${id}`);
    refresh();
  };

  const deleteBook = async (id) => {
    await axios.delete(`${API}/${id}`);
    refresh();
  };

  return (
    <div>
      <h3>All Books</h3>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((b) => (
            <tr key={b._id}>
              <td>{b.title}</td>
              <td>{b.author}</td>
              <td>{b.status}</td>
              <td>
                {b.status === "Available" ? (
                  <button onClick={() => issueBook(b._id)}>Issue</button>
                ) : (
                  <button onClick={() => returnBook(b._id)}>Return</button>
                )}
                <button onClick={() => deleteBook(b._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BookList;
