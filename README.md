# 📚 BookSwap - Online Book Exchange Portal

A modern web application for students to **buy, sell, and exchange** academic books within their campus community.

---

## 🛠 Tech Stack

| Layer        | Technology          |
|-------------|---------------------|
| Frontend    | HTML, CSS, JSP      |
| Backend     | Java Servlets       |
| Database    | MySQL               |
| Connectivity| JDBC                |
| Server      | Apache Tomcat 9+    |
| IDE         | NetBeans            |

---

## ⚡ Setup Instructions

### Prerequisites
1. **JDK 8+** installed
2. **NetBeans IDE** (with Java Web support)
3. **Apache Tomcat 9+** configured in NetBeans
4. **MySQL Server** running (XAMPP/WAMP or standalone)

### Step 1: Setup Database
1. Open MySQL (via phpMyAdmin, MySQL Workbench, or command line)
2. Run the SQL script located at: `database/schema.sql`
3. This creates the `book_exchange_db` database with tables and sample data

### Step 2: Configure Database Connection
1. Open `src/java/com/bookexchange/util/DBUtil.java`
2. Update these values to match your MySQL setup:
   ```java
   private static final String URL = "jdbc:mysql://localhost:3306/book_exchange_db";
   private static final String USER = "root";
   private static final String PASSWORD = "";  // your MySQL password
   ```

### Step 3: Add MySQL Connector JAR
1. Download `mysql-connector-java-8.0.30.jar` from Maven or the MySQL website
2. Place it in the `lib/` folder of this project
3. In NetBeans: Right-click project → Properties → Libraries → Add JAR → select the connector

### Step 4: Open in NetBeans
1. Open NetBeans IDE
2. Go to **File → Open Project**
3. Navigate to the `BookExchangePortal` folder and open it
4. NetBeans will recognize the project structure

### Step 5: Run
1. Right-click the project → **Run**
2. The app will deploy on Tomcat and open in your browser
3. Default URL: `http://localhost:8080/BookExchangePortal/`

---

## 👤 Default Login Credentials

| Role  | Email                    | Password  |
|-------|--------------------------|-----------|
| Admin | admin@bookexchange.com   | admin123  |
| User  | rahul@example.com        | password123 |
| User  | priya@example.com        | password123 |

---

## 📁 Project Structure

```
BookExchangePortal/
├── build.xml                          # Ant build file
├── database/
│   └── schema.sql                     # MySQL database schema
├── lib/                               # Place mysql-connector-java.jar here
├── nbproject/                         # NetBeans project files
│   ├── project.xml
│   ├── project.properties
│   └── build-impl.xml
├── src/java/com/bookexchange/
│   ├── util/
│   │   └── DBUtil.java                # Database connection utility
│   └── servlet/
│       ├── LoginServlet.java          # User login
│       ├── RegisterServlet.java       # User registration
│       ├── LogoutServlet.java         # Session logout
│       ├── AddBookServlet.java        # Add book listing
│       ├── ViewBooksServlet.java      # Browse all books
│       ├── EditBookServlet.java       # Edit book listing
│       ├── DeleteBookServlet.java     # Delete book listing
│       ├── RequestServlet.java        # Send/respond to requests
│       ├── MyRequestsServlet.java     # View my requests
│       ├── MyBooksServlet.java        # View my books
│       ├── AdminServlet.java          # Admin dashboard
│       └── AdminUsersServlet.java     # Admin user management
└── web/
    ├── WEB-INF/
    │   └── web.xml                    # Deployment descriptor
    ├── css/
    │   └── style.css                  # Modern dark theme CSS
    ├── index.jsp                      # Landing page
    ├── login.jsp                      # Login page
    ├── register.jsp                   # Registration page
    ├── books.jsp                      # Browse books
    ├── addbook.jsp                    # Add book form
    ├── editbook.jsp                   # Edit book form
    ├── mybooks.jsp                    # My listings
    ├── myrequests.jsp                 # My requests
    ├── admin.jsp                      # Admin dashboard
    └── admin_users.jsp                # Admin user management
```

---

## ✨ Features

- **User Registration & Login** - Secure session-based auth
- **Browse Books** - Search by title/author, filter by sale/exchange
- **Add/Edit/Delete Listings** - Full CRUD for book listings
- **Exchange Requests** - Send, accept, or reject book requests
- **Admin Dashboard** - Platform stats, user management, content moderation
- **Modern Dark UI** - Glassmorphism, animations, responsive design
