// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Highlight active navigation link based on scroll position
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
    let current = "";
    sections.forEach(section => {
        // Adjust offset to account for fixed header
        const sectionTop = section.offsetTop - (document.querySelector('nav').offsetHeight + 20); // Add some buffer
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// Set initial active link on page load
window.addEventListener('load', () => {
    const currentHash = window.location.hash;
    if (currentHash) {
        const targetSection = document.querySelector(currentHash);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === currentHash) {
                    link.classList.add('active');
                }
            });
        }
    } else {
        // If no hash, default to 'inicio' or first section
        const firstNavLink = document.querySelector('nav a[href="#inicio"]');
        if (firstNavLink) {
            firstNavLink.classList.add('active');
        }
    }
});