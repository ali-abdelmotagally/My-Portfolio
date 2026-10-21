const nav = document.querySelector(".nav");
const menuBtn = document.querySelector(".menu-btn");
const scrollUp = document.querySelector(".scroll-up");
 
 
/* ---------- Navbar menu ---------- */
function setMenu(open) {
    nav.classList.toggle("menu-open", open);
    menuBtn.textContent = open ? "✕" : "☰";
    menuBtn.setAttribute("aria-expanded", open);
}
 
menuBtn.addEventListener("click", () => {
    setMenu(!nav.classList.contains("menu-open"));
});
 
// close the menu after picking a link
nav.querySelectorAll(".items a").forEach(link => {
    link.addEventListener("click", () => setMenu(false));
});
 
 
/* ---------- Scroll behaviour (navbar + scroll-up button) ---------- */
function onScroll() {
    const scrolled = window.scrollY > 100;
 
    nav.classList.toggle("scrolled", scrolled);
    scrollUp.classList.toggle("show", scrolled);
 
    if (!scrolled) setMenu(false);
}
 
window.addEventListener("scroll", onScroll, { passive: true });
onScroll(); // run once so a refreshed, already-scrolled page starts in the right state
 
scrollUp.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
 
 
/* ---------- Skill accordions: your original code, untouched ---------- */
  const items = document.querySelectorAll('.acc-item');
 
  items.forEach(item => {
    const trigger = item.querySelector('.acc-trigger');
 
    trigger.addEventListener('click', () => {
      const willOpen = !item.classList.contains('is-open');
 
      // close every item first, so opening one cancels the other
      items.forEach(i => {
        i.classList.remove('is-open');
        i.querySelector('.acc-trigger').setAttribute('aria-expanded', 'false');
      });
 
      // then open the clicked one (unless it was already open, which just closes it)
      if (willOpen) {
        item.classList.add('is-open');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
  });