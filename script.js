let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let videoBtn = document.querySelectorAll('.vid-btn');

window.onscroll = () =>{

    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
}

searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

videoBtn.forEach(btn => {
    btn.addEventListener('click', ()=>{
     document.querySelector('.controls .active').classList.remove('active');
     btn.classList.add('active');
     let src = btn.getAttribute('data-src');
     document.querySelector('#video-slider').src = src; 
    });
});

$(document).ready(function(){
   $('#login-btn').click(function(){
   $('.login-form-container').addClass('active')
   });
   $('#form-close').click(function(){
   $('.login-form-container').removeClass('active')
   });

   $('#menu_bar').click(function(){
    $('#menu_bar').toggleClass('fa-times')
    $('header .navbar').toggleClass('active')
   });
   
});
var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640:{
            slidesPerView: 1,
        },
        768:{
            slidesPerView: 2,
        },
        1024:{
            slidesPerView: 3,
        }
    }

});