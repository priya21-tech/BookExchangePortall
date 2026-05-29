<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
    String userName = (session != null) ? (String) session.getAttribute("userName") : null;
    String userRole = (session != null) ? (String) session.getAttribute("userRole") : null;
    if (userName == null) { response.sendRedirect("login"); return; }
%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Add a new book listing on BookSwap">
    <title>Add Book - BookSwap</title>
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
            <a href="addbook" class="active">Add Book</a>
            <% if ("admin".equals(userRole)) { %><a href="admin">Admin Panel</a><% } %>
        </div>
        <div class="navbar-user">
            <div class="user-avatar"><%= userName.substring(0, 1).toUpperCase() %></div>
            <span class="user-name"><%= userName %></span>
            <a href="logout" class="btn-nav-logout">Logout</a>
        </div>
    </div>
</nav>

<div class="container" style="display:flex; justify-content:center; padding-top:3rem; padding-bottom:3rem;">
    <div style="width:100%; max-width:560px; background:var(--surface-lowest); border:1px solid var(--outline-variant); border-radius:var(--radius-lg); padding:2rem; box-shadow:var(--shadow-sm);">
        <div style="text-align:center; margin-bottom:2.5rem;">
            <h1 style="font-family:var(--font-heading); font-size:1.5rem; font-weight:700; color:var(--on-surface); margin-bottom:0.5rem;">List a Book</h1>
            <p style="font-size:0.9rem; color:var(--on-surface-variant);">Provide details to share with the academic community.</p>
        </div>

        <% if (request.getAttribute("error") != null) { %>
            <div class="alert alert-error">&#9888; <%= request.getAttribute("error") %></div>
        <% } %>

        <form action="addbook" method="post" id="addBookForm">
            <div class="form-group">
                <label for="title">Book Title *</label>
                <input type="text" id="title" name="title" class="form-control" placeholder="e.g., Data Structures and Algorithms" required>
            </div>
            <div class="form-group">
                <label for="author">Author *</label>
                <input type="text" id="author" name="author" class="form-control" placeholder="e.g., Thomas H. Cormen" required>
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label for="condition">Condition *</label>
                    <select id="condition" name="condition" class="form-control" required>
                        <option value="">Select condition</option>
                        <option value="Like New">Like New</option>
                        <option value="Good">Good</option>
                        <option value="Fair">Fair</option>
                        <option value="Poor">Poor</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="type">Listing Type *</label>
                    <select id="type" name="type" class="form-control" required onchange="togglePrice()">
                        <option value="">Select type</option>
                        <option value="sale">For Sale</option>
                        <option value="exchange">For Exchange</option>
                    </select>
                </div>
            </div>
            <div class="form-group" id="priceGroup">
                <label for="price">Price (&#8377;)</label>
                <input type="number" id="price" name="price" class="form-control" placeholder="Enter price in rupees" min="0" step="1">
            </div>
            <div class="form-group">
                <label for="description">Description</label>
                <textarea id="description" name="description" class="form-control" rows="4" placeholder="Describe the book condition, edition, any marks or highlights..."></textarea>
            </div>
            <div style="margin-top:1.5rem; padding-top:1.5rem; border-top:1px solid var(--surface-container);">
                <div class="btn-group">
                    <button type="submit" class="btn btn-primary btn-lg">&#10010; Add Book</button>
                    <a href="mybooks" class="btn btn-secondary btn-lg">Cancel</a>
                </div>
            </div>
        </form>
    </div>
</div>

<footer class="footer"><p>&copy; 2026 BookSwap - Online Book Exchange Portal. All rights reserved.</p></footer>

<script>
    function togglePrice() {
        var type = document.getElementById('type').value;
        var priceGroup = document.getElementById('priceGroup');
        if (type === 'exchange') {
            priceGroup.style.display = 'none';
            document.getElementById('price').value = '0';
        } else {
            priceGroup.style.display = 'block';
        }
    }
</script>

</body>
</html>
