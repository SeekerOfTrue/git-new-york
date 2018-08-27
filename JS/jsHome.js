

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


// Stars box
let modal = document.getElementById('simpleModal');
let modalBtn = document.getElementById('modalBtn');
let closeBtn = document.getElementsByClassName('closeBtn')[0];

modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

function openModal(){
  modal.style.display = 'block';
}

function closeModal(){
  modal.style.display = 'none';
}

function outsideClick(e){
  if(e.target == modal){
    modal.style.display = 'none';
  }
};



//window.scrollTo(x,y)
	let scrolled;
	let timer;

	document.getElementById('up').onclick = function(){
		scrolled = window.pageYOffset;
		scrollToTop();
	}
	function scrollToTop(){
		if (scrolled > 0) {
			window.scrollTo(0, scrolled);
			scrolled = scrolled - 50; 
			timer = setTimeout(scrollToTop, 5);
		}
		else {
			clearTimeout(timer);
			window.scrollTo(0,0);
		}
	};


 AOS.init();


// Slides Show

let slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
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
};


