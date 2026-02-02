/* =========================================
   1. KONFIGURASI TYPEWRITER EFFECT (FIXED)
   ========================================= */
document.addEventListener('DOMContentLoaded', () => {

    // Teks yang akan bergantian
    const phrases = [
        { text: "Data Analyst.", color: "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500" },
        { text: "Web Developer.", color: "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500" }
    ];

    const typeSpeed = 100;
    const deleteSpeed = 50;
    const pauseTime = 2000;

    const dynamicText = document.getElementById('typewriter-text');

    if (!dynamicText) return;

    async function typeWriter(text) {
        for (let i = 0; i < text.length; i++) {
            dynamicText.textContent += text.charAt(i);
            await new Promise(r => setTimeout(r, typeSpeed));
        }
    }

    async function deleteWriter() {
        let text = dynamicText.textContent;
        while (text.length > 0) {
            text = text.slice(0, -1);
            dynamicText.textContent = text;
            await new Promise(r => setTimeout(r, deleteSpeed));
        }
    }

    async function startLoop() {
        let i = 0;
        while (true) {
            const current = phrases[i % phrases.length];

            // Set Warna
            dynamicText.className = current.color;

            // Ketik
            await typeWriter(current.text);

            // Tunggu
            await new Promise(r => setTimeout(r, pauseTime));

            // Hapus
            await deleteWriter();

            // Jeda Dikit
            await new Promise(r => setTimeout(r, 500));

            i++;
        }
    }

    // Mulai loop
    setTimeout(startLoop, 1000);
});
/* =========================================
   2. DATA PROYEK & RENDER LOGIC
   ========================================= */
