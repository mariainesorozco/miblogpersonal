// Función para cambiar el color del encabezado al hacer clic en él
const header = document.querySelector('header');

header.addEventListener('click', function() {
  const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  header.style.backgroundColor = randomColor;
});

  

  
  