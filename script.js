const nav = document.querySelector(".nav");
const menuBtn = document.querySelector(".menu-btn");
const scrollUp = document.querySelector(".scroll-up");
 
 
function setMenu(open) {
    nav.classList.toggle("menu-open", open);
    menuBtn.textContent = open ? "✕" : "☰";
    menuBtn.setAttribute("aria-expanded", open);
}
 
menuBtn.addEventListener("click", () => {
    setMenu(!nav.classList.contains("menu-open"));
});
 

nav.querySelectorAll(".items a").forEach(link => {
    link.addEventListener("click", () => setMenu(false));
});
 
 

function onScroll() {
    const scrolled = window.scrollY > 100;
 
    nav.classList.toggle("scrolled", scrolled);
    scrollUp.classList.toggle("show", scrolled);
 
    if (!scrolled) setMenu(false);
}
 
window.addEventListener("scroll", onScroll, { passive: true });
onScroll(); 
 
scrollUp.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
 
 

  const items = document.querySelectorAll('.acc-item');
 
  items.forEach(item => {
    const trigger = item.querySelector('.acc-trigger');
 
    trigger.addEventListener('click', () => {
      const willOpen = !item.classList.contains('is-open');

      items.forEach(i => {
        i.classList.remove('is-open');
        i.querySelector('.acc-trigger').setAttribute('aria-expanded', 'false');
      });

      if (willOpen) {
        item.classList.add('is-open');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
  });