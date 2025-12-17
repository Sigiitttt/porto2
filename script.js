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

// --- PROJECT DATA & LOGIC ---

// 1. Database Project (Tambahkan project baru disini)
const projectsData = [
    {
        id: 1,
        title: "MatKids - Educational Math Game",
        category: "game",
        image: "assets/proyek/proyek6.png",
        summary: "Game Edukasi Matematika untuk Anak Berbasis Unity.",
        description: "MatKids adalah game edukasi interaktif yang dikembangkan sebagai Proyek PPL dengan tujuan melatih kemampuan dasar matematika pada anak-anak. Dibangun menggunakan Unity 2022 LTS untuk menghadirkan gameplay yang menyenangkan melalui kombinasi visual menarik, animasi, serta tantangan soal berhitung sesuai level. Game dapat dijalankan langsung melalui Unity Editor dan tersedia opsi build untuk Windows. Cocok sebagai media belajar yang kreatif dan mendukung peningkatan literasi numerik bagi pelajar usia dini.",
        tech: ["C#", "Unity"],
        linkDemo: "https://play.unity.com/en/games/67671159-77fc-48b1-bab9-96e9652e4000/mathkids",
        linkGithub: "#"
    },
    {
        id: 2,
        title: "TIX.ID Web – Native Version",
        category: "web",
        image: "assets/proyek/image copy.png",
        summary: "Website simulasi pemesanan tiket bioskop dengan fitur lengkap berbasis HTML, CSS, dan JavaScript murni.",
        description: "TIX.ID Web – Native Version merupakan proyek website simulasi pemesanan tiket bioskop yang dibangun menggunakan HTML, CSS, dan JavaScript murni tanpa framework. Proyek ini mengadaptasi fitur utama aplikasi TIX.ID, mulai dari pemesanan tiket film, pemilihan kursi, pemesanan makanan dan minuman, hingga proses pembayaran dan riwayat transaksi. Seluruh data disimpan secara lokal menggunakan LocalStorage sehingga aplikasi dapat berjalan tanpa backend. Proyek ini dirancang dengan struktur folder yang modular dan antarmuka yang responsif, serta dilengkapi dashboard admin untuk mengelola data film dan menu makanan. Aplikasi ini cocok sebagai media pembelajaran, tugas kuliah, maupun demonstrasi UI/UX aplikasi ticketing berbasis web.",
        tech: [
            "HTML5",
            "CSS3",
            "JavaScript (Native)",
            "LocalStorage API",
            "Responsive Web Design"
        ],
        linkDemo: "https://proyek-akhir-dpw-w7vz.vercel.app/",
        linkGithub: "https://github.com/Sigiitttt/proyek-akhir-dpw"
    }
    ,
    {
        id: 3,
        title: "Al-Qur'an Digital Web App – Modern & Interactive",
        category: "web",
        image: "assets/proyek/image.png",
        summary: "Aplikasi web Al-Qur'an modern untuk membaca dan mendengarkan ayat dengan audio interaktif berbasis React + TypeScript.",
        description: "Al-Qur'an Digital Web App merupakan aplikasi web client-side yang dirancang untuk memberikan pengalaman membaca dan mendengarkan Al-Qur'an secara nyaman, responsif, dan interaktif. Aplikasi ini dibangun menggunakan React dan TypeScript untuk memastikan performa tinggi serta keamanan dan keandalan kode. Data Al-Qur'an diambil secara real-time dari API publik EQuran.id. Proyek ini menerapkan pola desain Container/Presentational untuk memisahkan logika bisnis dan tampilan UI, sehingga struktur kode lebih terorganisir dan mudah dipelihara. Fitur utama meliputi daftar 114 surah lengkap, tampilan ayat per surah dengan terjemahan dan transliterasi, audio player terintegrasi dengan manajemen state yang cerdas, pilihan qari (reciter), serta desain responsif yang optimal di berbagai perangkat.",
        tech: [
            "React",
            "TypeScript",
            "Tailwind CSS",
            "React Router DOM",
            "React Hooks"
        ],
        linkDemo: "https://al-quran-digital-ecru.vercel.app/",
        linkGithub: "https://github.com/Sigiitttt/Al-Quran-Digital"
    },
    {
        id: 4,
        title: "Sistem Informasi Perpustakaan Digital Kampus",
        category: "web",
        image: "assets/proyek/proyek1.png",
        summary: "Platform manajemen perpustakaan digital dengan fitur peminjaman, e-book, dan pembayaran denda terintegrasi QRIS.",
        description: "Sistem Informasi Perpustakaan Digital Kampus merupakan aplikasi web yang dirancang untuk mendigitalkan seluruh proses sirkulasi perpustakaan, mulai dari pengelolaan koleksi buku hingga pembayaran denda secara online. Aplikasi ini dibangun menggunakan PHP Native dan MySQL dengan penerapan standar keamanan seperti PDO Prepared Statements untuk mencegah SQL Injection. Sistem mendukung peminjaman buku fisik, pengelolaan e-book yang dapat diunduh secara digital, perhitungan denda keterlambatan secara real-time, serta integrasi pembayaran denda menggunakan QRIS (Midtrans) dengan mekanisme verifikasi oleh admin. Antarmuka aplikasi dibuat responsif menggunakan Bootstrap 5 sehingga dapat diakses dengan nyaman oleh mahasiswa maupun admin perpustakaan.",
        tech: [
            "PHP Native",
            "MySQL",
            "HTML",
            "CSS",
            "JavaScript",
            "Bootstrap 5",
            "Midtrans (QRIS)"
        ],
        linkDemo: "https://tugaskuliahsayaaa.xyz",
        linkGithub: "https://github.com/Sigiitttt/proyek_kelompok_PAW.git"
    }, {
        id: 5,
        title: "Sistem Informasi Booking Pendakian Gunung Penanggungan",
        category: "web",
        image: "assets/proyek/proyek2.png",
        summary: "Platform reservasi pendakian berbasis sistem terdistribusi dengan manajemen kuota real-time dan e-Tiket otomatis.",
        description: "Sistem Informasi Booking Pendakian Gunung Penanggungan merupakan aplikasi fullstack berbasis arsitektur Client–Server yang dirancang untuk memodernisasi proses perizinan dan manajemen pendakian gunung. Frontend dibangun menggunakan React + Vite dan Tailwind CSS untuk menghadirkan antarmuka yang responsif dan interaktif, sementara Backend menggunakan Laravel REST API dengan database MySQL. Sistem ini mendukung pengecekan kuota pendakian secara real-time, pendaftaran booking online, pembuatan e-Tiket dalam format PDF, serta penyajian informasi cuaca dan SOP pendakian. Aplikasi ini juga dilengkapi Dashboard Admin komprehensif untuk verifikasi pembayaran, manajemen check-in dan check-out pendaki, serta sistem blacklist untuk meningkatkan keamanan dan kontrol operasional. Seluruh aplikasi dijalankan dalam lingkungan Docker multi-service sehingga mudah di-setup dan konsisten di berbagai environment tanpa perlu instalasi PHP, Composer, maupun Node.js secara lokal.",
        tech: [
            "Laravel REST API (PHP 8.3)",
            "MySQL 8",
            "React + Vite",
            "Tailwind CSS",
            "Docker (Multi-Container)",
            "phpMyAdmin"
        ],
        linkDemo: "#",
        linkGithub: "https://github.com/Sigiitttt"
    },
    {
        id: 6,
        title: "Aplikasi Web Perpustakaan Kampus",
        category: "web",
        image: "assets/proyek/image2.png",
        summary: "Sistem informasi perpustakaan berbasis web untuk mengelola buku, anggota, dan transaksi peminjaman dengan penerapan konsep Basis Data tingkat lanjut.",
        description: "Aplikasi Web Perpustakaan Kampus merupakan proyek tugas akhir mata kuliah Basis Data 2 yang dibangun menggunakan Laravel dan Filament. Sistem ini mendukung dua peran utama, yaitu pengguna (mahasiswa/dosen) dan admin perpustakaan. Pengguna dapat mencari buku, melihat detail koleksi, melakukan peminjaman, serta memantau riwayat dan status pinjaman. Admin memiliki panel khusus untuk mengelola data anggota, buku, kategori, rak, transaksi peminjaman dan pengembalian, serta menghasilkan laporan interaktif dan PDF. Proyek ini mengimplementasikan konsep basis data lanjutan seperti Stored Procedure untuk proses pengembalian dan perhitungan denda, Trigger untuk otomatisasi stok buku, View untuk penyederhanaan query riwayat peminjaman, serta Cursor untuk pembaruan denda keterlambatan secara otomatis.",
        tech: [
            "Laravel 11",
            "PHP 8.3",
            "MySQL",
            "Filament 3",
            "Tailwind CSS",
            "Alpine.js"
        ],
        linkDemo: "#",
        linkGithub: "https://github.com/Sigiitttt/"
    },
    {
        id: 7,
        title: "Game Ular Tangga 2D/3D Berbasis OpenGL",
        category: "game",
        image: "assets/proyek/image3.png",
        summary: "Game papan klasik Ular Tangga dengan mode 2D dan 3D interaktif menggunakan C++ dan OpenGL.",
        description: "Game Ular Tangga 2D/3D merupakan implementasi permainan papan klasik yang dikembangkan menggunakan bahasa C++ dengan library OpenGL/GLUT. Game ini mendukung mode dua pemain dengan sistem giliran, mekanisme dadu, serta aturan ular dan tangga yang lengkap. Keunikan utama proyek ini terletak pada kemampuannya untuk beralih antara tampilan 2D (top-view) dan perspektif 3D yang lebih imersif. Dalam mode 3D, pemain dapat memutar kamera papan permainan serta mengontrol objek observer secara terpisah untuk mengeksplorasi lingkungan permainan. Proyek ini bertujuan untuk memperkenalkan konsep dasar computer graphics, transformasi objek, pengelolaan kamera, dan interaksi input keyboard dalam OpenGL.",
        tech: [
            "C++",
            "OpenGL",
            "GLUT",
            "Computer Graphics",
            "Keyboard Input Handling"
        ],
        linkDemo: "#",
        linkGithub: "https://github.com/Sigiitttt"
    },
    {
        id: 8,
        title: "Aplikasi Pembayaran SPP Sekolah",
        category: "web",
        image: "assets/proyek/img4.png",
        summary: "Sistem pembayaran SPP berbasis web dengan integrasi payment gateway dan manajemen tagihan siswa.",
        description: "Aplikasi Pembayaran SPP Sekolah merupakan aplikasi web yang dirancang untuk membantu sekolah dalam mengelola tagihan dan pembayaran SPP secara digital. Aplikasi ini memiliki dua peran utama, yaitu Siswa dan Admin. Siswa dapat melihat daftar tagihan, melakukan pembayaran secara online melalui Midtrans, serta memantau riwayat pembayaran. Admin memiliki dashboard modern dengan dukungan tema gelap dan terang untuk mengelola data siswa, jenis tagihan, serta menetapkan tagihan ke masing-masing siswa. Sistem ini juga dilengkapi dengan manajemen sesi yang aman, pengelolaan status pembayaran (Lunas/Belum Lunas), serta antarmuka modern dengan efek glassmorphism dan latar belakang gradien animatif.",
        tech: [
            "PHP",
            "MySQL",
            "HTML",
            "CSS (CSS Variables)",
            "JavaScript",
            "Midtrans Payment Gateway"
        ],
        linkDemo: "#",
        linkGithub: "https://github.com/Sigiitttt/"
    },
    {
        id: 9,
        title: "Distributed Retail POS System (Offline-First)",
        category: "web",
        image: "assets/proyek/img5.png",
        summary: "Sistem POS retail terdistribusi berbasis Offline-First untuk operasional multi-cabang dengan jaringan tidak stabil.",
        description: "Distributed Retail POS System merupakan sistem Point of Sale (POS) terdistribusi yang dirancang untuk lingkungan retail multi-cabang dengan keterbatasan koneksi internet. Sistem ini menerapkan arsitektur Offline-First, memungkinkan kasir cabang tetap melakukan transaksi menggunakan database lokal meskipun koneksi ke server pusat terputus. Sinkronisasi data dilakukan secara dua arah melalui RESTful API, meliputi pull master data (produk, harga, stok) dan push laporan transaksi secara batch ke server pusat. Sistem ini menerapkan prinsip Availability dan Partition Tolerance (AP) pada Teorema CAP dengan pendekatan eventual consistency. Server pusat berperan sebagai Master Node untuk pengelolaan stok global, laporan, dan pricing dinamis, sementara client cabang bertindak sebagai Replica Node operasional. Proyek ini juga memanfaatkan Ngrok sebagai tunneling HTTPS untuk simulasi komunikasi lintas jaringan pada lingkungan lokal.",
        tech: [
            "PHP Native (PDO)",
            "MySQL / MariaDB",
            "RESTful API (JSON)",
            "Bootstrap 5",
            "Chart.js",
            "Ngrok",
            "Offline-First Architecture"
        ],
        linkDemo: "#",
        linkGithub: "https://github.com/Sigiitttt/proyek_akhir_sister-toko_retail"
    },
    {
        id: 10,
        title: "Sistem Deteksi Suara 'Buka' dan 'Tutup'",
        category: "data",
        image: "assets/proyek/img6.png",
        summary: "Sistem klasifikasi perintah suara berbasis machine learning dengan antarmuka web menggunakan Streamlit.",
        description: "Sistem Deteksi Suara 'Buka' dan 'Tutup' merupakan proyek machine learning berbasis audio yang dirancang untuk mengenali dua perintah suara sederhana secara speaker-dependent. Sistem ini dibangun menggunakan Python dengan pendekatan ekstraksi fitur audio yang mencakup fitur spectral (MFCC, Mel Spectrogram, Spectral Centroid, Bandwidth, Contrast), fitur temporal (Zero Crossing Rate, Energy), serta fitur statistik (mean, standar deviasi, skewness). Seluruh fitur digabungkan menjadi vektor fitur untuk melatih model Random Forest Classifier. Model yang telah dilatih disimpan dalam file .pkl dan diintegrasikan ke dalam aplikasi web berbasis Streamlit, yang memungkinkan pengguna melakukan prediksi melalui unggah file audio (.wav) maupun rekaman suara langsung melalui browser. Sistem ini dioptimalkan untuk mengenali suara pemilik dataset, sehingga performanya bersifat speaker-dependent.",
        tech: [
            "Python",
            "Machine Learning",
            "Audio Signal Processing",
            "Random Forest Classifier",
            "Librosa",
            "NumPy",
            "Streamlit"
        ],
        linkDemo: "#",
        linkGithub: "https://github.com/Sigiitttt/sistem-deteksi-suara-buka-tutup"
    },
    {
        id: 11,
        title: "Sistem Prediksi Konsentrasi NO₂ Berbasis Web",
        category: "data",
        image: "assets/proyek/prediksi-no2.png",
        summary: "Aplikasi web berbasis Streamlit untuk memprediksi konsentrasi NO₂ menggunakan model time series (Lag 10).",
        description: "Sistem Prediksi Konsentrasi NO₂ Berbasis Web merupakan aplikasi machine learning yang dirancang untuk memprediksi tingkat polusi udara Nitrogen Dioksida (NO₂) berdasarkan data historis time series. Aplikasi ini menggunakan pendekatan lag 10, yaitu memanfaatkan 10 data NO₂ terakhir sebagai input untuk memprediksi konsentrasi beberapa hari ke depan. Model yang digunakan adalah K-Nearest Neighbors (KNN) Regressor dengan preprocessing data menggunakan MinMaxScaler. Aplikasi dikembangkan menggunakan Streamlit sehingga pengguna dapat memasukkan data NO₂ secara interaktif, melihat hasil prediksi multi-hari, visualisasi grafik, serta kategori kualitas udara otomatis (Baik, Sedang, Tidak Sehat, dan Sangat Tidak Sehat). Proyek ini dibuat sebagai bagian dari studi prediksi kualitas udara dan penerapan machine learning pada data time series.",
        tech: [
            "Python",
            "Machine Learning",
            "Time Series Forecasting",
            "KNN Regressor",
            "scikit-learn",
            "Streamlit",
            "NumPy",
            "Pandas"
        ],
        linkDemo: "https://sigiitttt-sistem-prediksi-no2-berbasis-web-app-streamlit-1tbarx.streamlit.app/",
        linkGithub: "https://github.com/Sigiitttt/sistem-prediksi-NO2-berbasis-web"
    }


];

