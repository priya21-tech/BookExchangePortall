<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page import="java.util.*" %>
<%
    String userName = (session != null) ? (String) session.getAttribute("userName") : null;
    String userRole = (session != null) ? (String) session.getAttribute("userRole") : null;
    if (userName == null) { response.sendRedirect("login"); return; }
    
    List<Map<String, Object>> receivedRequests = (List<Map<String, Object>>) request.getAttribute("receivedRequests");
    List<Map<String, Object>> sentRequests = (List<Map<String, Object>>) request.getAttribute("sentRequests");
%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Manage your book exchange requests on BookSwap">
    <title>My Requests - BookSwap</title>
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
            <a href="myrequests" class="active">Requests</a>
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
    <div class="page-header">
        <h1>&#128232; Requests Manager</h1>
        <p>Review incoming exchange offers and track your pending requests.</p>
    </div>

    <% if (request.getParameter("success") != null) { %>
        <div class="alert alert-success">
            &#10004; Request <%= request.getParameter("success") %> successfully!
        </div>
    <% } %>

    <div class="tabs">
        <button class="tab active" onclick="showTab('received', this)">
            &#128229; Received 
            <% if (receivedRequests != null) { %> (<%= receivedRequests.size() %>)<% } %>
        </button>
        <button class="tab" onclick="showTab('sent', this)">
            &#128228; Sent
            <% if (sentRequests != null) { %> (<%= sentRequests.size() %>)<% } %>
        </button>
    </div>

    <!-- Received Requests -->
    <div id="tab-received">
        <% if (receivedRequests != null && !receivedRequests.isEmpty()) { %>
            <div class="table-wrap">
                <table>
                    <thead>
                        <tr>
                            <th>Book</th>
                            <th>From</th>
                            <th>Message</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <% for (Map<String, Object> req : receivedRequests) { %>
                            <tr>
                                <td style="font-weight: 600;">
                                    <%= req.get("bookTitle") %>
                                    <% if (req.get("offeredBookTitle") != null) { %>
                                        <div style="font-size: 0.85em; color: var(--primary); margin-top: 4px;">
                                            &#8644; Offered: <%= req.get("offeredBookTitle") %>
                                        </div>
                                    <% } %>
                                </td>
                                <td><%= req.get("requesterName") %></td>
                                <td><%= req.get("message") != null ? req.get("message") : "-" %></td>
                                <td>
                                    <span class="status-badge status-<%= req.get("status") %>">
                                        <%= req.get("status") %>
                                    </span>
                                </td>
                                <td>
                                    <% if ("pending".equals(req.get("status"))) { %>
                                        <div class="btn-group">
                                            <form action="request" method="post" style="display:inline;">
                                                <input type="hidden" name="action" value="accept">
                                                <input type="hidden" name="requestId" value="<%= req.get("id") %>">
                                                <button type="submit" class="btn btn-sm btn-success">&#10004; Accept</button>
                                            </form>
                                            <form action="request" method="post" style="display:inline;">
                                                <input type="hidden" name="action" value="reject">
                                                <input type="hidden" name="requestId" value="<%= req.get("id") %>">
                                                <button type="submit" class="btn btn-sm btn-danger">&#10008; Reject</button>
                                            </form>
                                        </div>
                                    <% } else { %>
                                        <span class="text-muted">-</span>
                                    <% } %>
                                </td>
                            </tr>
                        <% } %>
                    </tbody>
                </table>
            </div>
        <% } else { %>
            <div class="empty-state">
                <div class="empty-icon">&#128229;</div>
                <h3>No requests received yet</h3>
                <p>When someone requests your books, they'll appear here.</p>
            </div>
        <% } %>
    </div>

    <!-- Sent Requests -->
    <div id="tab-sent" style="display: none;">
        <% if (sentRequests != null && !sentRequests.isEmpty()) { %>
            <div class="table-wrap">
                <table>
                    <thead>
                        <tr>
                            <th>Book</th>
                            <th>Owner</th>
                            <th>Message</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <% for (Map<String, Object> req : sentRequests) { %>
                            <tr>
                                <td style="font-weight: 600;">
                                    <%= req.get("bookTitle") %>
                                    <% if (req.get("offeredBookTitle") != null) { %>
                                        <div style="font-size: 0.85em; color: var(--primary); margin-top: 4px;">
                                            &#8644; Offered: <%= req.get("offeredBookTitle") %>
                                        </div>
                                    <% } %>
                                </td>
                                <td><%= req.get("ownerName") %></td>
                                <td><%= req.get("message") != null ? req.get("message") : "-" %></td>
                                <td>
                                    <span class="status-badge status-<%= req.get("status") %>">
                                        <%= req.get("status") %>
                                    </span>
                                </td>
                            </tr>
                        <% } %>
                    </tbody>
                </table>
            </div>
        <% } else { %>
            <div class="empty-state">
                <div class="empty-icon">&#128228;</div>
                <h3>No requests sent yet</h3>
                <p>Browse books and send requests to get started!</p>
                <a href="books" class="btn btn-primary" style="border-radius:100px;">&#128270; Browse Books</a>
            </div>
        <% } %>
    </div>
</div>

<footer class="footer"><p>&copy; 2026 BookSwap - Online Book Exchange Portal. All rights reserved.</p></footer>

<script>
    function showTab(tab, btn) {
        document.getElementById('tab-received').style.display = (tab === 'received') ? 'block' : 'none';
        document.getElementById('tab-sent').style.display = (tab === 'sent') ? 'block' : 'none';
        document.querySelectorAll('.tab').forEach(function(t) { t.classList.remove('active'); });
        btn.classList.add('active');
    }
</script>

</body>
</html>
