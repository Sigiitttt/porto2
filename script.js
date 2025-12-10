document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Intersection Observer untuk Animasi Reveal
    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // elemen muncul 10% baru trigger
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Optional: Stop observing once revealed
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    // Target semua elemen dengan class 'reveal' atau 'reveal-on-scroll'
    const revealElements = document.querySelectorAll('.reveal, .reveal-on-scroll');
    revealElements.forEach(el => observer.observe(el));


    // 2. Smooth Scroll untuk Link Navigasi (Backup untuk browser lama)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Offset untuk navbar sticky (h-16 = 64px)
                const headerOffset = 80; 
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // 3. Navbar Scrolled State (Optional: jika ingin border muncul saat scroll)
    const navbar = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            navbar.classList.add('shadow-sm');
        } else {
            navbar.classList.remove('shadow-sm');
        }
    });
});