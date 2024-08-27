const burger = document.querySelector('.header .nav-bar .nav-list .burger');
const myMenu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    myMenu.classList.toggle('active');
});

document.addEventListener('scroll',()=>{
    let scroll_position = window.scrollY;
    if(scroll_position > 250){
        header.style.backgroundColor = "rgba(0,0,0,0.35)";
    }else{
        header.style.backgroundColor = "transparent";
    }
}); 

menu_item.forEach(item => {
    item.addEventListener('click', () =>{
        burger.classList.toggle('active');
        myMenu.classList.toggle('active');
    })
});

