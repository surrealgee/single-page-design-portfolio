let slideIndex = 1;

const prevArrow = document.getElementById("prev");
const nextArrow = document.getElementById("next");

prevArrow.addEventListener("click", () => {
  moveSlide(-1);
});

nextArrow.addEventListener("click", () => {
  moveSlide(1);
});

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");

  if (n > slides.length) {
    slideIndex = 1;
  } else if (n < 1) {
    slideIndex = slides.length;
  }

  for (let slide of slides) {
    slide.style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}

function moveSlide(n) {
  showSlides((slideIndex += n));
}

showSlides(slideIndex);
