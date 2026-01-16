/*
// Navbar 
const menu = document.querySelector('.menu')
const navList = document.querySelector('.nav-list')
const navbar = document.querySelector('.navbar')

menu.addEventListener('click', () => {
    menu.classList.toggle('change')     // hamburger → X
    navList.classList.toggle('change')  // show/hide nav links
})
// End of Navbar
document.querySelector('.home-link').addEventListener('click', e => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Close nav-list
  navList.classList.remove('change');
  menu.classList.remove('change');

});
*/
// Navbar
const menu = document.querySelector('.menu')
const navList = document.querySelector('.nav-list')

// Hamburger toggle
menu.addEventListener('click', () => {
    menu.classList.toggle('change')
    navList.classList.toggle('change')
})

// HOME scroll
document.querySelector('.home-link').addEventListener('click', e => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });

  navList.classList.remove('change')
  menu.classList.remove('change')
})

// Close other nav links
document.querySelectorAll('.nav-link:not(.home-link)').forEach(link => {
  link.addEventListener('click', () => {
    navList.classList.remove('change')
    menu.classList.remove('change')
  })
})

// Scroll animation for service cards
const serviceCards = document.querySelectorAll('.service-card');

const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

// ===== FOOTER - Auto Update Copyright Year =====
document.addEventListener('DOMContentLoaded', function() {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});


