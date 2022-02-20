const cookie =document.querySelector('.div-cookie-message');
const ok = document.querySelector('.ok')

ok.addEventListener('click', () => {
    cookie.getElementsByClassName.display ='none';
});

let cookief = () => {
    if(!Cookies.get('hide-cookie')) {
        setTimeout(() => {
            cookie.getElementsByClassName.display = 'block';
        }, 1000)
    }

    Cookies.set('hide-cookie', 'true', {
        expires:15
    })
}

cookief();