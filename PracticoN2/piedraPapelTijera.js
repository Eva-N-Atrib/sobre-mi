// PARTE 1: Estructura básica HTML y estilos CSS
// 1. Crea un archivo "index.html" con la estructura básica de un documento HTML5.
// 2. Agrega los elementos necesarios para obtener el nombre del jugador y para mostrar
// las opciones de "piedra", "papel" y "tijera".
// 3. Aplica estilos CSS para dar formato a la interfaz de usuario del juego.

// PARTE 2: Obtención del nombre del jugador
// 1. Validar que el campo texto en el que el jugador ingresa su nombre no esté vacío.
// // 2. Utiliza JavaScript para capturar el nombre ingresado por el jugador.

let userScore = 0;
let pcScore = 0;


let instrucciones = document.querySelector("#instrucciones");
let contenedorTuEleccion = document.querySelector("#tuEleccion");
let contenedorPcEleccion = document.querySelector("#pcEleccion");
let contenedorGanaPunto = document.querySelector("#gana-punto");
let contenedorUserScore = document.querySelector("#user-score");
let contenedorPcScore = document.querySelector("#pc-score");
let elegiTuArma = document.querySelector("#choices-election");
let festejoJug = document.querySelector("#festejoJug");
let festejoPc = document.querySelector("#festejoPc");
let score = document.getElementById("score");
let mensaje = document.querySelector("#mensaje");
let usuario = document.getElementById("#user-label")

// al hacer click en jugar se llama a la función "validar" para corroborar que el campo del usuario no se encuentre vacío

startBtn.addEventListener("click", validar)
sonidoJeremy();
window.onload = function() {
    reiniciarJuego();
};

function validar() {
  var input = document.getElementById("nomJugador");
  var nomJugador = input.value.trim();

  //en caso de que el campo se encuentre vacío aparecerá el siguiente mensaje de error y NO se dará inicio al juego

  if (nomJugador === ""){
    alert ("Ingresa un Nombre para iniciar la partida");
    } else{
        var form = document.getElementById("player-name");
        form.classList.add("disabled");
        instrucciones.innerText = "El mejor de 3, ganará el juego";
        
// se modifica el texto de las instrucciones, se activa la visualización de los nombres, los marcadores y el selector de opciones para jugar
      score.classList.remove("disabled");
      elegiTuArma.classList.remove("disabled");
      }
      }

            
const piedra = document.getElementById("piedra");
const papel = document.getElementById("papel");
const tijera = document.getElementById("tijera");

//Cuando se haga click en alguna de las opciones para jugar se llamará a la funcion "iniciarMano"

let imgArmas = document.querySelectorAll(".choice")
imgArmas.forEach(boton => {
    boton.addEventListener("click", iniciarMano(boton));
});

//la elección de la Pc se calcula aleatoriamente y la del usuario según la imagen que haya seleccionado.

piedra.addEventListener('click', () => {
  // Call your function with parameters here
  iniciarMano("piedra");
});

papel.addEventListener('click', () => {
  // Call your function with parameters here
  iniciarMano("papel");
});

tijera.addEventListener('click', () => {
  // Call your function with parameters here
  iniciarMano("tijera");
});

