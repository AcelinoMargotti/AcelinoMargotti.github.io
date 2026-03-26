document.addEventListener('DOMContentLoaded', function() {
    // Animação de entrada das seções
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(section);
    });

    // Rolagem suave para os links de navegação
    document.querySelectorAll('.nav-links a, .mobile-nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            // Fecha o menu móvel (se estiver aberto) ao clicar em um link
            if (mobileNav.classList.contains('open')) {
                mobileNav.classList.remove('open');
            }

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Lógica do Menu Responsivo
    const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.close-icon');
    const mobileNav = document.querySelector('.mobile-nav-overlay');

    menuIcon.addEventListener('click', () => {
        mobileNav.classList.add('open');
    });

    closeIcon.addEventListener('click', () => {
        mobileNav.classList.remove('open');
    });
});