const firebaseConfig = {
    apiKey: "AIzaSyCfFftuGwAibm6kBLFGazE1TDAtrq_OqGA",
    authDomain: "nxr-esports-707c7.firebaseapp.com",
    projectId: "nxr-esports-707c7",
    storageBucket: "nxr-esports-707c7.firebasestorage.app",
    messagingSenderId: "727264849443",
    appId: "1:727264849443:web:489eff2f85f8e4865d4b96"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

const matches=[
  'NxR vs Team Alpha — LIVE',
  'NxR vs NightRaiders — 7:30 PM',
  'NxR vs ShadowClan — Tomorrow'
];
const ticker=document.getElementById('ticker');
if(ticker) ticker.innerHTML = matches.join(' ✦ ');

let cart=[];
function addToCart(name,price){
  cart.push({name,price});
  renderCart();
}
function renderCart(){
  const el=document.getElementById('cart');
  if(!el) return;
  let total=0; el.innerHTML='';
  cart.forEach(i=>{ total+=i.price; el.innerHTML+=`<p>${i.name} — ₹${i.price}</p>` });
  el.innerHTML+=`<hr><h3>Total: ₹${total}</h3>`;
}

const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");
const overlay = document.querySelector(".overlay");

hamburger.addEventListener("click", () => {

mobileMenu.classList.toggle("active");
overlay.classList.toggle("active");

});

/* CLOSE MENU */

overlay.addEventListener("click", () => {

mobileMenu.classList.remove("active");
overlay.classList.remove("active");

});

/* SCROLL ANIMATION */

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.style.opacity=1;
entry.target.style.transform="translateY(0)";

}

});

});

cards.forEach(card => {

card.style.opacity=0;
card.style.transform="translateY(40px)";
card.style.transition="0.6s";

observer.observe(card);

});
