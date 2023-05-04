let burger = document.querySelector('.burger');
let menu_burger = document.querySelector('.burger-menu')

burger.onclick = function (event) {
    burger.classList.toggle('active')
    menu_burger.classList.toggle('active')
    document.body.classList.toggle('lock')
}

