// Navbar glow effect
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');

  if (window.scrollY > 50) {
    header.style.boxShadow = '0 4px 20px rgba(0,180,255,0.5)';
  } else {
    header.style.boxShadow = '0 4px 10px rgba(0,0,0,0.4)';
  }
});


// Card animations
const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
});

cards.forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(30px)';
  card.style.transition = 'all 0.6s ease';

  observer.observe(card);
});
