<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page import="java.util.*" %>
<%
    String userName = (session != null) ? (String) session.getAttribute("userName") : null;
    String userRole = (session != null) ? (String) session.getAttribute("userRole") : null;
    if (userName == null || !"admin".equals(userRole)) { response.sendRedirect("login"); return; }
    
    List<Map<String, Object>> allBooks = (List<Map<String, Object>>) request.getAttribute("allBooks");
    Integer totalUsers = (Integer) request.getAttribute("totalUsers");
    Integer totalBooks = (Integer) request.getAttribute("totalBooks");
    Integer totalRequests = (Integer) request.getAttribute("totalRequests");
    Integer acceptedRequests = (Integer) request.getAttribute("acceptedRequests");
%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Admin Dashboard - BookSwap Management Panel">
    <title>Admin Dashboard - BookSwap</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>

<div class="bg-orbs"><div class="orb"></div><div class="orb"></div><div class="orb"></div></div>

<nav class="navbar">
    <div class="navbar-inner">
        <a href="index.jsp" class="navbar-brand"><div class="brand-icon">&#128218;</div>BookSwap</a>
        <div class="navbar-links">
            <a href="books">Browse Books</a>
            <a href="mybooks">My Listings</a>
            <a href="myrequests">Requests</a>
            <a href="addbook">Add Book</a>
            <a href="admin" class="active">Admin Panel</a>
        </div>
        <div class="navbar-user">
            <div class="user-avatar">A</div>
            <span class="user-name"><%= userName %></span>
            <a href="logout" class="btn-nav-logout">Logout</a>
        </div>
    </div>
</nav>

<div class="container">
    <div class="toolbar">
        <div class="page-header" style="margin-bottom: 0;">
            <h1>&#128736; Moderator Dashboard</h1>
            <p>System overview and pending moderation queues.</p>
        </div>
        <a href="admin/users" class="btn btn-amber" style="border-radius:100px;">&#128101; Manage Users</a>
    </div>

    <% if (request.getParameter("success") != null) { %>
        <div class="alert alert-success">&#10004; Book listing removed successfully!</div>
    <% } %>

    <!-- Stats -->
    <div class="stats-grid">
        <div class="stat-card">
            <div class="stat-value"><%= totalUsers != null ? totalUsers : 0 %></div>
            <div class="stat-label">Registered Users</div>
        </div>
        <div class="stat-card">
            <div class="stat-value"><%= totalBooks != null ? totalBooks : 0 %></div>
            <div class="stat-label">Total Books Listed</div>
        </div>
        <div class="stat-card">
            <div class="stat-value"><%= totalRequests != null ? totalRequests : 0 %></div>
            <div class="stat-label">Total Requests</div>
        </div>
        <div class="stat-card">
            <div class="stat-value"><%= acceptedRequests != null ? acceptedRequests : 0 %></div>
            <div class="stat-label">Successful Exchanges</div>
        </div>
    </div>

    <!-- All Books Table -->
    <h2 style="font-family:var(--font-heading); font-size:1.3rem; font-weight:700; margin-bottom:1rem;">&#128214; Book Listings Queue</h2>

    <% if (allBooks != null && !allBooks.isEmpty()) { %>
        <div class="table-wrap">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Type</th>
                        <th>Price</th>
                        <th>Owner</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <% for (Map<String, Object> book : allBooks) { %>
                        <tr>
                            <td>#<%= book.get("id") %></td>
                            <td style="font-weight: 600;"><%= book.get("title") %></td>
                            <td><%= book.get("author") %></td>
                            <td>
                                <span class="book-type-badge <%= "sale".equals(book.get("type")) ? "badge-sale" : "badge-exchange" %>">
                                    <%= book.get("type") %>
                                </span>
                            </td>
                            <td><% if ("sale".equals(book.get("type"))) { %>&#8377;<%= String.format("%.0f", book.get("price")) %><% } else { %>-<% } %></td>
                            <td><%= book.get("ownerName") %></td>
                            <td>
                                <span class="status-badge <%= (Boolean)book.get("isActive") ? "status-accepted" : "status-rejected" %>">
                                    <%= (Boolean)book.get("isActive") ? "Active" : "Inactive" %>
                                </span>
                            </td>
                            <td>
                                <a href="deletebook?id=<%= book.get("id") %>" class="btn btn-sm btn-danger"
                                   onclick="return confirm('Remove this listing?')">&#128465; Remove</a>
                            </td>
                        </tr>
                    <% } %>
                </tbody>
            </table>
        </div>
    <% } else { %>
        <div class="empty-state">
            <div class="empty-icon">&#128214;</div>
            <h3>No book listings yet</h3>
            <p>When users list books, they will appear here.</p>
        </div>
    <% } %>

    <!-- Requests Queue Table -->
    <h2 style="font-family:var(--font-heading); font-size:1.3rem; font-weight:700; margin-top:3rem; margin-bottom:1rem;">&#128232; Requests Queue</h2>

    <% 
        List<Map<String, Object>> allRequests = (List<Map<String, Object>>) request.getAttribute("allRequests");
        if (allRequests != null && !allRequests.isEmpty()) { 
    %>
        <div class="table-wrap">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Book</th>
                        <th>Owner</th>
                        <th>Requester</th>
                        <th>Message</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <% for (Map<String, Object> req : allRequests) { %>
                        <tr>
                            <td>#<%= req.get("id") %></td>
                            <td style="font-weight: 600;">
                                <%= req.get("bookTitle") %>
                                <% if (req.get("offeredBookTitle") != null) { %>
                                    <div style="font-size: 0.85em; color: var(--primary); margin-top: 4px;">
                                        &#8644; Offered: <%= req.get("offeredBookTitle") %>
                                    </div>
                                <% } %>
                            </td>
                            <td><%= req.get("ownerName") %></td>
                            <td><%= req.get("requesterName") %></td>
                            <td><%= req.get("message") != null ? req.get("message") : "-" %></td>
                            <td>
                                <span class="status-badge status-<%= req.get("status") %>">
                                    <%= req.get("status") %>
                                </span>
                            </td>
                            <td>
                                <a href="deleterequest?id=<%= req.get("id") %>" class="btn btn-sm btn-danger"
                                   onclick="return confirm('Delete this request?')">&#128465; Delete</a>
                            </td>
                        </tr>
                    <% } %>
                </tbody>
            </table>
        </div>
    <% } else { %>
        <div class="empty-state">
            <div class="empty-icon">&#128232;</div>
            <h3>No requests yet</h3>
            <p>User requests will appear here.</p>
        </div>
    <% } %>
</div>

<footer class="footer"><p>&copy; 2026 BookSwap - Online Book Exchange Portal. All rights reserved.</p></footer>

</body>
</html>
