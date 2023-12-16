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
  setTimeout(showSlides, 5000); 
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

 const donutsSelect = document.getElementById('donuts');
      const coberturasSelect = document.getElementById('coberturas');
      const lluviasSelect = document.getElementById('lluvias');
      const seleccionDiv = document.getElementById('seleccion');
    
      function mostrarSeleccion() {
        const donutsSeleccionados = [...donutsSelect.selectedOptions].map(option => option.text);
        const coberturasSeleccionadas = [...coberturasSelect.selectedOptions].map(option => option.text);
        const lluviasSeleccionadas = [...lluviasSelect.selectedOptions].map(option => option.text);
    
        const resultadoHTML = `
          <h3>Selecciones:</h3>
          <p><strong>Donuts seleccionados:</strong> ${donutsSeleccionados.length > 0 ? donutsSeleccionados.join(', ') : 'Ninguno'}</p>
          <p><strong>Coberturas seleccionadas:</strong> ${coberturasSeleccionadas.length > 0 ? coberturasSeleccionadas.join(', ') : 'Ninguna'}</p>
          <p><strong>Lluvias seleccionadas:</strong> ${lluviasSeleccionadas.length > 0 ? lluviasSeleccionadas.join(', ') : 'Ninguna'}</p>
        `;
        seleccionDiv.innerHTML = resultadoHTML;
      }

      function limpiarSeleccion() {
    donutsSelect.selectedIndex = -1;
    coberturasSelect.selectedIndex = -1;
    lluviasSelect.selectedIndex = -1;
    seleccionDiv.innerHTML = '';
  }

  function enviarPedido() {
    mostrarSeleccion();
    limpiarSeleccion();

    document.getElementById('seleccionDiv').innerHTML =resultadoHTML
  }
       
      donutsSelect.addEventListener('change', mostrarSeleccion);
      coberturasSelect.addEventListener('change', mostrarSeleccion);
      lluviasSelect.addEventListener('change', mostrarSeleccion);