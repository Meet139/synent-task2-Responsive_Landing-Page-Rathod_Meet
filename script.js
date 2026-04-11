// Generate QR code after DOM loads
document.addEventListener('DOMContentLoaded', function() {
    const qrContainer = document.getElementById('qrCodeContainer');
    
    // Only generate if container exists
    if (qrContainer) {
        new QRCode(qrContainer, {
            text: "https://play.google.com/store/apps/details?id=com.application.zomato&pcampaignid=web_share",
            width: 120,
            height: 120,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });
    }

    // Scroll animation observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

    // Smooth scroll for anchors
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', e => {
            e.preventDefault();
            const target = document.querySelector(a.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});