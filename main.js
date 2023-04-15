let userBox = document.querySelector('#userbox');
let login = document.querySelector('.login');
userBox.onclick=()=>{
 login.classList.toggle('active');
}

window.onscroll = () =>{
  login.classList.remove('active');
 
}







var swiper = new Swiper(".box-item", {
  slidesPerView: 3,
      centeredSlides: true,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      }, loop:true,
 navigation: {
  nextEl: "#swiper-button-next",
  prevEl: "#swiper-button-prev",
}
});

