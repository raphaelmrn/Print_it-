const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
const banner = document.getElementById('banner');
const slidesContainer = banner.querySelector('.banner-img');
const dotsContainer = banner.querySelector('.dots');
const dotColors = ['dot-yellow', 'dot-blue', 'dot-purple', 'dot-red']
let currentIndex = 0;

const leftArrow = document.getElementById('left-arrow');
leftArrow.addEventListener('click',() => {
	afficherSlide(currentIndex - 1);
})

const rightArrow = document.getElementById('right-arrow');
rightArrow.addEventListener('click', () => {
	afficherSlide(currentIndex + 1);
})

slides.forEach((slide, index) => {
  const dot = document.createElement('span');
  dot.classList.add('dot');
  dot.addEventListener('click', () => {
    afficherSlide(index);
  });
	dot.classList.add(dotColors[index % dotColors.length]);

  dotsContainer.appendChild(dot);
});


function afficherSlide(index) {
  currentIndex = (index + slides.length) % slides.length;

  const currentSlide = slides[currentIndex];
  slidesContainer.src = `./assets/images/slideshow/${currentSlide.image}`;
  slidesContainer.alt = `Slide ${currentIndex + 1}`;
  banner.querySelector('p').innerHTML = currentSlide.tagLine;

  const dots = dotsContainer.querySelectorAll('.dot');
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === currentIndex);
  });
}

const dots = dotsContainer.querySelectorAll('.dot');
dots.forEach((dot, i) => {
	dot.classList.toggle('active', i === index);
});


afficherSlide(0);