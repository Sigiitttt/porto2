/* =========================================
   TYPEWRITER EFFECT (BENTO VERSION)
   ========================================= */
document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('typewriter-text');
    if (!textElement) return;

    const phrases = ["FullStack Web Dev.", "Data Analyst."];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentPhrase = phrases[phraseIndex];

        if (isDeleting) {
            textElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
        } else {
            textElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeSpeed = isDeleting ? 50 : 100;

        if (!isDeleting && charIndex === currentPhrase.length) {
            typeSpeed = 2000; // Pause sebelum hapus
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typeSpeed = 500;
        }

        setTimeout(type, typeSpeed);
    }

    type();
});



/* =========================================
   2. PROJECTS DATA & LOGIC (FIXED)
   ========================================= */

// DATA PROYEK (Lengkap sesuai data Anda)
const projectsData = [
    {
        id: 2,
        title: "MatKids - Educational Math Game",
        category: "game",
        image: "assets/proyek/proyek6.png",
        summary: "Game Edukasi Matematika untuk Anak Berbasis Unity.",
        description: "MatKids adalah game edukasi interaktif yang dikembangkan sebagai Proyek PPL dengan tujuan melatih kemampuan dasar matematika pada anak-anak. Dibangun menggunakan Unity 2022 LTS untuk menghadirkan gameplay yang menyenangkan melalui kombinasi visual menarik, animasi, serta tantangan soal berhitung sesuai level.",
        tech: ["C#", "Unity", "Game Design"],
        linkDemo: "https://play.unity.com/en/games/67671159-77fc-48b1-bab9-96e9652e4000/mathkids",
        linkGithub: "#"
    },
    {
        id: 3,
        title: "TIX.ID Web – Native Version",
        category: "web",
        image: "assets/proyek/image copy.png",
        summary: "Website simulasi pemesanan tiket bioskop native JS.",
        description: "TIX.ID Web – Native Version merupakan proyek website simulasi pemesanan tiket bioskop yang dibangun menggunakan HTML, CSS, dan JavaScript murni tanpa framework. Seluruh data disimpan secara lokal menggunakan LocalStorage sehingga aplikasi dapat berjalan tanpa backend.",
        tech: ["HTML5", "CSS3", "JavaScript", "LocalStorage"],
        linkDemo: "https://proyek-akhir-dpw-w7vz.vercel.app/",
        linkGithub: "https://github.com/Sigiitttt/proyek-akhir-dpw"
    },
    {
        id: 1,
        title: "Al-Qur'an Digital Web App",
        category: "web",
        image: "assets/proyek/image.png",
        summary: "Aplikasi web Al-Qur'an modern dengan audio interaktif.",
        description: "Al-Qur'an Digital Web App merupakan aplikasi web client-side yang dirancang untuk memberikan pengalaman membaca dan mendengarkan Al-Qur'an secara nyaman. Dibangun menggunakan React dan TypeScript dengan data real-time dari API publik EQuran.id.",
        tech: ["React", "TypeScript", "Tailwind CSS", "API Integration"],
        linkDemo: "https://al-quran-digital-ecru.vercel.app/",
        linkGithub: "https://github.com/Sigiitttt/Al-Quran-Digital"
    },
    {
        id: 4,
        title: "Perpustakaan Digital Kampus",
        category: "web",
        image: "assets/proyek/proyek1.png",
        summary: "Platform manajemen perpustakaan dengan pembayaran QRIS.",
        description: "Sistem Informasi Perpustakaan Digital Kampus mendukung peminjaman buku fisik, pengelolaan e-book, dan pembayaran denda via QRIS (Midtrans). Dibangun dengan PHP Native aman (Prepared Statements).",
        tech: ["PHP Native", "MySQL", "Bootstrap 5", "Midtrans QRIS"],
        linkDemo: "https://tugaskuliahsayaaa.xyz",
        linkGithub: "https://github.com/Sigiitttt/proyek_kelompok_PAW.git"
    },
    {
        id: 5,
        title: "Booking Pendakian Gunung",
        category: "web",
        image: "assets/proyek/proyek2.png",
        summary: "Sistem reservasi pendakian real-time dengan e-Tiket.",
        description: "Sistem Informasi Booking Pendakian Gunung Penanggungan. Frontend React + Vite, Backend Laravel REST API. Mendukung cek kuota real-time dan e-Tiket PDF. Dijalankan dalam container Docker.",
        tech: ["Laravel", "React", "Docker", "MySQL"],
        linkDemo: "#",
        linkGithub: "https://github.com/Sigiitttt"
    },
    {
        id: 6,
        title: "Sistem Perpustakaan Advanced",
        category: "web",
        image: "assets/proyek/image2.png",
        summary: "Sistem perpustakaan Laravel dengan Stored Procedure & Trigger.",
        description: "Proyek Basis Data Lanjut menggunakan Laravel 11 dan Filament 3. Mengimplementasikan Stored Procedure untuk denda, Trigger untuk stok, dan Cursor untuk update otomatis.",
        tech: ["Laravel 11", "Filament 3", "MySQL Stored Proc", "Tailwind"],
        linkDemo: "#",
        linkGithub: "https://github.com/Sigiitttt/"
    },
    {
        id: 7,
        title: "Ular Tangga 3D OpenGL",
        category: "game",
        image: "assets/proyek/image3.png",
        summary: "Game klasik Ular Tangga mode 2D/3D dengan C++.",
        description: "Implementasi grafis komputer menggunakan C++ dan OpenGL/GLUT. Pemain dapat beralih perspektif antara 2D (atas) dan 3D (bebas memutar kamera) saat bermain.",
        tech: ["C++", "OpenGL", "GLUT", "3D Graphics"],
        linkDemo: "#",
        linkGithub: "https://github.com/Sigiitttt"
    },
    {
        id: 8,
        title: "Aplikasi SPP Sekolah",
        category: "web",
        image: "assets/proyek/img4.png",
        summary: "Manajemen SPP dengan Payment Gateway Midtrans.",
        description: "Aplikasi pembayaran SPP berbasis web. Siswa bisa bayar online via Midtrans. Admin punya dashboard untuk kelola tagihan. UI modern dengan tema gelap/terang.",
        tech: ["PHP", "MySQL", "Midtrans", "CSS Variables"],
        linkDemo: "#",
        linkGithub: "https://github.com/Sigiitttt/"
    },
    {
        id: 9,
        title: "Distributed Retail POS",
        category: "web",
        image: "assets/proyek/img5.png",
        summary: "Sistem Kasir Offline-First untuk banyak cabang.",
        description: "Sistem POS terdistribusi dengan arsitektur Offline-First. Cabang bisa transaksi tanpa internet, lalu sinkronisasi data ke server pusat saat online via REST API.",
        tech: ["PHP Native", "REST API", "Offline-First", "MySQL"],
        linkDemo: "#",
        linkGithub: "https://github.com/Sigiitttt/proyek_akhir_sister-toko_retail"
    },
    {
        id: 10,
        title: "Deteksi Suara ML",
        category: "data",
        image: "assets/proyek/img6.png",
        summary: "Klasifikasi perintah suara 'Buka/Tutup' dengan Python.",
        description: "Proyek Machine Learning pemrosesan audio (MFCC, Spectral Features) menggunakan Random Forest. Di-deploy ke web menggunakan Streamlit untuk demo real-time.",
        tech: ["Python", "Sklearn", "Librosa", "Streamlit"],
        linkDemo: "#",
        linkGithub: "https://github.com/Sigiitttt/sistem-deteksi-suara-buka-tutup"
    },
    {
        id: 11,
        title: "Prediksi Polusi NO₂",
        category: "data",
        image: "assets/proyek/img6.png",
        summary: "Prediksi kualitas udara Time Series (Lag 10).",
        description: "Aplikasi forecasting konsentrasi NO2 menggunakan KNN Regressor dengan pendekatan Time Series (Lag 10). Visualisasi data dan input interaktif via Streamlit.",
        tech: ["Python", "Time Series", "KNN", "Streamlit"],
        linkDemo: "https://sigiitttt-sistem-prediksi-no2-berbasis-web-app-streamlit-1tbarx.streamlit.app/",
        linkGithub: "https://github.com/Sigiitttt/sistem-prediksi-NO2-berbasis-web"
    }
];