function iniciarMano (eleccionUser) {

  let eleccionPc = Math.floor(Math.random()*3);
  console.log(`Elecciones: ${eleccionPc} - ${eleccionUser}`);
  
   //en caso de cada seleccion hecha por el usuario y la pc se mostrara por pantalla la imagen correspondiente
    if (eleccionUser === "piedra") {
      eleccionUser = "piedra"
      sonidoPlop()
}
else if (eleccionUser === "papel") {
  eleccionUser ="papel";
      sonidoPlop()
}
else if (eleccionUser === "tijera") {
  eleccionUser ="tijera";  
    sonidoPlop()
}

if (eleccionPc === 0) {
    eleccionPc = "piedra";
  }
else if (eleccionPc === 1) {
    eleccionPc = "papel";
}
else if (eleccionPc === 2) {
    eleccionPc = "tijera";
    }
 // se comparan las elecciones de ambas jugadas y se llama a la función correspondiente.
 if (
  eleccionUser==="piedra" && eleccionPc === "tijera" ||
  eleccionUser==="papel" && eleccionPc === "piedra"||
  eleccionUser==="tijera" && eleccionPc === "papel" )
  { ganaUsuario();
}
else if (
  eleccionUser==="tijera" && eleccionPc === "piedra" ||
  eleccionUser==="piedra" && eleccionPc === "papel" ||
  eleccionUser==="papel" && eleccionPc === "tijera") 
  { ganaPc();
}
else { empate()}

//se habilita la visualización del mensaje que muestra por pantalla en palabras la selección de cada uno.

mensaje.classList.remove("visibility");
  contenedorTuEleccion.innerText = eleccionUser;
  contenedorPcEleccion.innerText = eleccionPc;

  //El primero en llegar a los 3 puntos se dará inicio a alguna de las funciones imprimiendo por pantalla el mensaje del ganador.

  if (pcScore === 3 || userScore === 3){
    if (userScore === 3){
        festejoJug.classList.remove("disabled");
        sonidoAplausos();
    }

    else if (pcScore === 3){
        festejoPc.classList.remove("disabled");
        reiniciar.classList.remove("disabled");
        // reiniciar.addEventListener("click", reiniciarJuego)
    }
    }
    //Una vez alcanzados los 3 puntos se deshabilitará la opción de elegir la próxima mano y se habilitará el botón para "reiniciar" el juego.

    elegiTuArma.classList.add("disabled");
    reiniciar.classList.remove("disabled");
    
}
reiniciar.addEventListener("click", reiniciarJuego);

//Si el Usuario gana un punto se dispara esta función, se suma un punto al score y se imprime el mensaje por pantalla.

function ganaUsuario () {
  contenedorUserScore.innerText = ++userScore;
  contenedorGanaPunto.innerText = "¡Punto Ganado! 😎"
  sonidoWinner()
}

//Si la Pc gana un punto se dispara esta función, se suma un punto al score y se imprime el mensaje por pantalla.

function ganaPc() {
  contenedorPcScore.innerText = ++pcScore;
  contenedorGanaPunto.innerText= "¡Punto para la Pc! 👎"
  sonidoLoser()
}

//si hay empate se mostrará el mensaje de empate y no se sumará ningun punto.

function empate(){
  contenedorGanaPunto.innerText = "¡Empate!"
}

//la funcion reiniciar juego se inicia al dar click al boton de "Reiniciar".

function reiniciarJuego() {
  //se deshabilita la visualizacion del boton "volver a jugar"
  let reiniciar = document.getElementById("reiniciar")
  reiniciar.classList.add("disabled");
  //se vuelve a activar la opcion para elegir la mano.
  elegiTuArma.classList.remove("disabled");
  mensaje.classList.add("visibility");

  userScore = 0;
  pcScore = 0;

  //se reinician los puntos, se desactiva la visualizacion de los festejos y se vuelve a las imagenes iniciales del juego

  contenedorUserScore.innerText = userScore;
  contenedorPcScore.innerText = pcScore;
  festejoJug.classList.add("disabled");
  festejoPc.classList.add("disabled");
}

//Se incorpora audios al juego.

function sonidoPlop(){
    let audioPlop = document.querySelector("#audioPlop")
    audioPlop.play()
  }
  
  function sonidoBow(){
    let audioBow = document.querySelector("#audioBow")
    audioBow.play()
  }
  
  function sonidoLoser(){
    let audioLoser = document.querySelector("#audioLoser")
    audioLoser.play()
  }
  
  function sonidoWinner(){
    let audioWinner = document.querySelector("#audioWinner")
    audioWinner.play()
  }

function sonidoJeremy() {
  let audioJeremy = document.querySelector("#audioJeremy")
  audioJeremy.play();
}

function sonidoAplausos(){
  let audioAplausos=document.querySelector('#audioAplausos')
  audioAplausos.play()
}



  