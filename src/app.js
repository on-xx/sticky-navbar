window.addEventListener("scroll", () => {
    let navbar = document.querySelector('nav');
    navbar.classList.toggle('scrolled', window.scrollY > 50);
})