// 2. Fungsi Render Grid Project
const projectsGrid = document.getElementById('projects-grid');

function renderProjects(filter = 'all') {
    projectsGrid.innerHTML = ''; // Bersihkan grid

    const filtered = filter === 'all'
        ? projectsData
        : projectsData.filter(p => p.category === filter);

    filtered.forEach(project => {
        // Buat HTML card string
        const cardHTML = `
            <article class="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl hover:shadow-gray-200/50 hover:-translate-y-1 transition-all duration-300 cursor-pointer" onclick="openModal(${project.id})">
                <div class="h-56 overflow-hidden bg-gray-100 relative">
                    <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500">
                    
                    <div class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span class="bg-white/90 backdrop-blur px-4 py-2 rounded-full text-sm font-bold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            View Details
                        </span>
                    </div>
                </div>
                <div class="p-6">
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-[10px] font-bold tracking-wider text-blue-600 bg-blue-50 uppercase px-2 py-1 rounded border border-blue-100">
                            ${project.category.toUpperCase()}
                        </span>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">${project.title}</h3>
                    <p class="text-gray-500 text-sm line-clamp-2">${project.summary}</p>
                    
                    <div class="mt-4 flex flex-wrap gap-2">
                        ${project.tech.slice(0, 3).map(t => `<span class="text-xs text-gray-500 bg-gray-50 border border-gray-100 px-2 py-1 rounded">${t}</span>`).join('')}
                    </div>
                </div>
            </article>
        `;
        projectsGrid.innerHTML += cardHTML;
    });

    // Re-trigger animasi reveal jika perlu (opsional)
}

