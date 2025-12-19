import { useState } from "react";
import axios from "axios";

const API = "http://localhost:5000/api/books";

export default function BookForm({ refresh }) {
  const [form, setForm] = useState({
    title: "",
    author: "",
    pages: "",
    price: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();
    await axios.post(API, form);
    setForm({ title: "", author: "", pages: "", price: "" });
    refresh();
  };

  return (
    <form className="form" onSubmit={submit}>
      <h2>Add New Book</h2>

      <input
        name="title"
        placeholder="Book Title (e.g. Harry Potter)"
        value={form.title}
        onChange={handleChange}
        required
      />

      <input
        name="author"
        placeholder="Author"
        value={form.author}
        onChange={handleChange}
        required
      />

      <input
        name="pages"
        type="number"
        placeholder="Pages"
        value={form.pages}
        onChange={handleChange}
      />

      <input
        name="price"
        type="number"
        placeholder="Price"
        value={form.price}
        onChange={handleChange}
      />

      <button type="submit">Add Book</button>
    </form>
  );
}
