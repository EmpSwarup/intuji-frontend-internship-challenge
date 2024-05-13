// To get FAQ cards
const faqCards = document.querySelectorAll('.faq-card');

// To hide and show FAQ cards
faqCards.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('clicked');
  });
});

// For menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const menuIcon = document.querySelector('.menu-icon');
  const navbarContainer = document.querySelector('.navbar-container');

  menuIcon.addEventListener('click', function() {
    navbarContainer.classList.toggle('show-nav');
  });
});