// STATE VARIABLE
let isExpanded = false;

// FUNGSI RENDER GRID PROJECT
function renderProjects(filter = 'all') {
    const gridContainer = document.getElementById('projects-grid');
    const viewMoreContainer = document.getElementById('view-more-container');

    if (!gridContainer) return;

    gridContainer.innerHTML = '';

    // 1. Filter Data
    const filteredData = filter === 'all'
        ? projectsData
        : projectsData.filter(project => project.category === filter);

    // 2. Logic View More (Show 3 or All)
    const projectsToShow = isExpanded ? filteredData : filteredData.slice(0, 3);

    // 3. Render Card Loop
    let delay = 0;
    projectsToShow.forEach(project => {
        let accentColor = 'border-slate-700';
        if (project.category === 'web') accentColor = 'hover:border-cyan-500/50 hover:shadow-cyan-500/20';
        if (project.category === 'data') accentColor = 'hover:border-purple-500/50 hover:shadow-purple-500/20';
        if (project.category === 'game') accentColor = 'hover:border-green-500/50 hover:shadow-green-500/20';

        const card = document.createElement('div');
        // Menggunakan fade-in-section dan is-visible agar animasi muncul
        card.className = `group relative bg-slate-900/50 backdrop-blur-md border border-slate-700/50 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${accentColor} opacity-0 translate-y-4`;
        
        // Animasi CSS
        card.style.animation = `fadeInUp 0.5s ease-out forwards ${delay}s`;
        delay += 0.1;

        card.innerHTML = `
            <div class="relative h-48 overflow-hidden cursor-pointer" onclick="openModal(${project.id})">
                <img src="${project.image}" onerror="this.src='https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop'" alt="${project.title}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
                <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span class="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-sm font-medium">View Details</span>
                </div>
                <div class="absolute top-4 left-4 z-20 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">${project.category}</div>
            </div>
            <div class="p-6">
                <h3 class="text-xl font-bold text-white mb-2 line-clamp-1 group-hover:text-blue-400 transition-colors cursor-pointer" onclick="openModal(${project.id})">${project.title}</h3>
                <p class="text-slate-400 text-sm line-clamp-2 mb-4">${project.summary}</p>
                <div class="flex flex-wrap gap-2">
                    ${project.tech.slice(0, 3).map(t => `<span class="text-[10px] px-2 py-1 bg-slate-800 text-slate-300 rounded-full border border-slate-700">${t}</span>`).join('')}
                    ${project.tech.length > 3 ? `<span class="text-[10px] px-2 py-1 bg-slate-800 text-slate-500 rounded-full border border-slate-700">+${project.tech.length - 3}</span>` : ''}
                </div>
            </div>
        `;
        gridContainer.appendChild(card);
    });

    // 4. Handle Tombol View More
    if (viewMoreContainer) {
        if (filteredData.length > 3 && !isExpanded) {
            viewMoreContainer.classList.remove('hidden');
        } else {
            viewMoreContainer.classList.add('hidden');
        }
    }
}

