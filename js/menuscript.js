const hamburguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".elementos_menu_principal");

hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle('active');
    navMenu.classList.toggle('active');
})