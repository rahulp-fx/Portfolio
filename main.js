// Initialize Icons
lucide.createIcons();

// Reveal Animations on scroll
const reveal = () => {
  const reveals = document.querySelectorAll('.reveal');
  reveals.forEach(element => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 100;
    if (elementTop < windowHeight - elementVisible) {
      element.classList.add('active');
    }
  });
};

window.addEventListener('scroll', reveal);
window.addEventListener('load', reveal);

// Mobile Menu toggle

const menuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

const toggleMenu = () => {
  const isHidden = mobileMenu.style.display === 'none' || mobileMenu.style.display === '';
  mobileMenu.style.display = isHidden ? 'flex' : 'none';
  document.body.style.overflow = isHidden ? 'hidden' : 'auto';
};

menuBtn.addEventListener('click', toggleMenu);

// Sticky Nav Change
window.addEventListener('scroll', ()=> {
  const nav = document.getElementById('navbar');
  const navInner = nav.querySelector('.nav-inner');
  if(window.scrollY > 50) {
    nav.classList.add('glass');
    nav.style.borderBottom = '1px solid rgba(255,255,255,0.05)';
    navInner.style.padding = '0.75rem 0';
    nav.style.backgroundColor = 'rgba(10,10,10,0.9)';
  } else {
    nav.classList.remove('glass');
    nav.style.borderBottom = 'none';
    navInner.style.padding = '1rem 0';
    nav.style.backgroundColor = 'transparent';
  }
});