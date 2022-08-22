const burger = document.querySelector('.burger')
const burgerl = document.querySelector('.burger__line')
const navl = document.querySelector('.nav__list')


burger.addEventListener('click', function() {
    burger.classList.toggle('active')
    navl.classList.toggle('active')
})