// Global Functions agar bisa dipanggil dari HTML
window.viewMoreProjects = function() {
    isExpanded = true;
    const activeBtn = document.querySelector('.filter-btn.active');
    const currentFilter = activeBtn ? activeBtn.dataset.filter : 'all';
    renderProjects(currentFilter);
}

window.filterProjects = function(category) {
    isExpanded = false; // Reset view more saat ganti filter
    
    // Update Active Button Style
    document.querySelectorAll('.filter-btn').forEach(btn => {
        if (btn.dataset.filter === category) {
            btn.classList.remove('text-slate-400', 'hover:text-white', 'hover:bg-slate-800/50');
            btn.classList.add('active', 'text-white', 'bg-slate-800', 'shadow-lg');
        } else {
            btn.classList.add('text-slate-400', 'hover:text-white', 'hover:bg-slate-800/50');
            btn.classList.remove('active', 'text-white', 'bg-slate-800', 'shadow-lg');
        }
    });
    
    renderProjects(category);
}

// Initial Render
document.addEventListener('DOMContentLoaded', () => {
    renderProjects('all');
});


/* =========================================
   FUNNY EARTH PRELOADER V3 LOGIC
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {
    const preloader = document.getElementById('funny-preloader');
    const earth = document.getElementById('earth-character');
    const textElement = document.getElementById('funny-text');
    const snotBubble = document.getElementById('snot-bubble');

    // Teks saat tidur (kalem/lucu)
    const sleepJokes = [
        "Lagi mimpiin kodingan bersih...",
        "Zzz... 5 menit lagi...",
        "Mengumpulkan niat loading...",
        "Bentar, bantalnya enak banget...",
        "Menghitung domba digital...",
        "Sabar, internetnya lagi ngulet..."
    ];

    let jokeIndex = 0;
    
    // Ganti teks tidur
    const textInterval = setInterval(() => {
        jokeIndex = (jokeIndex + 1) % sleepJokes.length;
        textElement.innerText = sleepJokes[jokeIndex];
    }, 1500);

    // SAAT WEBSITE SELESAI LOADING
    window.addEventListener("load", () => {
        // Delay minimal biar animasinya kerasa
        setTimeout(() => {
            clearInterval(textInterval);

            // 1. PHASE: GELEMBUNG PECAH & KAGET
            if(snotBubble) snotBubble.style.display = 'none'; // POP!
            
            // 2. PHASE: PANIK MODE
            earth.classList.remove('sleeping');
            earth.classList.add('panic'); // Gemetar hebat
            
            // Ganti teks jadi panik
            textElement.style.color = "#DC2626"; // Merah
            textElement.innerText = "WADUH! KESIANGAN!!";

            // 3. PHASE: KABUR (FADE OUT)
            setTimeout(() => {
                preloader.classList.add('is-hidden');
                
                // Hapus elemen
                setTimeout(() => {
                    preloader.remove();
                }, 600);
                
            }, 1000); // Panik selama 1 detik sebelum hilang

        }, 2500); // Total durasi loading minimal
    });
});


/* =========================================
   3. MODAL LOGIC (FIXED)
   ========================================= */

