const serviceCards = document.querySelector(".service-cards");
const cards = document.querySelectorAll(".card");

let cardWidth = cards[0].offsetWidth + 20; // card width + gap
let totalWidth = cardWidth * cards.length;

serviceCards.style.width = `${totalWidth}px`;

function animateCards() {
  serviceCards.style.transition = "transform 1s linear";
  serviceCards.style.transform = `translateX(-${cardWidth}px)`;

  setTimeout(() => {
    serviceCards.style.transition = "none";
    serviceCards.appendChild(serviceCards.firstElementChild);
    serviceCards.style.transform = "translateX(0)";
  }, 1000);
}

setInterval(animateCards, 2000);
