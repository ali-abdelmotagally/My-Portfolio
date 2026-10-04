const nav = document.querySelector(".nav");
const menuBtn = document.querySelector(".menu-btn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
        nav.classList.remove("menu-open");
        menuBtn.textContent = "☰";
    }
});

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("menu-open");

    if (nav.classList.contains("menu-open")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }
});


// scroll-up btn:
const scrollUp = document.querySelector('.scroll-up')

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        scrollUp.style.display = 'block';
    } else {
        scrollUp.style.display = 'none';
    }
});

scrollUp.addEventListener("click", ()=>{
    window.scrollTo({
        'top' : 0,
        'behavior' : 'smooth'
    })
});
