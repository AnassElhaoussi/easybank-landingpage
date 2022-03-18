const navButton = document.querySelector(".nav-btn")
const menuLinks = document.querySelector(".links")
const links = document.querySelectorAll(".links")


navButton.addEventListener("click", () => {

    

    
    menuLinks.classList.toggle("isactive")
    menuLinks.style.animation = "navAnimation 0.3s ease"
})