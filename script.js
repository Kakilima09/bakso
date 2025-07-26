document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navMenu = document.getElementById('nav-menu');
    const menuIcon = document.getElementById('menu-icon');
    
    // Pastikan elemen ditemukan
    if (mobileMenuBtn && navMenu && menuIcon) {
        mobileMenuBtn.addEventListener('click', function(e) {
            e.stopPropagation(); // Mencegah event bubbling
            navMenu.classList.toggle('show');
            
            // Ganti ikon
            if (navMenu.classList.contains('show')) {
                menuIcon.classList.remove('fa-bars');
                menuIcon.classList.add('fa-times');
            } else {
                menuIcon.classList.remove('fa-times');
                menuIcon.classList.add('fa-bars');
            }
        });

        // Tutup menu ketika mengklik di luar
        document.addEventListener('click', function(e) {
            if (!navMenu.contains(e.target)) {
                navMenu.classList.remove('show');
                menuIcon.classList.remove('fa-times');
                menuIcon.classList.add('fa-bars');
            }
        });

        // Tutup menu ketika memilih item
        const navLinks = document.querySelectorAll('#nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('show');
                menuIcon.classList.remove('fa-times');
                menuIcon.classList.add('fa-bars');
            });
        });
    } else {
        console.error('Elemen menu tidak ditemukan');
    }
});