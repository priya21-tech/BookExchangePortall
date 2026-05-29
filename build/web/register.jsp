<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Create your BookSwap account - Join the student book exchange community">
    <title>Register - BookSwap</title>
    <link rel="stylesheet" href="css/style.css">
    <style>
        .signup-wrapper { min-height: 100vh; display: flex; }
        .signup-form-panel { flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 3rem; background: var(--surface-lowest); z-index: 10; }
        .signup-visual-panel { width: 45%; position: relative; background: var(--surface-low); overflow: hidden; display: none; }
        .signup-visual-panel .overlay { position: absolute; inset: 0; background: rgba(0,74,198,0.05); }
        .signup-form-inner { width: 100%; max-width: 420px; }
        .brand-link { font-family: var(--font-heading); font-size: 1.5rem; font-weight: 800; color: var(--primary); display: flex; align-items: center; gap: 8px; margin-bottom: 2.5rem; text-decoration: none; }
        .brand-link .brand-icon { width: 32px; height: 32px; background: var(--primary); border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 1rem; color: white; }
        .signup-header h1 { font-family: var(--font-heading); font-size: 1.8rem; font-weight: 700; color: var(--on-surface); margin-bottom: 0.5rem; letter-spacing: -0.02em; }
        .signup-header p { color: var(--on-surface-variant); margin-bottom: 2rem; }
        .terms-row { display: flex; align-items: center; gap: 10px; padding-top: 0.5rem; }
        .terms-row input[type="checkbox"] { width: 16px; height: 16px; accent-color: var(--primary); }
        .terms-row label { font-size: 0.85rem; color: var(--on-surface-variant); }
        .divider { margin-top: 2rem; text-align: center; border-top: 1px solid var(--outline-variant); padding-top: 1.5rem; }
        .divider p { color: var(--on-surface-variant); font-size: 0.9rem; }
        .divider a { color: var(--primary); font-weight: 600; }
        .hint-text { margin-top: 0.5rem; font-size: 0.8rem; color: var(--on-surface-variant); }
        @media (min-width: 1024px) { .signup-visual-panel { display: block; } }
    </style>
</head>
<body style="background: var(--surface-lowest);">

<div class="signup-wrapper">
    <div class="signup-form-panel">
        <div class="signup-form-inner">
            <a href="index.jsp" class="brand-link">
                <div class="brand-icon">&#128218;</div>
                BookSwap
            </a>
            <div class="signup-header">
                <h1>Create your account</h1>
                <p>Join the academic marketplace for effortless textbook exchange.</p>
            </div>

            <% if (request.getAttribute("error") != null) { %>
                <div class="alert alert-error">
                    &#9888; <%= request.getAttribute("error") %>
                </div>
            <% } %>

            <form action="register" method="post" id="registerForm">
                <div class="form-group">
                    <label for="name">Full Name</label>
                    <input type="text" id="name" name="name" class="form-control" 
                           placeholder="Enter your full name" required>
                </div>
                <div class="form-group">
                    <label for="email">Email Address</label>
                    <input type="email" id="email" name="email" class="form-control" 
                           placeholder="you@example.com" required>
                    <p class="hint-text">Please use your university email address</p>
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" class="form-control" 
                           placeholder="Create a password" required minlength="6">
                </div>
                <div class="form-group">
                    <label for="confirmPassword">Confirm Password</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" class="form-control" 
                           placeholder="Confirm your password" required minlength="6">
                </div>
                <div style="margin-top:1.5rem;">
                    <button type="submit" class="btn btn-primary btn-block btn-lg">
                        Create Account
                    </button>
                </div>
            </form>

            <div class="divider">
                <p>Already have an account? <a href="login">Sign In</a></p>
            </div>
        </div>
    </div>

    <div class="signup-visual-panel">
        <img src="images/register_illustration.jpg" alt="Book Exchange Illustration" style="width: 100%; height: 100%; object-fit: cover; object-position: center; position: absolute; inset: 0;">
        <div class="overlay"></div>
    </div>
</div>

<script>
    document.getElementById('registerForm').addEventListener('submit', function(e) {
        var pw = document.getElementById('password').value;
        var cpw = document.getElementById('confirmPassword').value;
        if (pw !== cpw) {
            e.preventDefault();
            alert('Passwords do not match!');
        }
    });
</script>

</body>
</html>
