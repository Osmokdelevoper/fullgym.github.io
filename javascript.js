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

ScrollReveal().reveal('#hero', {
  // Opciones de configuración
  duration: 1000, // Duración de la animación en milisegundos
  delay: 200, // Retraso antes de que se inicie la animación en milisegundos
  distance: '20px', // Distancia desde la que se realiza la animación
  origin: 'bottom', // Origen de la animación
  easing: 'ease', // Tipo de interpolación de la animación
  reset: true // Si la animación debe reiniciarse cada vez que se haga scroll
});

const sr = ScrollReveal({
  origin: 'bottom',
  distance: '20px',
  duration: 1000,
  delay: 300,
  easing: 'cubic-bezier(0.5, 0, 0, 1)',
});

sr.reveal('#hero h1, #hero p, #hero button', {
  interval: 200,
  scale: 1,
  origin: 'bottom',
  distance: '20px',
});


function changeColor(card) {
  card.style.backgroundColor = '#ad0e0e'; // Color de fondo invertido
  card.style.color = '#ffffff'; // Color de texto invertido
  
}

// Función para restaurar los colores originales al quitar el mouse de la tarjeta
function changeColorBack(card) {
  card.style.backgroundColor = ''; // Restaurar el color de fondo original
  card.style.color = ''; // Restaurar el color de texto original
}
