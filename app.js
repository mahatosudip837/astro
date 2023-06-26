let menuIcon = document.querySelector('.menu-icon');
let navbar = document.querySelector('.home-section');
let closeIcon = document.querySelector('.close');
let header = document.querySelector('.header');
let navfix = document.querySelector('.header-container');
let services = document.getElementById('#services');

menuIcon.addEventListener('click',()=>{
    navbar.classList.add('active');
    header.classList.add('z-index');

})
closeIcon.addEventListener('click',()=>{
    navbar.classList.remove('active');
    header.classList.remove('z-index');
})

window.onscroll = ()=>{
    navbar.classList.remove('active');
    navfix.classList.toggle('active',window.scrollY>50);
    header.classList.toggle('z-index',window.scrollY>350);
    services.classList.toggle('active',window.scrollY>350);
    

}

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        autoplay : true,
        autoplayTimeout : 1000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    })
});