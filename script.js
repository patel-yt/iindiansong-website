<meta name='viewport' content='width=device-width, initial-scale=1'/><script>document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    hamburger.addEventListener('click', () => navLinks.classList.toggle('active'));

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Load YouTube Videos
    const loadVideos = async () => {
        try {
            const response = await fetch('videos.json');
            const videos = await response.json();
            const container = document.querySelector('.video-grid');

            videos.forEach(video => {
                const videoCard = `
                    <div class="video-item">
                        <iframe 
                            src="https://www.youtube.com/embed/${video.id}"
                            title="${video.title}"
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen>
                        </iframe>
                        <div class="video-info">
                            <h3>${video.title}</h3>
                            <p>${video.views} views • ${video.date}</p>
                        </div>
                    </div>
                `;
                container.innerHTML += videoCard;
            });
        } catch (error) {
            console.error('Error loading videos:', error);
            document.querySelector('.video-grid').innerHTML = 
                '<p>Unable to load videos. Please try again later.</p>';
        }
    };

    loadVideos();
});</script>