import "../styles/about.css";

export default function About() {
  return (
    <div className="about-container">
      {/* HEADER */}
      <section className="about-hero">
        <h1>About Library Management System</h1>
        <p>
          A modern digital solution to organize, manage, and track books
          efficiently in libraries.
        </p>
      </section>

      {/* DESCRIPTION */}
      <section className="about-section">
        <h2>📚 What is a Library Management System?</h2>
        <p>
          A Library Management System helps libraries manage books, authors,
          availability, and transactions in a structured and digital way.
          Instead of manual registers, all data is stored securely and accessed
          instantly.
        </p>
      </section>

      {/* FEATURES */}
      <section className="about-section features">
        <h2>✨ Key Features</h2>

        <div className="features-grid">
          <div className="feature-card">
            <h3>📖 Books Management</h3>
            <p>
              Add, update, delete, and view books with complete details like
              title, author, pages, and price.
            </p>
          </div>

          <div className="feature-card">
            <h3>✍ Authors Tracking</h3>
            <p>
              Maintain accurate information about authors and their books for
              better cataloging.
            </p>
          </div>

          <div className="feature-card">
            <h3>📄 Pages & Details</h3>
            <p>
              Track page counts and additional metadata to help users choose the
              right books.
            </p>
          </div>

          <div className="feature-card">
            <h3>🔄 Availability Status</h3>
            <p>
              Easily issue and return books while tracking real-time
              availability.
            </p>
          </div>
        </div>
      </section>

      {/* QUOTES */}
      <section className="about-section quotes">
        <h2>💬 Words About Books</h2>

        <div className="quotes-grid">
          <blockquote>
            “A room without books is like a body without a soul.”
            <span>— Marcus Tullius Cicero</span>
          </blockquote>

          <blockquote>
            “So many books, so little time.”
            <span>— Frank Zappa</span>
          </blockquote>

          <blockquote>
            “Books are a uniquely portable magic.”
            <span>— Stephen King</span>
          </blockquote>
        </div>
      </section>

      {/* TECH */}
      <section className="about-section tech">
        <h2>🛠 Technology Used</h2>
        <p>
          This project is built using modern web technologies like <strong>React</strong>,
          <strong> Node.js</strong>, <strong>Express</strong>, and <strong>MongoDB</strong>,
          focusing on clean architecture, scalability, and a professional user
          experience.
        </p>
      </section>
    </div>
  );
}