// 3. Fungsi Filter Button Active State
function filterProjects(category) {
    // Update tombol active style
    document.querySelectorAll('.filter-btn').forEach(btn => {
        if (btn.dataset.filter === category) {
            btn.classList.remove('bg-white', 'text-gray-600');
            btn.classList.add('bg-gray-900', 'text-white');
        } else {
            btn.classList.add('bg-white', 'text-gray-600');
            btn.classList.remove('bg-gray-900', 'text-white');
        }
    });

    renderProjects(category);
}

// 4. Modal Logic
const modal = document.getElementById('project-modal');
const modalBody = document.getElementById('modal-body');
const modalContainer = document.getElementById('modal-content-container');

// Ganti fungsi openModal yang lama dengan yang ini
function openModal(id) {
    const project = projectsData.find(p => p.id === id);
    if (!project) return;

    // Isi konten modal dengan Layout Persegi Panjang (Cinematic)
    modalBody.innerHTML = `
        <div class="flex flex-col md:flex-row h-auto md:h-[600px]"> 
            
            <div class="w-full md:w-[60%] h-64 md:h-full bg-gray-100 relative group">
                 <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover">
                 <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
                 
                 <div class="absolute bottom-6 left-6">
                    <span class="text-xs font-bold tracking-wider text-white bg-white/20 backdrop-blur border border-white/30 uppercase px-3 py-1 rounded-full">
                        ${project.category} Project
                    </span>
                 </div>
            </div>

            <div class="w-full md:w-[40%] p-8 md:p-10 bg-white flex flex-col overflow-y-auto custom-scrollbar">
                
                <h3 class="text-3xl font-bold text-gray-900 mb-2 leading-tight">${project.title}</h3>
                <p class="text-sm text-gray-500 font-medium mb-6 border-b border-gray-100 pb-4">${project.summary}</p>
                
                <div class="prose prose-sm text-gray-600 mb-8 flex-grow leading-relaxed">
                    <p>${project.description}</p>
                </div>
                
                <div class="mb-8">
                    <h4 class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Technology Used</h4>
                    <div class="flex flex-wrap gap-2">
                        ${project.tech.map(t => `<span class="px-3 py-1 rounded-md bg-gray-50 text-gray-600 text-xs font-semibold border border-gray-200">${t}</span>`).join('')}
                    </div>
                </div>

                <div class="flex gap-3 mt-auto pt-6 border-t border-gray-100">
                    ${project.linkDemo ? `
                    <a href="${project.linkDemo}" target="_blank" class="flex-1 text-center bg-gray-900 hover:bg-blue-600 text-white font-medium text-sm py-3 rounded-xl transition-all shadow-lg hover:shadow-blue-600/20 flex items-center justify-center gap-2">
                        Live Demo <i class="ph-bold ph-arrow-up-right"></i>
                    </a>` : ''}
                    
                    <a href="${project.linkGithub}" target="_blank" class="flex-1 text-center border border-gray-200 hover:border-gray-900 hover:text-gray-900 text-gray-600 font-medium text-sm py-3 rounded-xl transition-all flex items-center justify-center gap-2 bg-white">
                        <i class="devicon-github-original"></i> Repository
                    </a>
                </div>
            </div>
        </div>
    `;

    // Tampilkan modal
    modal.classList.remove('opacity-0', 'pointer-events-none');
    modalContainer.classList.remove('scale-95');
    modalContainer.classList.add('scale-100');
    document.body.style.overflow = 'hidden'; // Stop scroll halaman belakang
}

function closeModal() {
    modal.classList.add('opacity-0', 'pointer-events-none');
    modalContainer.classList.remove('scale-100');
    modalContainer.classList.add('scale-95');
    document.body.style.overflow = 'auto'; // Enable scroll
}

// Close on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderProjects('all');
});