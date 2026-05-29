<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page import="java.util.*" %>
<%
    String userName = (session != null) ? (String) session.getAttribute("userName") : null;
    String userRole = (session != null) ? (String) session.getAttribute("userRole") : null;
    if (userName == null || !"admin".equals(userRole)) { response.sendRedirect(request.getContextPath() + "/login"); return; }
    
    String ctx = request.getContextPath();
    List<Map<String, Object>> allUsers = (List<Map<String, Object>>) request.getAttribute("allUsers");
%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Admin User Management - BookSwap">
    <title>Manage Users - BookSwap Admin</title>
    <link rel="stylesheet" href="<%= ctx %>/css/style.css">
</head>
<body>

<div class="bg-orbs"><div class="orb"></div><div class="orb"></div><div class="orb"></div></div>

<nav class="navbar">
    <div class="navbar-inner">
        <a href="<%= ctx %>/index.jsp" class="navbar-brand"><div class="brand-icon">&#128218;</div>BookSwap</a>
        <div class="navbar-links">
            <a href="<%= ctx %>/books">Browse Books</a>
            <a href="<%= ctx %>/mybooks">My Listings</a>
            <a href="<%= ctx %>/myrequests">Requests</a>
            <a href="<%= ctx %>/addbook">Add Book</a>
            <a href="<%= ctx %>/admin" class="active">Admin Panel</a>
        </div>
        <div class="navbar-user">
            <div class="user-avatar">A</div>
            <span class="user-name"><%= userName %></span>
            <a href="<%= ctx %>/logout" class="btn-nav-logout">Logout</a>
        </div>
    </div>
</nav>

<div class="container">
    <div class="toolbar">
        <div class="page-header" style="margin-bottom: 0;">
            <h1>&#128101; Manage Users</h1>
            <p>View and manage registered users</p>
        </div>
        <a href="<%= ctx %>/admin" class="btn btn-secondary" style="border-radius:100px;">&#8592; Back to Dashboard</a>
    </div>

    <% if (allUsers != null && !allUsers.isEmpty()) { %>
        <div class="table-wrap">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Joined</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <% for (Map<String, Object> user : allUsers) { %>
                        <tr>
                            <td>#<%= user.get("id") %></td>
                            <td style="font-weight: 600;">
                                <div style="display:flex; align-items:center; gap:8px;">
                                    <div class="user-avatar" style="width:28px; height:28px; font-size:0.7rem; 
                                        <%= "admin".equals(user.get("role")) ? "background: var(--gradient-brand);" : "" %>">
                                        <%= ((String)user.get("name")).substring(0,1).toUpperCase() %>
                                    </div>
                                    <%= user.get("name") %>
                                </div>
                            </td>
                            <td><%= user.get("email") %></td>
                            <td>
                                <span class="status-badge <%= "admin".equals(user.get("role")) ? "status-accepted" : "status-pending" %>">
                                    <%= user.get("role") %>
                                </span>
                            </td>
                            <td><%= user.get("createdAt") %></td>
                            <td>
                                <% if (!"admin".equals(user.get("role"))) { %>
                                    <a href="<%= ctx %>/admin/users?delete=<%= user.get("id") %>" class="btn btn-sm btn-danger"
                                       onclick="return confirm('Delete this user and all their data?')">&#128465; Delete</a>
                                <% } else { %>
                                    <span class="text-muted">Protected</span>
                                <% } %>
                            </td>
                        </tr>
                    <% } %>
                </tbody>
            </table>
        </div>
    <% } else { %>
        <div class="empty-state">
            <div class="empty-icon">&#128101;</div>
            <h3>No users found</h3>
            <p>Registered users will appear here.</p>
        </div>
    <% } %>
</div>

<footer class="footer"><p>&copy; 2026 BookSwap - Online Book Exchange Portal. All rights reserved.</p></footer>

</body>
</html>
