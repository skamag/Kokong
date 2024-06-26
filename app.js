let isToggle = false

const burger = document.querySelector('.burger');
const nav = document.querySelector('.navLinks');
const navLinks = document.querySelectorAll('.navLinks li');
const navText = document.querySelectorAll('.navLinks li a');

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    
    navText.forEach((text)=>{
        text.classList.toggle('.disBlock');
    })

    if(!isToggle) { 
        isToggle = true
    } else {
        isToggle = false
    }

    navLinks.forEach((link)=>{
        if(link.style.animation){
            link.style.animation = '';
        } else {
            link.style.animation = 'navLinkFade 1.5s ease forwards';
        }
    });

    burger.classList.toggle('toggle');
});