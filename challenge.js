const btnMobile = document.getElementsByClassName('.a1');

function toggleMenu() {
    const nav = document.getElementsByClassName('.nav');
    nav.classList.toggle('active');
}

btnMobile.addEvetListener('click', toggleMenu);