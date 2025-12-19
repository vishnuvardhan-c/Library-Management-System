import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/home.css";
import banner from "../assets/banner-1544x500.jpg";

const API = "http://localhost:5000/api/books";

export default function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchFeaturedBooks();
  }, []);

  const fetchFeaturedBooks = async () => {
    const res = await axios.get(API);
    setBooks(res.data.slice(0, 4)); // show only 4 books
  };

  return (
    <>
      {/* HERO BANNER */}
      <section className="hero-banner">
        <img src={banner} alt="Library Banner" />
        <div className="hero-overlay">
          <h1>Library Management System</h1>
          <p>Discover, manage, and track books with ease</p>
        </div>
      </section>

      {/* FEATURED BOOKS */}
      <section className="featured">
        <h2>Popular Books</h2>

        <div className="featured-grid">
          {books.length === 0 ? (
            <p className="empty">No books added yet</p>
          ) : (
            books.map(book => (
              <div key={book._id} className="featured-card">
                <h3>{book.title}</h3>
                <p className="author">by {book.author}</p>
                <span
                  className={
                    book.status === "Available"
                      ? "status available"
                      : "status issued"
                  }
                >
                  {book.status}
                </span>
              </div>
            ))
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-content">
          <div>
            <h3>LMS</h3>
            <p>Modern Library Management System</p>
          </div>

          <div>
            <h4>Navigation</h4>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Available Books</li>
            </ul>
          </div>

          <div>
            <h4>Tech Stack</h4>
            <p>React • Node.js • MongoDB</p>
          </div>
        </div>

        <p className="footer-bottom">
          © 2025 Library Management System. All rights reserved.
        </p>
      </footer>
    </>
  );
}
