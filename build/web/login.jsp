<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Login to BookSwap - Access your book exchange account">
    <title>Login - BookSwap</title>
    <link rel="stylesheet" href="css/style.css">
    <style>
        .login-wrapper { min-height: 100vh; display: flex; }
        .login-form-panel { width: 100%; max-width: 50%; display: flex; flex-col; align-items: center; justify-content: center; padding: 3rem; background: var(--surface-lowest); position: relative; z-index: 10; }
        .login-visual-panel { 
            flex: 1; 
            position: relative; 
            background: url('images/login_illustration.png') no-repeat center center; 
            background-size: cover;
            overflow: hidden; 
            display: none; 
        }
        .login-visual-panel .visual-overlay { position: absolute; inset: 0; background: linear-gradient(135deg, rgba(229,238,255,0.2), rgba(220,233,255,0.1)); }
        .login-visual-panel .testimonial-card {
            position: absolute; bottom: 3rem; left: 3rem; right: 3rem; padding: 2rem;
            background: rgba(255,255,255,0.9); backdrop-filter: blur(12px); border-radius: var(--radius-lg);
            border: 1px solid rgba(255,255,255,0.5); box-shadow: 0 8px 24px rgba(0,0,0,0.08); max-width: 480px;
        }
        .testimonial-card .stars { color: var(--primary); margin-bottom: 1rem; font-size: 1.1rem; }
        .testimonial-card .quote { font-family: var(--font-heading); font-size: 1.15rem; font-weight: 700; color: var(--on-surface); margin-bottom: 1rem; line-height: 1.4; }
        .testimonial-card .author { font-size: 0.9rem; color: var(--on-surface-variant); }
        .login-form-inner { width: 100%; max-width: 420px; }
        .brand-link { font-family: var(--font-heading); font-size: 1.5rem; font-weight: 800; color: var(--primary); display: flex; align-items: center; gap: 8px; margin-bottom: 3rem; text-decoration: none; }
        .brand-link .brand-icon { width: 32px; height: 32px; background: var(--primary); border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 1rem; color: white; }
        .login-header h1 { font-family: var(--font-heading); font-size: 1.8rem; font-weight: 700; color: var(--on-surface); margin-bottom: 0.5rem; letter-spacing: -0.02em; }
        .login-header p { color: var(--on-surface-variant); margin-bottom: 2rem; }
        .form-label-row { display: flex; justify-content: space-between; align-items: baseline; }
        .forgot-link { font-size: 0.85rem; font-weight: 500; color: var(--primary); }
        @media (min-width: 1024px) {
            .login-visual-panel { display: block; }
            .login-form-panel { max-width: 50%; }
        }
        @media (max-width: 1023px) {
            .login-form-panel { max-width: 100%; }
        }
    </style>
</head>
<body style="background: var(--surface-lowest);">

<div class="login-wrapper">
    <!-- Left: Form -->
    <div class="login-form-panel">
        <div class="login-form-inner">
            <a href="index.jsp" class="brand-link">
                <div class="brand-icon">&#128218;</div>
                BookSwap
            </a>
            <div class="login-header">
                <h1>Welcome back</h1>
                <p>Log in to manage your textbook exchanges.</p>
            </div>

            <% if (request.getAttribute("error") != null) { %>
                <div class="alert alert-error">
                    &#9888; <%= request.getAttribute("error") %>
                </div>
            <% } %>

            <% if (request.getAttribute("success") != null) { %>
                <div class="alert alert-success">
                    &#10004; <%= request.getAttribute("success") %>
                </div>
            <% } %>

            <form action="login" method="post" id="loginForm">
                <div class="form-group">
                    <label for="email">Email Address</label>
                    <input type="email" id="email" name="email" class="form-control" 
                           placeholder="you@example.com" required>
                </div>
                <div class="form-group">
                    <div class="form-label-row">
                        <label for="password">Password</label>
                    </div>
                    <input type="password" id="password" name="password" class="form-control" 
                           placeholder="Enter your password" required>
                </div>
                <div style="margin-top:1.5rem; display:flex; flex-direction:column; gap:1rem;">
                    <button type="submit" class="btn btn-primary btn-block btn-lg">
                        Sign In
                    </button>
                    <a href="register" class="btn btn-outline btn-block btn-lg" style="justify-content:center;">
                        Create an account
                    </a>
                </div>
            </form>
        </div>
    </div>

    <!-- Right: Visual -->
    <div class="login-visual-panel">
        <div class="visual-overlay"></div>
        <div class="testimonial-card">
            <div class="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            <p class="quote">"The easiest way to find required texts for my major without breaking the bank."</p>
            <p class="author">&mdash; Sarah J., Engineering</p>
        </div>
    </div>
</div>

</body>
</html>
