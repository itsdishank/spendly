// main.js — Spendly JavaScript functionality

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('video-modal');
    const openBtn = document.getElementById('open-video-modal');
    const closeBtn = document.getElementById('close-modal');
    const videoIframe = document.getElementById('youtube-video');
    const videoSrc = videoIframe.src;

    if (openBtn && modal) {
        // Open modal
        openBtn.addEventListener('click', (e) => {
            e.preventDefault();
            modal.style.display = 'flex';
            // Optional: Auto-play when opened
            if (!videoIframe.src.includes('autoplay=1')) {
                videoIframe.src = videoSrc + (videoSrc.includes('?') ? '&' : '?') + 'autoplay=1';
            }
        });

        // Close modal function
        const closeModal = () => {
            modal.style.display = 'none';
            // Stop video by resetting src
            videoIframe.src = '';
            videoIframe.src = videoSrc;
        };

        // Close on button click
        closeBtn.addEventListener('click', closeModal);

        // Close on click outside modal content
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });

        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.style.display === 'flex') {
                closeModal();
            }
        });
    }
});
