const closeBtn = document.querySelector('.header__close .header__icon')
const openBtn = document.querySelector('.header__open .header__icon')
const headerNav = document.querySelector(".header__nav")

openBtn.addEventListener('click', () =>{
    headerNav.style.width = "70%";
    headerNav.style.display = "block";
})


closeBtn.addEventListener('click', () => headerNav.style.display = "none")