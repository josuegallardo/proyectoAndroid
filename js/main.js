//Menu responsive
$("#icon-mobile").click(menu)
$(".menuMobile a").click(menuCerrar)
$(".cerrar").click(menuCerrar)
function menu(){
  $(".menuMobile").slideToggle();
  $("#icon-mobile").hide();
}
function menuCerrar(){
  $(".menuMobile").hide();
  $("#icon-mobile").show();
}
//Slider de imagenes
var slideIndex = 1;
showDivs(slideIndex);
var myIndex = 0;
carousel();
function plusDivs(n) {
  showDivs(slideIndex += n);
}
function currentDiv(n) {
  showDivs(slideIndex = n);
}
function showDivs(n) {
  var i;
  var x = $(".slides");
  var dots = $(".cajaSlide");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" goldSlider", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " goldSlider";
}
//Carrusel de fotos
function carousel() {
  var i;
  var x = $(".slides");
  var dots = $(".cajaSlide");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" goldSlider", "");
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";
  dots[myIndex-1].className += " goldSlider";
  setTimeout(carousel, 5000); // Carga cada 5 segundos
}