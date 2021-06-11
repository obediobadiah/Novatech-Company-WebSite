const menuBars = document.querySelector(".menu_bars");
const close = document.querySelector(".close");
const mainMenu = document.querySelector(".main_menu");

menuBars.addEventListener("click", ()=>{
    mainMenu.classList.toggle("show");
    menuBars.classList.toggle("hide");
});

close.addEventListener("click", ()=>{
    mainMenu.classList.toggle("show");
    menuBars.classList.toggle("hide");
});

var mybutton = document.getElementById("ScrollUp");

window.onscroll = function(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        mybutton.style.display = "block";
    }
    else{
        mybutton.style.display = "none";
    }
}

function topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}




//Slide show function

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("first-container");
  if (n > slides.length) {
      slideIndex = 1
    }

  if (n < 1) {
      slideIndex = slides.length
    }

  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "flex";
}


var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("first-container");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1
  }

  slides[slideIndex-1].style.display = "flex";
  setTimeout(showSlides, 5000);
}