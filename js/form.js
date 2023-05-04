
document.addEventListener('DOMContentLoaded', function (event) {
    let form = document.getElementById('form')
    form.addEventListener('submit', formSend)

    async function formSend(event) {
        event.preventDefault();
        let error = formValidate(form);

    }

    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll('._req')
        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index]
            formRemoveError(input)
            if (input.classList.contains('_email')) {
                if (emailTest(input)) {
                    formAddError(input)
                    error++
                }
            }
            if (input.classList.contains('_phone')) {
                if (phoneTest(input)) {
                    formAddError(input)
                    error++
                }
            }


        }
    }

    function formAddError(input) {
        input.classList.add('_error')
    }

    function formRemoveError(input) {
        input.classList.remove('_error')
    }

    function emailTest(input) {
        return !/^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(input.value);
    }

    function phoneTest(input) {
        return !/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(input.value);
    }
})