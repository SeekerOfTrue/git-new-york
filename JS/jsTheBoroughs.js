

// Change Header
let check = document.querySelector('.inputDayNight');
let headerDay = document.querySelector('header');
let navbar = document.querySelector('nav');
let descrHeader = document.querySelector('.gridHeaderText');
let thecard = document.querySelector('.thecard');

check.addEventListener('click', () => {
  headerDay.classList.toggle('headerNight');
  descrHeader.classList.toggle('light');
  thecard.classList.toggle('lightBox');
  navbar.classList.toggle('navShadow');
});





 AOS.init();




//Slider on click Img

 var slideIndex = 1;
 showSlides(slideIndex);
 
 function plusSlides(n) {
   showSlides(slideIndex += n);
 }
 
 function currentSlide(n) {
   showSlides(slideIndex = n);
 }
 
 function showSlides(n) {
   var i;
   var slides = document.getElementsByClassName("mySlides");
   var dots = document.getElementsByClassName("demo");
   
   if (n > slides.length) {slideIndex = 1}
   if (n < 1) {slideIndex = slides.length}
   for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
   }
   for (i = 0; i < dots.length; i++) {
       dots[i].className = dots[i].className.replace(" active", "");
   }
   slides[slideIndex-1].style.display = "block";
   dots[slideIndex-1].className += " active";
   
 }


