<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page import="java.util.*, java.text.SimpleDateFormat" %>
<%
    String userName = (session != null) ? (String) session.getAttribute("userName") : null;
    String userRole = (session != null) ? (String) session.getAttribute("userRole") : null;
    Integer userId = (session != null) ? (Integer) session.getAttribute("userId") : null;
    if (userName == null) { response.sendRedirect("login"); return; }
    
    List<Map<String, Object>> books = (List<Map<String, Object>>) request.getAttribute("books");
    String search = (String) request.getAttribute("search");
    String filterType = (String) request.getAttribute("filterType");
    List<Map<String, Object>> myBooks = (List<Map<String, Object>>) request.getAttribute("myBooks");
%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Browse available books for sale or exchange on BookSwap">
    <title>Browse Books - BookSwap</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>

<div class="bg-orbs">
    <div class="orb"></div>
    <div class="orb"></div>
    <div class="orb"></div>
</div>

<nav class="navbar">
    <div class="navbar-inner">
        <a href="index.jsp" class="navbar-brand">
            <div class="brand-icon">&#128218;</div>
            BookSwap
        </a>
        <div class="navbar-links">
            <a href="books" class="active">Browse Books</a>
            <a href="mybooks">My Listings</a>
            <a href="myrequests">Requests</a>
            <a href="addbook">Add Book</a>
            <% if ("admin".equals(userRole)) { %>
                <a href="admin">Admin Panel</a>
            <% } %>
        </div>
        <div class="navbar-user">
            <div class="user-avatar"><%= userName.substring(0, 1).toUpperCase() %></div>
            <span class="user-name"><%= userName %></span>
            <a href="logout" class="btn-nav-logout">Logout</a>
        </div>
    </div>
</nav>

<div class="container">
    <div class="page-header" style="display:flex; flex-wrap:wrap; justify-content:space-between; align-items:flex-end; gap:1.5rem;">
        <div style="max-width:600px;">
            <h1>Find Your Next Text</h1>
            <p>Search peer-listed textbooks for sale or direct exchange across campus.</p>
        </div>
    </div>

    <% if (request.getParameter("success") != null) { %>
        <div class="alert alert-success">
            &#10004; <% if ("requested".equals(request.getParameter("success"))) { %>Request sent successfully!<% } %>
        </div>
    <% } %>
    <% if (request.getParameter("error") != null) { %>
        <div class="alert alert-error">
            &#9888; <% if ("already_requested".equals(request.getParameter("error"))) { %>You already have a pending request for this book.<% } else { %>Something went wrong. Please try again.<% } %>
        </div>
    <% } %>

    <form action="books" method="get" class="search-bar">
        <div class="search-input-wrap">
            <span class="search-icon">&#128270;</span>
            <input type="text" name="search" placeholder="Search by Title, Author, or ISBN..." 
                   value="<%= search != null ? search : "" %>">
        </div>
        <select name="filterType" class="form-control" style="width: auto; min-width: 160px; border-radius: var(--radius-md);" onchange="this.form.submit()">
            <option value="all" <%= "all".equals(filterType) || filterType == null ? "selected" : "" %>>All Types</option>
            <option value="sale" <%= "sale".equals(filterType) ? "selected" : "" %>>For Sale</option>
            <option value="exchange" <%= "exchange".equals(filterType) ? "selected" : "" %>>For Exchange</option>
        </select>
        <button type="submit" class="btn btn-primary" style="border-radius: var(--radius-md);">Search</button>
    </form>

    <% if (books != null && !books.isEmpty()) { %>
        <div class="books-grid">
            <% for (Map<String, Object> book : books) { %>
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

                    <% if (book.get("description") != null && !((String)book.get("description")).isEmpty()) { %>
                        <div class="book-description"><%= book.get("description") %></div>
                    <% } %>

                    <div class="book-card-footer">
                        <div class="book-owner">
                            Listed by <span><%= book.get("ownerName") %></span>
                        </div>
                        <% if (!userId.equals(book.get("ownerId"))) { %>
                            <button class="btn btn-sm btn-primary" style="border-radius:100px;"
                                    onclick="openRequestModal(<%= book.get("id") %>, '<%= ((String)book.get("title")).replace("'", "\\'") %>', '<%= book.get("type") %>')">
                                &#9993; Request
                            </button>
                        <% } else { %>
                            <span class="status-badge status-accepted">Your Book</span>
                        <% } %>
                    </div>
                </div>
            <% } %>
        </div>
    <% } else { %>
        <div class="empty-state">
            <div class="empty-icon">&#128214;</div>
            <h3>No books found</h3>
            <p>Try adjusting your search or filters, or be the first to list a book!</p>
            <a href="addbook" class="btn btn-primary" style="border-radius:100px;">&#10010; Add a Book</a>
        </div>
    <% } %>
</div>

<!-- Request Modal -->
<div class="modal-overlay" id="requestModal">
    <div class="modal">
        <h3>&#9993; Send Request</h3>
        <p class="text-muted mb-2" id="modalBookTitle"></p>
        <form action="request" method="post">
            <input type="hidden" name="action" value="send">
            <input type="hidden" name="bookId" id="modalBookId">
            <div class="form-group" id="offeredBookGroup" style="display: none;">
                <label for="offeredBookId">Book to Offer in Return *</label>
                <select id="offeredBookId" name="offeredBookId" class="form-control">
                    <option value="">Select a book...</option>
                    <% if (myBooks != null && !myBooks.isEmpty()) { %>
                        <% for (Map<String, Object> mb : myBooks) { %>
                            <option value="<%= mb.get("id") %>"><%= mb.get("title") %></option>
                        <% } %>
                    <% } %>
                </select>
                <% if (myBooks == null || myBooks.isEmpty()) { %>
                    <small class="text-danger">You don't have any books listed for exchange. <a href="addbook">Add one first!</a></small>
                <% } %>
            </div>
            <div class="form-group">
                <label for="message">Message (optional)</label>
                <textarea id="message" name="message" class="form-control" rows="3"
                          placeholder="Hi! I'm interested in this book..."></textarea>
            </div>
            <div class="btn-group">
                <button type="submit" class="btn btn-primary">Send Request</button>
                <button type="button" class="btn btn-secondary" onclick="closeRequestModal()">Cancel</button>
            </div>
        </form>
    </div>
</div>

<footer class="footer">
    <p>&copy; 2026 BookSwap - Online Book Exchange Portal. All rights reserved.</p>
</footer>

<script>
    function openRequestModal(bookId, bookTitle, bookType) {
        document.getElementById('modalBookId').value = bookId;
        document.getElementById('modalBookTitle').textContent = 'Requesting: ' + bookTitle;
        
        var offeredBookGroup = document.getElementById('offeredBookGroup');
        var offeredBookId = document.getElementById('offeredBookId');
        
        if (bookType === 'exchange') {
            offeredBookGroup.style.display = 'block';
            offeredBookId.required = true;
        } else {
            offeredBookGroup.style.display = 'none';
            offeredBookId.required = false;
        }
        
        document.getElementById('requestModal').classList.add('active');
    }
    function closeRequestModal() {
        document.getElementById('requestModal').classList.remove('active');
    }
    document.getElementById('requestModal').addEventListener('click', function(e) {
        if (e.target === this) closeRequestModal();
    });
</script>

</body>
</html>
