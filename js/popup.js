let buttonDesktop = document.querySelector('.button_sign_up')
let button = document.querySelector('.burger__button')
let popup = document.querySelector('.popup')
let close = document.querySelector('.popup__close')


function activePopupDesktop(event) {
    popup.classList.toggle('active')
    document.body.classList.toggle('lock')
}

function activePopupMobile(event) {
    popup.classList.toggle('active')
}


buttonDesktop.onclick = activePopupDesktop;
button.onclick = activePopupMobile;




let burgerActive= document.querySelector('.burger')

close.onclick = function (event) {
    popup.classList.toggle('active')
    if(!burgerActive.classList.contains('active')){
        document.body.classList.toggle('lock')
    }
}