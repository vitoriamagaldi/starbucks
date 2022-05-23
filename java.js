function slide(anything){
    document.querySelector('.starbucks').src = anything
}
function circlecolor(color){
    const circle = document.querySelector('.circle');
    circle.style.background= color;
}

var menu = document.querySelector('#menu-btn');
var nav = document.querySelector('section .navbar');

menu.onclick = () =>{
    nav.classList.toggle('active');
    menu.classList.toggle('bx-x-circle');
}