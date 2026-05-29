<%@ page contentType="text/html;charset=UTF-8" language="java" %>
    <% String userName=(session !=null) ? (String) session.getAttribute("userName") : null; String userRole=(session
        !=null) ? (String) session.getAttribute("userRole") : null; %>
        <!DOCTYPE html>
        <html class="light" lang="en">

        <head>
            <meta charset="utf-8" />
            <meta content="width=device-width, initial-scale=1.0" name="viewport" />
            <title>How ScholarlyBooks Works | BookSwap</title>
            <link
                href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;700;800&amp;family=Spline+Sans:wght@700&amp;display=swap"
                rel="stylesheet" />
            <link
                href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap"
                rel="stylesheet" />
            <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
            <script id="tailwind-config">
                tailwind.config = {
                    darkMode: "class",
                    theme: {
                        extend: {
                            "colors": {
                                "tertiary-fixed-dim": "#ffafd3",
                                "primary-fixed-dim": "#adc6ff",
                                "surface-bright": "#faf8ff",
                                "on-primary": "#ffffff",
                                "on-tertiary-container": "#fffbff",
                                "tertiary-fixed": "#ffd8e7",
                                "on-secondary-fixed": "#2c0051",
                                "on-secondary-container": "#fffbff",
                                "on-surface-variant": "#424754",
                                "primary-container": "#2170e4",
                                "primary": "#0058be",
                                "on-error-container": "#93000a",
                                "surface-container-high": "#e2e7ff",
                                "secondary-container": "#9c48ea",
                                "surface-tint": "#005ac2",
                                "on-error": "#ffffff",
                                "inverse-surface": "#283044",
                                "background": "#faf8ff",
                                "outline": "#727785",
                                "error": "#ba1a1a",
                                "outline-variant": "#c2c6d6",
                                "on-primary-fixed": "#001a42",
                                "surface-dim": "#d2d9f4",
                                "tertiary": "#a12e70",
                                "tertiary-container": "#c0488a",
                                "surface-container-lowest": "#ffffff",
                                "on-primary-container": "#fefcff",
                                "secondary": "#8127cf",
                                "on-primary-fixed-variant": "#004395",
                                "inverse-primary": "#adc6ff",
                                "on-tertiary-fixed-variant": "#85145a",
                                "on-surface": "#131b2e",
                                "surface-container": "#eaedff",
                                "secondary-fixed": "#f0dbff",
                                "on-background": "#131b2e",
                                "surface-container-highest": "#dae2fd",
                                "error-container": "#ffdad6",
                                "surface-variant": "#dae2fd",
                                "surface": "#faf8ff",
                                "surface-container-low": "#f2f3ff",
                                "primary-fixed": "#d8e2ff",
                                "on-tertiary-fixed": "#3d0026",
                                "on-tertiary": "#ffffff",
                                "on-secondary": "#ffffff",
                                "inverse-on-surface": "#eef0ff",
                                "secondary-fixed-dim": "#ddb7ff",
                                "on-secondary-fixed-variant": "#6900b3"
                            },
                            "borderRadius": {
                                "DEFAULT": "1rem",
                                "lg": "2rem",
                                "xl": "3rem",
                                "full": "9999px"
                            },
                            "fontFamily": {
                                "body-lg": ["Plus Jakarta Sans"],
                                "body-md": ["Plus Jakarta Sans"],
                                "h3": ["Plus Jakarta Sans"],
                                "label-caps": ["Spline Sans"],
                                "h1": ["Plus Jakarta Sans"],
                                "h2": ["Plus Jakarta Sans"]
                            }
                        }
                    }
                }
            </script>
            <style>
                .glass-card {
                    background: rgba(255, 255, 255, 0.7);
                    backdrop-filter: blur(12px);
                    border: 1px solid rgba(255, 255, 255, 0.3);
                    box-shadow: 0 8px 32px 0 rgba(0, 88, 190, 0.05);
                }

                .primary-gradient {
                    background: linear-gradient(135deg, #0058be 0%, #8127cf 100%);
                }

                .glow-shadow {
                    box-shadow: 0 10px 20px -5px rgba(0, 88, 190, 0.4);
                }

                .material-symbols-outlined {
                    font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
                }
            </style>
        </head>

        <body
            class="bg-background text-on-background font-body-md selection:bg-primary-fixed selection:text-on-primary-fixed">
            <div class="relative flex min-h-screen w-full flex-col overflow-x-hidden">

                <!-- Header -->
                <header class="flex items-center justify-between px-6 py-6 lg:px-20">
                    <div class="flex items-center gap-3">
                        <a href="index.jsp" class="flex items-center gap-3 text-inherit" style="text-decoration:none;">
                            <div class="bg-primary p-2 rounded-full text-on-primary">
                                <svg class="size-6" fill="none" viewbox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                    <path clip-rule="evenodd"
                                        d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z"
                                        fill="currentColor" fill-rule="evenodd"></path>
                                </svg>
                            </div>
                            <h2 class="text-on-surface text-xl font-h1 tracking-tight">ScholarlyBooks</h2>
                        </a>
                    </div>

                    <div class="flex items-center gap-4">
                        <% if (userName !=null) { %>
                            <div class="hidden lg:flex gap-6 items-center">
                                <a href="books"
                                    class="text-on-surface font-semibold hover:text-primary transition-colors">Browse
                                    Books</a>
                                <a href="mybooks"
                                    class="text-on-surface font-semibold hover:text-primary transition-colors">My
                                    Listings</a>
                                <a href="myrequests"
                                    class="text-on-surface font-semibold hover:text-primary transition-colors">Requests</a>
                                <a href="addbook"
                                    class="text-on-surface font-semibold hover:text-primary transition-colors">Add
                                    Book</a>
                                <% if ("admin".equals(userRole)) { %>
                                    <a href="admin"
                                        class="text-on-surface font-semibold hover:text-primary transition-colors">Admin
                                        Panel</a>
                                    <% } %>
                            </div>
                            <div class="flex items-center gap-3 pl-4 lg:border-l border-outline-variant">
                                <div
                                    class="size-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold">
                                    <%= userName.substring(0, 1).toUpperCase() %>
                                </div>
                                <span class="text-on-surface font-medium hidden sm:block">
                                    <%= userName %>
                                </span>
                                <a href="logout" class="text-error font-bold text-sm hover:underline ml-2">Logout</a>
                            </div>
                            <% } else { %>
                                <a href="login"
                                    class="text-primary font-bold px-4 py-2 hover:bg-surface-container rounded-full transition-colors hidden sm:block">
                                    Login
                                </a>
                                <a href="register"
                                    class="primary-gradient text-on-primary font-bold px-6 py-2 rounded-full glow-shadow inline-block">
                                    Sign Up
                                </a>
                                <% } %>
                    </div>
                </header>

                <!-- Hero Section -->
                <section class="relative px-6 py-12 lg:px-20 lg:py-24 overflow-hidden">
                    <div class="absolute top-0 right-0 -z-10 w-full h-full opacity-10">
                        <div class="absolute top-10 right-10 w-96 h-96 bg-primary blur-[120px] rounded-full"></div>
                        <div class="absolute bottom-10 left-10 w-96 h-96 bg-secondary blur-[120px] rounded-full"></div>
                    </div>
                    <div class="max-w-4xl mx-auto text-center">
                        <h1 class="text-h1 mb-6 text-on-surface">How <span class="text-primary">BookSwap</span> Works
                        </h1>
                        <p class="text-body-lg text-on-surface-variant mb-10 max-w-2xl mx-auto">
                            Join the largest student-only marketplace. Swap textbooks, save money, and build your campus
                            community with ease.
                        </p>
                        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <% if (userName !=null) { %>
                                <a href="books"
                                    class="primary-gradient text-on-primary font-bold px-10 py-4 rounded-full text-lg glow-shadow w-full sm:w-auto inline-block text-center">
                                    Browse Books
                                </a>
                                <a href="addbook"
                                    class="glass-card text-primary font-bold px-10 py-4 rounded-full text-lg w-full sm:w-auto inline-block text-center">
                                    List a Book
                                </a>
                                <% } else { %>
                                    <a href="register"
                                        class="primary-gradient text-on-primary font-bold px-10 py-4 rounded-full text-lg glow-shadow w-full sm:w-auto inline-block text-center">
                                        Continue to Sign Up
                                    </a>
                                    <a href="login"
                                        class="glass-card text-primary font-bold px-10 py-4 rounded-full text-lg w-full sm:w-auto inline-block text-center">
                                        Login
                                    </a>
                                    <% } %>
                        </div>
                    </div>
                </section>

                <!-- Step-by-Step Section -->
                <section class="px-6 py-16 lg:px-20">
                    <div class="flex flex-col gap-8">
                        <div class="flex flex-col gap-2">
                            <span class="text-label-caps text-secondary uppercase tracking-widest">The Process</span>
                            <h2 class="text-h2 text-on-surface">Your Journey to Better Swapping</h2>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <!-- Step 1 -->
                            <div
                                class="glass-card p-8 rounded-xl flex flex-col items-start gap-4 hover:border-primary/50 transition-colors border-2 border-transparent">
                                <div
                                    class="w-12 h-12 rounded-full bg-primary-container/20 flex items-center justify-center text-primary">
                                    <span class="material-symbols-outlined !text-3xl"
                                        data-icon="add_circle">add_circle</span>
                                </div>
                                <div>
                                    <h3 class="text-h3 text-on-surface mb-2">List Your Book</h3>
                                    <p class="text-on-surface-variant">Snap a photo and set your price or swap
                                        preference in seconds.</p>
                                </div>
                            </div>
                            <!-- Step 2 -->
                            <div
                                class="glass-card p-8 rounded-xl flex flex-col items-start gap-4 hover:border-primary/50 transition-colors border-2 border-transparent">
                                <div
                                    class="w-12 h-12 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary">
                                    <span class="material-symbols-outlined !text-3xl" data-icon="search">search</span>
                                </div>
                                <div>
                                    <h3 class="text-h3 text-on-surface mb-2">Browse or Request</h3>
                                    <p class="text-on-surface-variant">Find the textbooks you need from verified
                                        students on your campus.</p>
                                </div>
                            </div>
                            <!-- Step 3 -->
                            <div
                                class="glass-card p-8 rounded-xl flex flex-col items-start gap-4 hover:border-primary/50 transition-colors border-2 border-transparent">
                                <div
                                    class="w-12 h-12 rounded-full bg-tertiary-container/20 flex items-center justify-center text-tertiary">
                                    <span class="material-symbols-outlined !text-3xl"
                                        data-icon="handshake">handshake</span>
                                </div>
                                <div>
                                    <h3 class="text-h3 text-on-surface mb-2">Exchange or Buy</h3>
                                    <p class="text-on-surface-variant">Meet up safely on campus to complete your swap or
                                        sale.</p>
                                </div>
                            </div>
                            <!-- Step 4 -->
                            <div
                                class="glass-card p-8 rounded-xl flex flex-col items-start gap-4 hover:border-primary/50 transition-colors border-2 border-transparent">
                                <div
                                    class="w-12 h-12 rounded-full bg-primary-fixed/50 flex items-center justify-center text-on-primary-fixed">
                                    <span class="material-symbols-outlined !text-3xl" data-icon="groups">groups</span>
                                </div>
                                <div>
                                    <h3 class="text-h3 text-on-surface mb-2">Connect</h3>
                                    <p class="text-on-surface-variant">Build your academic network with students in your
                                        same major.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Features Bento Grid -->
                <section class="px-6 py-16 lg:px-20 bg-surface-container-low">
                    <div class="max-w-7xl mx-auto flex flex-col gap-10">
                        <div class="text-center">
                            <h2 class="text-h2 text-on-surface">The ScholarlyBooks Advantage</h2>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-12 gap-6">
                            <div
                                class="md:col-span-7 glass-card p-10 rounded-xl bg-primary-fixed text-on-primary-fixed flex flex-col justify-between min-h-[300px]">
                                <span class="material-symbols-outlined !text-6xl mb-6"
                                    data-icon="verified_user">verified_user</span>
                                <div>
                                    <h3 class="text-h2 mb-2">Safe Student-Only</h3>
                                    <p class="text-body-lg">Every user is verified via their .edu email to ensure a
                                        trusted campus marketplace.</p>
                                </div>
                            </div>
                            <div
                                class="md:col-span-5 glass-card p-10 rounded-xl bg-secondary-container text-on-secondary-container flex flex-col justify-between min-h-[300px]">
                                <span class="material-symbols-outlined !text-6xl mb-6"
                                    data-icon="savings">savings</span>
                                <div>
                                    <h3 class="text-h2 mb-2">Save Money</h3>
                                    <p class="text-body-lg">Stop paying bookstore markups. Get books for up to 80% less.
                                    </p>
                                </div>
                            </div>
                            <div
                                class="md:col-span-5 glass-card p-10 rounded-xl bg-tertiary-container text-on-tertiary-container flex flex-col justify-between min-h-[300px]">
                                <span class="material-symbols-outlined !text-6xl mb-6" data-icon="bolt">bolt</span>
                                <div>
                                    <h3 class="text-h2 mb-2">Easy Exchange</h3>
                                    <p class="text-body-lg">Fast, local meetups right where you study. No shipping
                                        required.</p>
                                </div>
                            </div>
                            <div
                                class="md:col-span-7 glass-card p-10 rounded-xl bg-inverse-surface text-inverse-on-surface flex flex-col justify-between min-h-[300px]">
                                <span class="material-symbols-outlined !text-6xl mb-6"
                                    data-icon="person_off">person_off</span>
                                <div>
                                    <h3 class="text-h2 mb-2">No Middleman</h3>
                                    <p class="text-body-lg">Direct peer-to-peer swapping. No fees for buying or listing
                                        your books.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Trust & Stats Section -->
                <section class="px-6 py-20 lg:px-20">
                    <div class="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
                        <div class="flex-1 space-y-8">
                            <h2 class="text-h2">Used by students across campuses</h2>
                            <div class="grid grid-cols-2 gap-8">
                                <div>
                                    <p class="text-primary text-5xl font-h1">100+</p>
                                    <p class="text-on-surface-variant font-bold">Books listed today</p>
                                </div>
                                <div>
                                    <p class="text-secondary text-5xl font-h1">50+</p>
                                    <p class="text-on-surface-variant font-bold">Successful exchanges</p>
                                </div>
                            </div>
                        </div>
                        <div class="flex-1 w-full">
                            <div class="glass-card p-8 rounded-xl border-l-4 border-l-primary relative overflow-hidden">
                                <div class="absolute -right-10 -bottom-10 opacity-10">
                                    <span class="material-symbols-outlined !text-9xl"
                                        data-icon="format_quote">format_quote</span>
                                </div>
                                <div class="flex items-center gap-4 mb-6">
                                    <div class="size-16 rounded-full overflow-hidden bg-surface-container-high">
                                        <img alt="student-portrait" class="w-full h-full object-cover"
                                            data-alt="close-up portrait of a smiling young university student wearing headphones in a sunny library setting"
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5OqjQaI_FwPZZHdLIQSjcSY6jXshVItUGEa27NxmQRsQanTHUCIj9Nvpd71WhMGWWEH2Rbo4rh1fdfs_R0-q1ligvj6M8AutHW5Eif8ZI2xyHBZeLYKr9NP-gteLNq_QUCj29wf9Ek9iPgKA4AlL8RzhVAZ0WqmIAv3bQ58VVHJL1ETIFbb_F7iNH97fsZxGMbqTTuL-Phs9OCL9d5felIAc7DLum27QPpavl-OtO6ipUhgpKmKQcwjzUMLADa0e5YMWjz8_Ela4" />
                                    </div>
                                    <div>
                                        <p class="font-bold text-on-surface">Piyush Paul</p>
                                        <p class="text-sm text-on-surface-variant">Techno India</p>
                                    </div>
                                </div>
                                <p class="text-body-lg italic text-on-surface leading-relaxed">
                                    "I saved over ₹500 this semester just by swapping my old Bio notes for an Computer
                                    textbook. The campus meet-up was super chill!"
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Final CTA -->
                <section class="px-6 py-24 lg:px-20 text-center">
                    <div class="max-w-3xl mx-auto glass-card p-12 lg:p-20 rounded-xl relative overflow-hidden">
                        <div class="absolute inset-0 primary-gradient opacity-5 -z-10"></div>
                        <h2 class="text-h1 mb-6">Ready to start exchanging?</h2>
                        <p class="text-body-lg text-on-surface-variant mb-10">
                            Join thousands of students who are reclaiming their textbook budget.
                        </p>
                        <div class="flex flex-col sm:flex-row gap-4 justify-center">
                            <% if (userName !=null) { %>
                                <a href="books"
                                    class="primary-gradient text-on-primary font-bold px-12 py-5 rounded-full text-xl glow-shadow inline-block text-center">
                                    Browse Books Now
                                </a>
                                <a href="addbook"
                                    class="bg-surface text-on-surface border-2 border-outline-variant font-bold px-12 py-5 rounded-full text-xl hover:bg-surface-container transition-colors inline-block text-center">
                                    List Your Books
                                </a>
                                <% } else { %>
                                    <a href="register"
                                        class="primary-gradient text-on-primary font-bold px-12 py-5 rounded-full text-xl glow-shadow inline-block text-center">
                                        Sign Up Now
                                    </a>
                                    <a href="login"
                                        class="bg-surface text-on-surface border-2 border-outline-variant font-bold px-12 py-5 rounded-full text-xl hover:bg-surface-container transition-colors inline-block text-center">
                                        Login
                                    </a>
                                    <% } %>
                        </div>
                    </div>
                </section>

                <!-- Footer -->
                <footer
                    class="px-6 py-12 lg:px-20 border-t border-outline-variant flex flex-col md:flex-row justify-between items-center gap-6">
                    <div class="flex items-center gap-2">
                        <div class="text-primary">
                            <svg class="size-5" fill="none" viewbox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                <path clip-rule="evenodd"
                                    d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z"
                                    fill="currentColor" fill-rule="evenodd"></path>
                            </svg>
                        </div>
                        <p class="text-label-caps uppercase text-on-surface-variant tracking-widest">© 2026
                            BookSwap</p>
                    </div>
                    <div class="flex gap-8">
                        <a class="text-sm font-bold text-on-surface-variant hover:text-primary" href="#">Privacy</a>
                        <a class="text-sm font-bold text-on-surface-variant hover:text-primary" href="#">Terms</a>
                        <a class="text-sm font-bold text-on-surface-variant hover:text-primary" href="#">Support</a>
                    </div>
                </footer>

            </div>
        </body>

        </html>