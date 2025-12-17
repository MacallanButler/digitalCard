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

function flipCard(direction) {
  if (isFlipped) {
    // If already flipped (on back), flip back to front
    card.classList.remove('flip-left', 'flip-right');
    isFlipped = false;
    
    // Restart pulses after a delay
    setTimeout(() => {
      pulseLeft.classList.add('active');
      pulseRight.classList.add('active');
    }, 6000);
    
    return;
  }
  
  // Flip to back
  card.classList.remove('flip-left', 'flip-right');
  
  if (direction === 'left') {
    card.classList.add('flip-left');
  } else {
    card.classList.add('flip-right');
  }
  
  isFlipped = true;
  
  // Hide pulses after flip
  pulseLeft.classList.remove('active');
  pulseRight.classList.remove('active');
}

// Click zones for flipping (works on both front and back)
card.addEventListener('click', (e) => {
  // Don't flip if clicking on links
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