window.openModal = function(id) {
    const modal = document.getElementById('project-modal');
    const modalPanel = document.getElementById('modal-panel');
    const modalBackdrop = document.getElementById('modal-backdrop');

    // Cari project berdasarkan ID
    const project = projectsData.find(p => p.id === id);
    if (!project) return;

    // Isi Konten Modal
    const imgEl = document.getElementById('modal-image');
    imgEl.src = project.image;
    imgEl.onerror = function () { this.src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop'; };

    document.getElementById('modal-category').innerText = project.category;
    document.getElementById('modal-title').innerText = project.title;
    document.getElementById('modal-summary').innerText = project.summary;
    document.getElementById('modal-description').innerText = project.description;

    // Isi Tech Stack
    const techContainer = document.getElementById('modal-tech');
    techContainer.innerHTML = project.tech.map(t =>
        `<span class="px-3 py-1 bg-slate-800 border border-slate-700 rounded-lg text-xs text-slate-300 font-mono">${t}</span>`
    ).join('');

    // Handle Tombol Link
    const btnDemo = document.getElementById('modal-demo');
    const btnGithub = document.getElementById('modal-github');

    // Logic Demo Button
    if (project.linkDemo && project.linkDemo !== "#") {
        btnDemo.href = project.linkDemo;
        btnDemo.classList.remove('hidden', 'opacity-50', 'cursor-not-allowed');
        btnDemo.style.pointerEvents = 'auto';
        btnDemo.innerHTML = `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg> Live Demo`;
    } else {
        btnDemo.href = "javascript:void(0)";
        btnDemo.classList.add('opacity-50', 'cursor-not-allowed');
        btnDemo.style.pointerEvents = 'none';
        btnDemo.innerHTML = `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"></path></svg> Demo N/A`;
    }

    // Logic Github Button
    if (project.linkGithub && project.linkGithub !== "#") {
        btnGithub.href = project.linkGithub;
        btnGithub.classList.remove('hidden');
    } else {
        btnGithub.classList.add('hidden');
    }

    // Tampilkan Modal (Animation)
    modal.classList.remove('hidden');
    
    // Timeout kecil agar transisi opacity berjalan halus
    setTimeout(() => {
        modalBackdrop.classList.remove('opacity-0');
        modalPanel.classList.remove('opacity-0', 'scale-95');
        modalPanel.classList.add('opacity-100', 'scale-100');
    }, 10);
}

window.closeModal = function() {
    const modal = document.getElementById('project-modal');
    const modalPanel = document.getElementById('modal-panel');
    const modalBackdrop = document.getElementById('modal-backdrop');

    if (!modal) return;

    // Animasi Keluar
    modalBackdrop.classList.add('opacity-0');
    modalPanel.classList.remove('opacity-100', 'scale-100');
    modalPanel.classList.add('opacity-0', 'scale-95');

    // Tunggu animasi selesai baru hidden
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300);
}

