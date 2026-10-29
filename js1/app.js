const numeroSecreto = 16; 

const inputUsuario = document.getElementById('numeroUsuario');
const btnAdivinar = document.getElementById('btnAdivinar');
const mensajePista = document.getElementById('mensajePista');

function verificarNumero() {
   const valor = parseInt(inputUsuario.value);

   if (inputUsuario.value === "") {
      mensajePista.textContent = "";
      return;
   }

   if (isNaN(valor)) {
      mensajePista.textContent = "⚠️ Por favor, ingresa un número válido.";
      return;
   }

   if (valor === numeroSecreto) {
      mensajePista.textContent = "🎉 ¡Exacto! ¡Le atinaste a mi número favorito!";
   } else if (valor > numeroSecreto) {
      if (valor - numeroSecreto <= 5) {
          mensajePista.textContent = "🔥 ¡Estás muy cerca! Pero es un poco más abajo.";
      } else {
          mensajePista.textContent = "📈 Muy arriba, baja un poco más.";
      }
   } else {
      if (numeroSecreto - valor <= 5) {
          mensajePista.textContent = "🔥 ¡Estás muy cerca! Pero es un poco más arriba.";
      } else {
          mensajePista.textContent = "📉 Muy abajo, sube un poco más.";
      }
   }
}

// Validación en tiempo real al escribir en el input
inputUsuario.addEventListener('input', verificarNumero);

// Validación al hacer clic en el botón "Comprobar"
btnAdivinar.addEventListener('click', verificarNumero);

// --- Selector de Pasiones Dinámico ---
const selectPasiones = document.getElementById('pasiones');
const imagenPasion = document.getElementById('imagenPasion');
const tituloPasion = document.getElementById('tituloPasion');

const contenidoPasiones = {
   "futbol": {
      src: "img/futbol.jpg",
      titulo: "Los mejores jugadores de las grandes ligas del fútbol europeo"
   },
   "videojuegos": {
      src: "img/videojuego.jpg",
      titulo: "El mejor juego del mundo"
   },
   "musica": {
      src: "img/musica.jpg",
      titulo: "Peli de terror, canción número 1 en Colombia"
   }
};

selectPasiones.addEventListener('change', () => {
   const seleccion = selectPasiones.value;

   if (contenidoPasiones[seleccion]) {
      imagenPasion.src = contenidoPasiones[seleccion].src;
      tituloPasion.textContent = contenidoPasiones[seleccion].titulo;
   } else {
      // Valor por defecto si selecciona la opción vacía
      imagenPasion.src = "img/futbol.jpg";
      tituloPasion.textContent = "Los mejores talentos y la gloria del Balon de Oro";
   }
});