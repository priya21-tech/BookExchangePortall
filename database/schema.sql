-- ============================================
-- Online Book Exchange Portal - Database Schema
-- Run this SQL in MySQL to create the database
-- ============================================

CREATE DATABASE IF NOT EXISTS book_exchange_db;
USE book_exchange_db;

-- Users Table
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role ENUM('user', 'admin') DEFAULT 'user',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Books Table
CREATE TABLE IF NOT EXISTS books (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    author VARCHAR(150) NOT NULL,
    book_condition VARCHAR(50) NOT NULL,
    type ENUM('sale', 'exchange') NOT NULL,
    price DECIMAL(10,2) DEFAULT 0.00,
    description TEXT,
    owner_id INT NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (owner_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Requests Table
CREATE TABLE IF NOT EXISTS requests (
    id INT AUTO_INCREMENT PRIMARY KEY,
    book_id INT NOT NULL,
    requester_id INT NOT NULL,
    offered_book_id INT,
    message TEXT,
    status ENUM('pending', 'accepted', 'rejected') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (book_id) REFERENCES books(id) ON DELETE CASCADE,
    FOREIGN KEY (requester_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (offered_book_id) REFERENCES books(id) ON DELETE CASCADE
);

-- Insert default admin user (password: admin123)
INSERT INTO users (name, email, password, role) VALUES 
('Admin', 'admin@bookexchange.com', 'admin123', 'admin');

-- Insert some sample data
INSERT INTO users (name, email, password, role) VALUES 
('Rahul Sharma', 'rahul@example.com', 'password123', 'user'),
('Priya Patel', 'priya@example.com', 'password123', 'user'),
('Amit Kumar', 'amit@example.com', 'password123', 'user');

INSERT INTO books (title, author, book_condition, type, price, description, owner_id) VALUES
('Data Structures and Algorithms', 'Cormen', 'Good', 'sale', 250.00, 'Classic DSA textbook, 3rd edition. Minor highlights on some pages.', 2),
('Operating System Concepts', 'Silberschatz', 'Like New', 'exchange', 0.00, 'Barely used OS textbook. Looking to exchange for a networking book.', 3),
('Database Management Systems', 'Ramakrishnan', 'Fair', 'sale', 180.00, 'DBMS textbook with some wear. All pages intact.', 4),
('Computer Networks', 'Tanenbaum', 'Good', 'exchange', 0.00, 'Networking fundamentals book. Want to exchange for an AI/ML book.', 2),
('Introduction to Algorithms', 'CLRS', 'Like New', 'sale', 400.00, 'The definitive algorithms textbook. Pristine condition.', 3);
