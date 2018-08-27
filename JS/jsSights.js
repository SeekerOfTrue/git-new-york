

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


//Slider Broadway

 document.getElementById("iconArrow").onclick = sliderLeft;
 var leftNext = 0;
 var timerSliderIcon;
  
function sliderLeft() {
   var row = document.getElementById("rowSlider");
   leftNext = leftNext - 430;
   if (leftNext < -2580) {
     leftNext = 0;
     
   }
   row.style.left = leftNext + "px";
  };
 
 
 
 //More or Less Text
 
 let showText = document.getElementById("showText");
 let buttomEmpire = document.getElementById("buttomEmpire");
 
 buttomEmpire.onclick = function() {
   if(showText.className =="moreText"){
     showText.className = ""; 
     buttomEmpire.innerHTML="Show More";
   } else{
     showText.className = "moreText";
     buttomEmpire.innerHTML="Show Less";
   }
 };
 
 
 //Comper Img
 
 document.querySelector('.empImg').onmousemove = function(event) {
   var cord = event.offsetX;
   document.querySelector('.changeSize').style.width = cord + 'px';
 }
 
 document.querySelector('.empImg').onmouseleave = function(event) { 
   document.querySelector('.changeSize').style.width = '500px';
 }

