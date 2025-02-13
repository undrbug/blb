const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropDownMenu = document.querySelector('.dropdown_menu');

toggleBtnIcon.onclick = function () {
  dropDownMenu.classList.toggle('open');
  const isOpen = dropDownMenu.classList.contains('open')

  toggleBtnIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'
}

// Obtener el botón
const scrollTopBtn = document.getElementById('scrollTopBtn');

// Mostrar el botón cuando se haga scroll hacia abajo
window.onscroll = function () {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scrollTopBtn.style.display = "block";  // Mostrar el botón
  } else {
    scrollTopBtn.style.display = "none";   // Ocultar el botón cuando está arriba
  }
};

// Función para hacer scroll hacia arriba
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'  // Hace que el scroll sea suave
  });
}




// let slideIndex = 0;
// showSlides();

// function showSlides() {
//   let i;
//   const slides = document.getElementsByClassName("slide");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) { slideIndex = 1 }
//   slides[slideIndex - 1].style.display = "block";
//   setTimeout(showSlides, 2000); // Cambia la imagen cada 2 segundos
// }
