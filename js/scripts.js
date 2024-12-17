
    //-- Social Links Hover Effect --
    // Modified script for social links hover effect
    const socialLinks = document.querySelectorAll('.social-link, .logo-link');
    
    socialLinks.forEach(link => {
        const circle = link.querySelector('.social-circle');
        const icon = link.querySelector('.social-icon');
        
        link.addEventListener('mousemove', (e) => {
            const rect = link.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            circle.style.left = x + 'px';
            circle.style.top = y + 'px';

            const centerX = 15;
            const centerY = 15;
            const offsetX = x - centerX;
            const offsetY = y - centerY;
            
            icon.style.setProperty('--x', `${offsetX}px`);
            icon.style.setProperty('--y', `${offsetY}px`);
        });

        link.addEventListener('mouseleave', () => {
            icon.style.setProperty('--x', '0px');
            icon.style.setProperty('--y', '0px');
        });
    });

    //-- Scroll To Top --
    // Seleksi tombol
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");

    // Event listener untuk mendeteksi scroll
    window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        // Tampilkan tombol jika scroll lebih dari 200px
        scrollToTopBtn.classList.add("show");
    } else {
        // Sembunyikan tombol jika scroll kurang dari 200px
        scrollToTopBtn.classList.remove("show");
    }
    });

    // Event listener untuk klik tombol
    scrollToTopBtn.addEventListener("click", () => {
    // Scroll ke atas dengan animasi halus
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
    });

    //-- Nav Bar --
    const navItems = document.querySelectorAll('.nav-item');

    function setActiveLink() {
        const sections = document.querySelectorAll('section');
        let scrollPos = window.scrollY || window.pageYOffset;

        sections.forEach(section => {
            if (section.offsetTop <= scrollPos && (section.offsetTop + section.offsetHeight) > scrollPos) {
                navItems.forEach(item => {
                    item.classList.remove('active');
                    if (item.getAttribute('href') === '#' + section.id) {
                        item.classList.add('active');
                    }
                });
            }
        });
    }

    function smoothScroll(event) {
        event.preventDefault(); // Prevent default anchor click behavior
        const targetId = this.getAttribute('href').substring(1); // Get target section id
        const targetSection = document.getElementById(targetId); // Find the target section

        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the target section
        }
    }

    navItems.forEach(item => {
        item.addEventListener('click', smoothScroll); // Attach smoothScroll function to each nav item
    });

    window.addEventListener('scroll', setActiveLink);

    //-- Audio --
    const audio = document.getElementById('backgroundAudio');
    const soundToggle = document.getElementById('soundToggle');
    const soundHighlight = document.getElementById('soundHighlight');
    audio.volume = 0.5;

    soundToggle.addEventListener('click', function() {
        if (audio.paused) {
            audio.play().catch(error => {
                console.log("Autoplay prevented:", error);
            });
            soundHighlight.textContent = 'On'; // Ubah teks menjadi Sound On
        } else {
            audio.pause();
            soundHighlight.textContent = 'Off'; // Ubah teks menjadi Sound Off
        }
    });

    // Tambahkan event listener untuk interaksi pengguna
    document.addEventListener('click', playAudio, { once: true });