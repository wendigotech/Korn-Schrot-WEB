// Back to top button

const backToTopBtn = document.getElementById('back-to-top-btn');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Navbar on scroll animation
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        nav.style.top = '0';
    } else {
        nav.style.top = '2rem';
    }
});

// Show recipe on click

const button = document.getElementById('show-figcaption');
        const figcaption = document.getElementById('recipe-figcaption');
        button.addEventListener('click', () => {
            if (figcaption.classList.contains('hidden')) {
                figcaption.classList.remove('hidden');
                button.textContent = 'Rezept ausblenden';
                
            } else {
                figcaption.classList.add('hidden');
                button.textContent = 'Rezept anzeigen';
            }
            
        });

        const button2 = document.getElementById('show-figcaption-2');
        const figcaption2 = document.getElementById('recipe-figcaption-2');
        button2.addEventListener('click', () => {
            if (figcaption2.classList.contains('hidden')) {
                figcaption2.classList.remove('hidden');
                button2.textContent = 'Rezept ausblenden';
                
            } else {
                figcaption2.classList.add('hidden');
                button2.textContent = 'Rezept anzeigen';
            }
            
        });

        const button3 = document.getElementById('show-figcaption-3');
        const figcaption3 = document.getElementById('recipe-figcaption-3');
        button3.addEventListener('click', () => {
            if (figcaption3.classList.contains('hidden')) {
                figcaption3.classList.remove('hidden');
                button3.textContent = 'Rezept ausblenden';
                
            } else {
                figcaption3.classList.add('hidden');
                button3.textContent = 'Rezept anzeigen';
            }
            
        });