// Tutup Modal jika klik di luar panel (Backdrop click)
document.addEventListener('DOMContentLoaded', () => {
    const modalBackdrop = document.getElementById('modal-backdrop');
    if(modalBackdrop) {
        modalBackdrop.addEventListener('click', closeModal);
    }
});


/* =========================================
   4. CONTACT FORM LOGIC
   ========================================= */

// Fungsi Copy Email
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        const tooltip = document.getElementById('copy-tooltip');
        tooltip.classList.remove('opacity-0', 'scale-90');
        tooltip.classList.add('opacity-100', 'scale-100');
        
        // Hide tooltip after 2 seconds
        setTimeout(() => {
            tooltip.classList.remove('opacity-100', 'scale-100');
            tooltip.classList.add('opacity-0', 'scale-90');
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}

// Fungsi Kirim Email (Simulasi)
function sendMail(event) {
    event.preventDefault(); // Mencegah reload halaman
    
    const btnSubmit = document.getElementById('btn-submit');
    const btnText = document.getElementById('btn-text');
    const btnLoader = document.getElementById('btn-loader');
    
    // Ubah tombol jadi loading
    btnSubmit.disabled = true;
    btnText.classList.add('hidden');
    btnLoader.classList.remove('hidden');
    
    // Simulasi delay kirim (2 detik)
    setTimeout(() => {
        // Balikin tombol
        btnSubmit.disabled = false;
        btnText.classList.remove('hidden');
        btnLoader.classList.add('hidden');
        
        // Reset form
        document.getElementById('contact-form').reset();
        
        // Tampilkan alert sukses (Bisa diganti SweetAlert)
        alert('Pesan berhasil dikirim! Saya akan menghubungi Anda segera.');
    }, 2000);
}

/* =========================================
   5. UTILITIES (Mobile Menu, Scroll Observer)
   ========================================= */
document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');

    if (btn && menu) {
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });
    }

    // Scroll Observer (Fade In)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in-section').forEach((el) => {
        observer.observe(el);
    });
});

/* =========================================
   6. LENIS SMOOTH SCROLL
   ========================================= */
// Pastikan Lenis sudah di-load via CDN di HTML sebelum script ini jalan
if (typeof Lenis !== 'undefined') {
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            lenis.scrollTo(this.getAttribute('href'));
        });
    });
}



/* =========================================
   SCROLL SPY (ACTIVE NAV STATE)
   ========================================= */
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    // Fungsi untuk mengubah kelas aktif
    function changeActiveNav() {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            // Angka 300 adalah offset agar trigger lebih enak (tengah layar)
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    }

    // Jalankan saat scroll
    window.addEventListener('scroll', changeActiveNav);

    // Smooth Scroll saat klik (Opsional jika CSS scroll-behavior: smooth belum jalan)
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});



