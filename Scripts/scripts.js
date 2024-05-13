// For menu toggle
const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelector('.nav-link');

hamburger.addEventListener('click', () => {
  navLink.classList.toggle('hide');
});

// For testimonial carousel
const testimonialCards = document.querySelector('.testimonial-cards');
let startX = 0;
let isSwiping = false;
let scrollLeft = 0;
const cardWidth = testimonialCards.offsetWidth;
const transitionDuration = 100; // Adjust as needed

testimonialCards.addEventListener('touchstart', (e) => {
  isSwiping = true;
  startX = e.touches[0].clientX;
  scrollLeft = testimonialCards.scrollLeft;
});

testimonialCards.addEventListener('touchmove', (e) => {
  if (!isSwiping) return;
  const currentX = e.touches[0].clientX;
  const deltaX = startX - currentX;
  testimonialCards.scrollLeft = scrollLeft + deltaX;
});

testimonialCards.addEventListener('touchend', () => {
  isSwiping = false;
});

const testimonialControlLeft = document.querySelector('.testimonial-control-left');
const testimonialControlRight = document.querySelector('.testimonial-control-right');

testimonialControlLeft.addEventListener('click', () => {
  testimonialCards.style.scrollBehavior = 'smooth';
  setTimeout(() => {
    testimonialCards.scrollLeft -= cardWidth;
    testimonialCards.style.scrollBehavior = 'auto';
  }, transitionDuration);
});

testimonialControlRight.addEventListener('click', () => {
  testimonialCards.style.scrollBehavior = 'smooth';
  setTimeout(() => {
    testimonialCards.scrollLeft += cardWidth;
    testimonialCards.style.scrollBehavior = 'auto';
  }, transitionDuration);
});

// To get FAQ cards
const faqCards = document.querySelectorAll('.faq-card');

// To hide and show FAQ cards
faqCards.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('clicked');
  });
});