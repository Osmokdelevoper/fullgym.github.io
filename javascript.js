document.getElementById('toggleButton').addEventListener('click', function() {
  var menu = document.getElementById('menuColapsable');
  if (menu.classList.contains('hidden')) {
      menu.classList.remove('hidden');
  } else {
      menu.classList.add('hidden');
  }
});

function scrollToSection(sectionId) {
  var section = document.getElementById(sectionId);
  if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
  }
}

const carouselItems = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

function showSlide(index) {
  carouselItems.forEach((item, i) => {
    if (i === index) {
      item.classList.remove('hidden'); // Mostrar el slide actual
    } else {
      item.classList.add('hidden'); // Ocultar los demás slides
    }
  });
}

function nextSlide() {
  currentIndex++;
  if (currentIndex >= carouselItems.length) {
    currentIndex = 0;
  }
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = carouselItems.length - 1;
  }
  showSlide(currentIndex);
}

// Agregar event listeners para los botones de navegación
document.querySelector('.carousel-prev').addEventListener('click', prevSlide);
document.querySelector('.carousel-next').addEventListener('click', nextSlide);

// Mostrar el primer slide
showSlide(currentIndex);

// Desplazamiento automático
setInterval(nextSlide, 5000); // Cambia el slide cada 5 segundos (5000 milisegundos)