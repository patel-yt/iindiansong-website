<meta name='viewport' content='width=device-width, initial-scale=1'/><!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>iindiansong - Best Indian Music Collection</title>
    <meta name="description" content="Official website of iindiansong YouTube channel - Enjoy the best Indian music, latest Bollywood songs, and traditional melodies">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>
<body>
    <!-- Navigation -->
    <nav>
        <div class="logo">
            <img src="logo.png" alt="iindiansong Logo">
            <span>iindiansong</span>
        </div>
        <div class="nav-links" id="navLinks">
            <a href="#home">Home</a>
            <a href="#videos">Videos</a>
            <a href="#playlists">Playlists</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
        </div>
        <div class="hamburger" id="hamburger">
            <i class="fas fa-bars"></i>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero" id="home">
        <div class="hero-content">
            <h1>Experience the Rhythm of India</h1>
            <p>Subscribe for latest Bollywood, Classical & Regional Music</p>
            <a href="https://youtube.com/@iindiansong" target="_blank" class="cta-button">
                <i class="fab fa-youtube"></i> Subscribe Now
            </a>
        </div>
    </section>

    <!-- Latest Videos Section -->
    <section class="videos" id="videos">
        <h2>Latest Uploads</h2>
        <div class="video-grid">
            <!-- Add your YouTube video embed codes here -->
            <div class="video-item">
                <iframe src="https://www.youtube.com/embed/your-video-id" frameborder="0" allowfullscreen></iframe>
            </div>
            <!-- Repeat for more videos -->
        </div>
    </section>

    <!-- Playlists Section -->
    <section class="playlists" id="playlists">
        <h2>Popular Playlists</h2>
        <div class="playlist-grid">
            <div class="playlist-item">
                <img src="playlist1.jpg" alt="Bollywood Hits">
                <h3>Bollywood Hits 2024</h3>
            </div>
            <!-- Add more playlist items -->
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <div class="social-links">
            <a href="https://youtube.com/@iindiansong" target="_blank"><i class="fab fa-youtube"></i></a>
            <a href="#"><i class="fab fa-facebook"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
        </div>
        <p>© 2024 iindiansong - All rights reserved</p>
    </footer>

    <script src="script.js"></script>
</body>
</html><style>* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Arial', sans-serif;
}

:root {
    --primary-color: #FF0000;
    --secondary-color: #FFA500;
    --dark-bg: #1a1a1a;
    --text-light: #ffffff;
}

body {
    background-color: var(--dark-bg);
    color: var(--text-light);
}

nav {
    display: flex;
    justify-content: space-between;
    padding: 1rem 5%;
    background: rgba(0,0,0,0.9);
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
}

.logo {
    display: flex;
    align-items: center;
    gap: 10px;
}

.logo img {
    height: 40px;
}

.hero {
    height: 100vh;
    background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)),
                url('hero-bg.jpg') center/cover;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding-top: 60px;
}

.hero-content h1 {
    font-size: 3.5rem;
    margin-bottom: 1rem;
}

.cta-button {
    display: inline-block;
    padding: 1rem 2rem;
    background: var(--primary-color);
    color: white;
    text-decoration: none;
    border-radius: 5px;
    margin-top: 2rem;
    transition: transform 0.3s;
}

.cta-button:hover {
    transform: scale(1.05);
}

.videos, .playlists {
    padding: 5rem 5%;
}

h2 {
    text-align: center;
    margin-bottom: 3rem;
    font-size: 2.5rem;
}

.video-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.video-item iframe {
    width: 100%;
    height: 200px;
    border-radius: 10px;
}

.playlist-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
}

.playlist-item {
    background: rgba(255,255,255,0.1);
    border-radius: 10px;
    overflow: hidden;
    transition: transform 0.3s;
}

.playlist-item:hover {
    transform: translateY(-5px);
}

.playlist-item img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

footer {
    text-align: center;
    padding: 2rem;
    background: rgba(0,0,0,0.9);
    margin-top: 5rem;
}

.social-links {
    margin-bottom: 1rem;
}

.social-links a {
    color: white;
    margin: 0 1rem;
    font-size: 1.5rem;
}

@media (max-width: 768px) {
    .nav-links {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background: rgba(0,0,0,0.9);
        flex-direction: column;
        padding: 1rem;
    }

    .nav-links.active {
        display: flex;
    }

    .hero-content h1 {
        font-size: 2.5rem;
    }
}</style><script>document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});</script>