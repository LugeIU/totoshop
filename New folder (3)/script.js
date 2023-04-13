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
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}
var slideIndex = 1;
showSlides(slideIndex);

setInterval(function() {
  plusSlides(1);
},3000);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}



const images = document.querySelectorAll('.image-wrapper img');

images.forEach(image => {
  image.addEventListener('mouseenter', () => {
    const imageWrapper = image.parentNode;
    imageWrapper.classList.add('collapsed');
  });

  image.addEventListener('mouseleave', () => {
    const imageWrapper = image.parentNode;
    imageWrapper.classList.remove('collapsed');
  });
});





/* pop up */

function openPopup() {
  document.getElementById("myPopup").style.display = "block";
}

function closePopup() {
  document.getElementById("myPopup").style.display = "none";
}

setTimeout(function() {
  openPopup();
}, 2000);





