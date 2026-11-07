const nav = document.querySelector(".nav");
const menuBtn = document.querySelector(".menu-btn");
 
 
function setMenu(open) {
    nav.classList.toggle("menu-open", open);
    menuBtn.textContent = open ? "✕" : "☰";
    menuBtn.setAttribute("aria-expanded", open);
}
 
menuBtn.addEventListener("click", () => {
    setMenu(!nav.classList.contains("menu-open"));
});
 

nav.querySelectorAll(".items a, .logo a").forEach(link => {
    link.addEventListener("click", () => setMenu(false));
});


// don't leave the menu stuck open after resizing/rotating to desktop width
window.addEventListener("resize", () => {
    if (window.innerWidth > 768) setMenu(false);
});
 
 

 const items = document.querySelectorAll('.acc-item');
const skills = document.querySelector('#skills');

items.forEach(item => {
    const trigger = item.querySelector('.acc-trigger');

    trigger.addEventListener('click', () => {
        const willOpen = !item.classList.contains('is-open');

        items.forEach(i => {
            i.classList.remove('is-open');
            i.querySelector('.acc-trigger')
                .setAttribute('aria-expanded', 'false');
        });

        if (willOpen) {
            item.classList.add('is-open');
            trigger.setAttribute('aria-expanded', 'true');
            skills.classList.add('has-open');
        } else {
            skills.classList.remove('has-open');
        }
    });
});