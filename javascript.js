let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("carousel-slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }    
  slides[slideIndex - 1].style.display = "block";  
  setTimeout(showSlides, 4000); 
}

function comprobarDisponibilidad() {
  cantidadCompra1 = document.getElementById('cantidadChocolate').value;
  cantidadCompra2 = document.getElementById('cantidadBlanco').value;
  cantidadCompra3 = document.getElementById('cantidadCorazones').value;
  cantidadCompra4 = document.getElementById('cantidadOriginal').value;
  cantidadCompra5 = document.getElementById('cantidadRol').value;

  stockComparacion = ( cantidadCompra1 <= 50 && cantidadCompra2 <= 50 && cantidadCompra3 <= 5 && cantidadCompra4 <= 50 && cantidadCompra5 <= 50) ? 
  "Si hay disponibilidad de Stock":"No hay suficiente Stock";

  document.getElementById('muestraDisponibilidad').innerHTML = stockComparacion;
}

