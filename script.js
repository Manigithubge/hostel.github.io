const menuBtn = document.querySelector(".fa-bars");
const closeBtn =document.querySelector(".fa-close");
const navbar = document.querySelector(".navbar");
const navItems= document.querySelectorAll(".nav-items li");
const navItem = document.querySelector(".nav-items")

menuBtn.addEventListener("click",()=>{
    navbar.classList.add("active");
});

closeBtn.addEventListener("click",()=>{
    navbar.classList.remove("active");
});

navItems.forEach((navbar) => {
    navItem.addEventListener("click",()=>{
        navbar.classList.remove("active");
    });
});

