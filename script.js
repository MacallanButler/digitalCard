// ===========================
// DOM Elements
// ===========================
const card = document.getElementById('businessCard');
const pulseLeft = document.querySelector('.pulse-left');
const pulseRight = document.querySelector('.pulse-right');

// ===========================
// Pulse Animation (6 second delay)
// ===========================
setTimeout(() => {
  pulseLeft.classList.add('active');
  pulseRight.classList.add('active');
}, 6000);

// ===========================
// Card Flip Logic
// ===========================
let isFlipped = false;
let hasFlipped = false;

function flipCard(direction) {
  if (isFlipped) {
    card.classList.remove('flip-left', 'flip-right');
    isFlipped = false;
    return;
  }
  
  card.classList.remove('flip-left', 'flip-right');
  
  if (direction === 'left') {
    card.classList.add('flip-left');
  } else {
    card.classList.add('flip-right');
  }
  
  isFlipped = true;
  hasFlipped = true;
  
  pulseLeft.classList.remove('active');
  pulseRight.classList.remove('active');
}

// Click zones for flipping
card.addEventListener('click', (e) => {
  if (e.target.closest('a')) {
    return;
  }
  
  const rect = card.getBoundingClientRect();
  const clickX = e.clientX - rect.left;
  const cardWidth = rect.width;
  
  if (clickX < cardWidth / 2) {
    flipCard('left');
  } else {
    flipCard('right');
  }
});