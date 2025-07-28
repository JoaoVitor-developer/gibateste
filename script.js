
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});

const cards = document.querySelectorAll('.servico-card');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('show');
  });
}, { threshold: 0.1 });
cards.forEach(card => observer.observe(card));

const topBtn = document.getElementById('topBtn');
window.addEventListener('scroll', () => {
  topBtn.classList.toggle('show', window.scrollY > 300);
});
topBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
