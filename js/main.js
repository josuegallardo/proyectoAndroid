//Menu responsive
$("#icon-mobile").click(menu)
$(".menuMobile li").click(menuCerrar)
$(".cerrar").click(menuCerrar)
function menu(){
  $(".menuMobile").slideToggle();
  //$("#icon-mobile").hide();
}
function menuCerrar(){
  $(".menuMobile").hide();
  //$("#icon-mobile").show();
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
  var x = $(".slidee");
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
  var x = $(".slidee");
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
  setTimeout(carousel, 10000); // Carga cada 10 segundos
}

//Hipervinculos
$("#inicioMenu").click(function(){
  $("html,body").animate({scrollTop:0},1000)
  $("#inicioMenu").addClass(" dorado");
  $("#portafolioMenu").removeClass(" dorado");
  $("#servicesMenu").removeClass(" dorado");
  $("#nosotrosMenu").removeClass(" dorado");
  $("#contactoMenu").removeClass(" dorado");
})
$("#portafolioMenu").click(function(){
  var topnosotros=$("#portafolioLK").offset().top;
  console.log(topnosotros);
  $("html,body").animate({scrollTop:topnosotros},1000)
  $("#portafolioMenu").addClass(" dorado");
  $("#inicioMenu").removeClass(" dorado");
  $("#servicesMenu").removeClass(" dorado");
  $("#nosotrosMenu").removeClass(" dorado");
  $("#contactoMenu").removeClass(" dorado");
})
$("#servicesMenu").click(function(){
  var topnosotros=$("#servicesLK").offset().top;
  console.log(topnosotros);
  $("html,body").animate({scrollTop:topnosotros},1000)
  $("#servicesMenu").addClass(" dorado");
  $("#inicioMenu").removeClass(" dorado");
  $("#portafolioMenu").removeClass(" dorado");
  $("#nosotrosMenu").removeClass(" dorado");
  $("#contactoMenu").removeClass(" dorado");
})
$("#nosotrosMenu").click(function(){
  var topnosotros=$("#nosotrosLK").offset().top;
  console.log(topnosotros);
  $("html,body").animate({scrollTop:topnosotros},1000)
  $("#nosotrosMenu").addClass(" dorado");
  $("#inicioMenu").removeClass(" dorado");
  $("#servicesMenu").removeClass(" dorado");
  $("#portafolioMenu").removeClass(" dorado");
  $("#contactoMenu").removeClass(" dorado");
})
$("#contactoMenu").click(function(){
  var topnosotros=$("#contactoLK").offset().top;
  console.log(topnosotros);
  $("html,body").animate({scrollTop:topnosotros},1000)
  $("#contactoMenu").addClass(" dorado");
  $("#inicioMenu").removeClass(" dorado");
  $("#servicesMenu").removeClass(" dorado");
  $("#nosotrosMenu").removeClass(" dorado");
  $("#portafolioMenu").removeClass(" dorado");
})
// Plugin
  $(window).load(function() {
    $('.flexslider').flexslider({
      animation:"slide",
      direction:"vertical",
      controlNav:false,
      directionNav:false,
      slideshow:true,
      slideshowSpeed:4000
    });
  });