const projectsData = [
    {
        id: 1,
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
        id: 2,
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
        id: 3,
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

// STATE VARIABLE: Untuk melacak apakah kita sedang menampilkan semua atau cuma 3
let isExpanded = false;

function renderProjects(filter = 'all') {
    const gridContainer = document.getElementById('projects-grid');
    const viewMoreContainer = document.getElementById('view-more-container'); // Ambil elemen tombol

    if (!gridContainer) return;

    gridContainer.innerHTML = '';

    // 1. Filter Data Sesuai Kategori
    const filteredData = filter === 'all'
        ? projectsData
        : projectsData.filter(project => project.category === filter);

    // 2. Tentukan Limit Data
    // Jika isExpanded TRUE, tampilkan semua. Jika FALSE, cuma 3.
    const projectsToShow = isExpanded ? filteredData : filteredData.slice(0, 3);

    // 3. Render Card Loop
    let delay = 0;
    projectsToShow.forEach(project => {
        let accentColor = 'border-slate-700';
        if (project.category === 'web') accentColor = 'hover:border-cyan-500/50 hover:shadow-cyan-500/20';
        if (project.category === 'data') accentColor = 'hover:border-purple-500/50 hover:shadow-purple-500/20';
        if (project.category === 'game') accentColor = 'hover:border-green-500/50 hover:shadow-green-500/20';

        const card = document.createElement('div');
        card.className = `group relative bg-slate-900/50 backdrop-blur-md border border-slate-700/50 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${accentColor} opacity-0 translate-y-4`;

        card.style.animation = `fadeInUp 0.5s ease-out forwards ${delay}s`;
        delay += 0.1;

        card.innerHTML = `
            <div class="relative h-48 overflow-hidden cursor-pointer" onclick="openModal(${project.id})">
                <img src="${project.image}" onerror="this.src='https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop'" alt="${project.title}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
                <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span class="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-sm font-medium">View Details</span>
                </div>
            </div>
            <div class="p-6">
                <div class="flex justify-between items-start mb-3">
                    <span class="text-xs font-bold uppercase tracking-wider text-slate-400 border border-slate-700 px-2 py-1 rounded">${project.category}</span>
                </div>
                <h3 class="text-xl font-bold text-white mb-2 line-clamp-1 group-hover:text-accent transition-colors cursor-pointer" onclick="openModal(${project.id})">${project.title}</h3>
                <p class="text-slate-400 text-sm line-clamp-2 mb-4">${project.summary}</p>
                <div class="flex flex-wrap gap-2">
                    ${project.tech.slice(0, 3).map(t => `<span class="text-[10px] px-2 py-1 bg-slate-800 text-slate-300 rounded-full">${t}</span>`).join('')}
                    ${project.tech.length > 3 ? `<span class="text-[10px] px-2 py-1 bg-slate-800 text-slate-500 rounded-full">+${project.tech.length - 3}</span>` : ''}
                </div>
            </div>
        `;
        gridContainer.appendChild(card);
    });

    // 4. Logic Tombol View More (Show/Hide)
    if (viewMoreContainer) {
        // Jika jumlah data asli lebih dari 3 DAN kita belum expand -> Tampilkan tombol
        if (filteredData.length > 3 && !isExpanded) {
            viewMoreContainer.classList.remove('hidden');
        } else {
            // Jika data <= 3 atau sudah di-expand -> Sembunyikan tombol
            viewMoreContainer.classList.add('hidden');
        }
    }
}

// Fungsi Trigger saat tombol diklik
function viewMoreProjects() {
    isExpanded = true; // Set status jadi tampilkan semua

    // Ambil filter yang sedang aktif saat ini
    const activeBtn = document.querySelector('.filter-btn.active');
    const currentFilter = activeBtn ? activeBtn.dataset.filter : 'all';

    renderProjects(currentFilter); // Render ulang
}

// Update fungsi filter
function filterProjects(category) {
    isExpanded = false; // PENTING: Reset ke 3 lagi setiap kali ganti kategori

    document.querySelectorAll('.filter-btn').forEach(btn => {
        if (btn.dataset.filter === category) {
            btn.classList.remove('text-slate-400', 'bg-transparent');
            btn.classList.add('text-white', 'bg-slate-800', 'shadow-lg', 'active'); // Tambah class active
        } else {
            btn.classList.add('text-slate-400');
            btn.classList.remove('text-white', 'bg-slate-800', 'shadow-lg', 'active');
        }
    });
    renderProjects(category);
}

// Initial render
document.addEventListener('DOMContentLoaded', () => {
    renderProjects('all');
});

/* =========================================
   3. MODAL LOGIC
   ========================================= */
const modal = document.getElementById('project-modal');
const modalPanel = document.getElementById('modal-panel');
const modalBackdrop = document.getElementById('modal-backdrop');

function openModal(id) {
    const project = projectsData.find(p => p.id === id);
    if (!project) return;

    // Populate Data
    const imgEl = document.getElementById('modal-image');
    imgEl.src = project.image;
    imgEl.onerror = function () { this.src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop'; };

    document.getElementById('modal-category').innerText = project.category;
    document.getElementById('modal-title').innerText = project.title;
    document.getElementById('modal-summary').innerText = project.summary;
    document.getElementById('modal-description').innerText = project.description;

    const techContainer = document.getElementById('modal-tech');
    techContainer.innerHTML = project.tech.map(t =>
        `<span class="px-3 py-1 bg-slate-800 border border-slate-700 rounded-lg text-xs text-slate-300">${t}</span>`
    ).join('');

    const btnDemo = document.getElementById('modal-demo');
    const btnGithub = document.getElementById('modal-github');

    if (project.linkDemo && project.linkDemo !== "#") {
        btnDemo.href = project.linkDemo;
        btnDemo.classList.remove('hidden', 'opacity-50', 'cursor-not-allowed');
    } else {
        btnDemo.href = "javascript:void(0)";
        btnDemo.classList.add('opacity-50', 'cursor-not-allowed');
        btnDemo.title = "Demo not available";
    }

    if (project.linkGithub && project.linkGithub !== "#") {
        btnGithub.href = project.linkGithub;
    } else {
        btnGithub.href = "javascript:void(0)";
    }

    modal.classList.remove('hidden');
    setTimeout(() => {
        modalBackdrop.classList.remove('opacity-0');
        modalPanel.classList.remove('opacity-0', 'scale-95');
        modalPanel.classList.add('opacity-100', 'scale-100');
    }, 10);
}

function closeModal() {
    modalBackdrop.classList.add('opacity-0');
    modalPanel.classList.remove('opacity-100', 'scale-100');
    modalPanel.classList.add('opacity-0', 'scale-95');

    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300);
}

// Event Listeners untuk Modal
if (modal) {
    modal.addEventListener('click', (e) => {
        // Klik di luar panel atau tombol close (backdrop)
        if (e.target === modalBackdrop || e.target === modal) {
            // closeModal(); // Opsional: aktifkan jika ingin klik background menutup modal
        }
    });
}

// Global click handler untuk menutup modal jika klik backdrop (perbaikan logic sebelumnya)
window.onclick = function (event) {
    if (modalPanel && event.target == modalPanel.parentElement) {
        closeModal();
    }
}

/* =========================================
   4. CONTACT FORM & UTILS
   ========================================= */
function copyEmail() {
    const email = "emailmu@example.com";
    navigator.clipboard.writeText(email).then(() => {
        const tooltip = document.getElementById('copy-tooltip');
        tooltip.classList.remove('opacity-0');
        tooltip.classList.add('opacity-100', '-translate-y-2');
        setTimeout(() => {
            tooltip.classList.remove('opacity-100', '-translate-y-2');
            tooltip.classList.add('opacity-0');
        }, 2000);
    });
}

function sendMail(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    window.location.href = `mailto:emailmu@example.com?subject=Pesan dari ${name}&body=${message}`;
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

