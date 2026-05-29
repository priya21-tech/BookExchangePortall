<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page import="java.util.*" %>
<%
    String userName = (session != null) ? (String) session.getAttribute("userName") : null;
    String userRole = (session != null) ? (String) session.getAttribute("userRole") : null;
    if (userName == null) { response.sendRedirect("login"); return; }
    
    List<Map<String, Object>> myBooks = (List<Map<String, Object>>) request.getAttribute("myBooks");
%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Manage your book listings on BookSwap">
    <title>My Books - BookSwap</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>

<div class="bg-orbs"><div class="orb"></div><div class="orb"></div><div class="orb"></div></div>

<nav class="navbar">
    <div class="navbar-inner">
        <a href="index.jsp" class="navbar-brand"><div class="brand-icon">&#128218;</div>BookSwap</a>
        <div class="navbar-links">
            <a href="books">Browse Books</a>
            <a href="mybooks" class="active">My Listings</a>
            <a href="myrequests">Requests</a>
            <a href="addbook">Add Book</a>
            <% if ("admin".equals(userRole)) { %><a href="admin">Admin Panel</a><% } %>
        </div>
        <div class="navbar-user">
            <div class="user-avatar"><%= userName.substring(0, 1).toUpperCase() %></div>
            <span class="user-name"><%= userName %></span>
            <a href="logout" class="btn-nav-logout">Logout</a>
        </div>
    </div>
</nav>

<div class="container">
    <div class="toolbar">
        <div class="page-header" style="margin-bottom: 0;">
            <h1>&#128218; My Listings</h1>
            <p>Manage your book listings</p>
        </div>
        <a href="addbook" class="btn btn-primary" style="border-radius:100px;">&#10010; Add New Book</a>
    </div>

    <% if (request.getParameter("success") != null) { %>
        <div class="alert alert-success">
            &#10004; 
            <% String suc = request.getParameter("success");
               if ("added".equals(suc)) { %>Book listed successfully!
            <% } else if ("updated".equals(suc)) { %>Book updated successfully!
            <% } else if ("deleted".equals(suc)) { %>Book removed successfully!
            <% } %>
        </div>
    <% } %>

    <% if (myBooks != null && !myBooks.isEmpty()) { %>
        <div class="books-grid">
            <% for (Map<String, Object> book : myBooks) { %>
                <div class="book-card">
                    <div class="book-card-header">
                        <h3><%= book.get("title") %></h3>
                        <span class="book-type-badge <%= "sale".equals(book.get("type")) ? "badge-sale" : "badge-exchange" %>">
                            <%= "sale".equals(book.get("type")) ? "&#128176; Sale" : "&#128257; Exchange" %>
                        </span>
                    </div>
                    <div class="book-meta">
                        <div class="book-meta-item">
                            <span class="meta-icon">&#9998;</span>
                            <span class="meta-label">Author</span>
                            <span><%= book.get("author") %></span>
                        </div>
                        <div class="book-meta-item">
                            <span class="meta-icon">&#9733;</span>
                            <span class="meta-label">Condition</span>
                            <span><%= book.get("condition") %></span>
                        </div>
                    </div>
                    <% if ("sale".equals(book.get("type"))) { %>
                        <div class="book-price">&#8377; <%= String.format("%.0f", book.get("price")) %></div>
                    <% } else { %>
                        <div class="book-price" style="color: var(--primary);">Open for Exchange</div>
                    <% } %>
                    <div class="book-card-footer">
                        <span class="status-badge <%= (Boolean)book.get("isActive") ? "status-accepted" : "status-rejected" %>">
                            <%= (Boolean)book.get("isActive") ? "Active" : "Inactive" %>
                        </span>
                        <div class="btn-group">
                            <a href="editbook?id=<%= book.get("id") %>" class="btn btn-sm btn-secondary">&#9998; Edit</a>
                            <a href="deletebook?id=<%= book.get("id") %>" class="btn btn-sm btn-danger" 
                               onclick="return confirm('Are you sure you want to delete this book?')">&#128465; Delete</a>
                        </div>
                    </div>
                </div>
            <% } %>
        </div>
    <% } else { %>
        <div class="empty-state">
            <div class="empty-icon">&#128214;</div>
            <h3>No books listed yet</h3>
            <p>Start by adding your first book to exchange or sell!</p>
            <a href="addbook" class="btn btn-primary" style="border-radius:100px;">&#10010; Add Your First Book</a>
        </div>
    <% } %>
</div>

<footer class="footer"><p>&copy; 2026 BookSwap - Online Book Exchange Portal. All rights reserved.</p></footer>

</body>
</html>
