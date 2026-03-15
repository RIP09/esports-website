// ============================
// NxR ESPORTS MAIN SCRIPT
// ============================

// Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCfFftuGwAibm6kBLFGazE1TDAtrq_OqGA",
  authDomain: "nxr-esports-707c7.firebaseapp.com",
  projectId: "nxr-esports-707c7",
  storageBucket: "nxr-esports-707c7.firebasestorage.app",
  messagingSenderId: "727264849443",
  appId: "1:727264849443:web:489eff2f85f8e4865d4b96"
};

if (typeof initializeApp !== "undefined") {
  initializeApp(firebaseConfig);
}

// ============================
// MATCH TICKER
// ============================

const matches = [
  "NxR vs Team Alpha — LIVE",
  "NxR vs NightRaiders — 7:30 PM",
  "NxR vs ShadowClan — Tomorrow"
];

const ticker = document.getElementById("ticker");

if (ticker) {
  ticker.innerHTML = matches.join(" ✦ ");
}

// ============================
// SHOP CART
// ============================

let cart = [];

function addToCart(name, price) {
  cart.push({ name, price });
  renderCart();
}

function renderCart() {
  const el = document.getElementById("cart");

  if (!el) return;

  let total = 0;
  el.innerHTML = "";

  cart.forEach(item => {
    total += item.price;
    el.innerHTML += `<p>${item.name} — ₹${item.price}</p>`;
  });

  el.innerHTML += `<hr><h3>Total: ₹${total}</h3>`;
}

// ============================
// MOBILE MENU
// ============================

document.addEventListener("DOMContentLoaded", () => {

  const hamburger = document.querySelector(".hamburger");
  const mobileMenu = document.querySelector(".mobile-menu");
  const overlay = document.querySelector(".overlay");

  if (!hamburger || !mobileMenu || !overlay) return;

  hamburger.addEventListener("click", () => {

    mobileMenu.classList.toggle("active");
    overlay.classList.toggle("active");
    hamburger.classList.toggle("toggle");

  });

  overlay.addEventListener("click", () => {

    mobileMenu.classList.remove("active");
    overlay.classList.remove("active");
    hamburger.classList.remove("toggle");

  });

  // Close menu when clicking links
  document.querySelectorAll(".mobile-menu a").forEach(link => {

    link.addEventListener("click", () => {

      mobileMenu.classList.remove("active");
      overlay.classList.remove("active");
      hamburger.classList.remove("toggle");

    });

  });

});

// ============================
// SCROLL ANIMATION
// ============================

const cards = document.querySelectorAll(".card");

if (cards.length) {

  const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";

      }

    });

  });

  cards.forEach(card => {

    card.style.opacity = 0;
    card.style.transform = "translateY(40px)";
    card.style.transition = "0.6s";

    observer.observe(card);

  });

}
