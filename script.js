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
  'NXR vs Team Alpha — LIVE',
  'NXR vs NightRaiders — 7:30 PM',
  'NXR vs ShadowClan — Tomorrow'
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

// HAMBURGER MENU

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {

navLinks.classList.toggle("active");

});


// SIMPLE SCROLL ANIMATION

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.style.opacity = 1;
entry.target.style.transform = "translateY(0px)";

}

});

});

sections.forEach(section => {

section.style.opacity = 0;
section.style.transform = "translateY(40px)";
section.style.transition = "1s";

observer.observe(section);

});
