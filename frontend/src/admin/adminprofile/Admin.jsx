import React from "react";
import "./Admin.css";

function Admin() {
  return (
    <div className="admin-container">
      <header className="admin-header">
        <h1>Admin Dashboard</h1>
      </header>
      <main className="admin-main">
        <section className="admin-section">
          <h2>Welcome, Admin</h2>
          <p>Manage your application efficiently.</p>
        </section>
        <section className="admin-section">
          <h3>Quick Links</h3>
          <ul className="admin-links">
            <li>
              <a href="#">User Management</a>
            </li>
            <li>
              <a href="#">Settings</a>
            </li>
            <li>
              <a href="#">Reports</a>
            </li>
          </ul>
        </section>
      </main>
      <footer className="admin-footer">
        <p>&copy; 2025 Admin Panel. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Admin;
