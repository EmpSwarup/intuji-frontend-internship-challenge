// To get FAQ cards
const faqCards = document.querySelectorAll('.faq-card');

// To hide and show FAQ cards
faqCards.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('clicked');
  });
});