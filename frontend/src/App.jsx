import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import Login from "./pages/Login";
import Home from "./pages/Home";
import About from "./pages/About";
import Books from "./pages/Books";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

const API = "http://localhost:5000/api/books";

export default function App() {
  const [books, setBooks] = useState([]);

  const loadBooks = async () => {
    const res = await axios.get(API);
    setBooks(res.data);
  };

  useEffect(() => {
    loadBooks();
  }, []);

  return (
    <Routes>
      {/* LOGIN FIRST */}
      <Route path="/" element={<Login />} />

      {/* PROTECTED PAGES */}
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <>
              <Navbar />
              <Home />
            </>
          </ProtectedRoute>
        }
      />

      <Route
        path="/about"
        element={
          <ProtectedRoute>
            <>
              <Navbar />
              <About />
            </>
          </ProtectedRoute>
        }
      />

      <Route
        path="/books"
        element={
          <ProtectedRoute>
            <>
              <Navbar />
              <Books books={books} refresh={loadBooks} />
            </>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
