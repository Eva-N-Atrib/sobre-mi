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
function validar() {
  var input = document.getElementById("nomJugador");
  var nomJugador = input.value.trim();


  //en caso de que el campo se encuentre vacío aparecerá el siguiente mensaje de error y NO se dará inicio al juego

  if (nomJugador === ""){
    alert ("Ingresa un Nombre para iniciar la partida");
    } else{
      alert(`¡Bienvenido ${nomJugador} al juego!`);
      console.log(nomJugador);
      }
      }



// //en caso contrario se ejecuta el juego, y desaparece el form que pide el nombre de usuario.
//         usuario.textContent = nomJugador;
        

        var form = document.getElementById("player-name");
        form.classList.add("disabled");

        instrucciones.innerText = "El mejor de 3, ganará el juego";

// se modifica el texto de las instrucciones, se activa la visualización de los nombres, los marcadores y el selector de opciones para jugar

      score.classList.remove("disabled");
      elegiTuArma.classList.remove("disabled");
            
const piedra = document.getElementById("r");
const papel = document.getElementById("p");
const tijera = document.getElementById("t");

//Cuando se haga click en alguna de las opciones para jugar se llamará a la funcion "iniciarMano"

let imgArmas = document.querySelectorAll(".choice")
imgArmas.forEach(boton => {
    boton.addEventListener("click", iniciarMano);
});

//la elección de la Pc se calcula aleatoriamente y la del usuario según la imagen que haya seleccionado.

function iniciarMano (e) {

  let eleccionPc = Math.floor(Math.random()*3);
  let eleccionUser= e.currentTarget.id;
  console.log(`Elecciones: ${eleccionPc} - ${eleccionUser}`);
  

   //en caso de cada seleccion hecha por el usuario y la pc se mostrara por pantalla la imagen correspondiente

   if (eleccionUser === "r") {
    eleccionUser.src = "img/rocaUser.png";
    sonidoPlop()
}
else if (eleccionUser === "p") {
    eleccionUser.src = "img/papelUser.png";
    sonidoPlop()
}
else if (eleccionUser === "t") {
    eleccionUser.src = "img/tijeraUser.png";
    sonidoPlop()
}

if (eleccionPc === 0) {
    eleccionPc = "Piedra"
    eleccionPc.src = "img/rocaPc.png";
}
else if (eleccionPc === 1) {
    eleccionPc = "Papel"
    eleccionPc.src = "img/papelPc.png";
}
else if (eleccionPc === 2) {
    eleccionPc = "Tijera"
    eleccionPc.src = "img/tijeraPc.png";
    
}

 // se comparan las elecciones de ambas jugadas y se llama a la función correspondiente.

 if (
  eleccionUser==="r" && eleccionPc === "t" ||
  eleccionUser==="p" && eleccionPc === "r"||
  eleccionUser==="t" && eleccionPc === "p" )
  { ganaUsuario();
}
else if (
  eleccionUser==="t" && eleccionPc === "r" ||
  eleccionUser==="r" && eleccionPc === "p" ||
  eleccionUser==="p" && eleccionPc === "t") 
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
    }

    else if (pcScore === 3){
        festejoPc.classList.remove("disabled");
    }
    //Una vez alcanzados los 3 puntos se deshabilitará la opción de elegir la próxima mano y se habilitará el botón para "reiniciar" el juego.

    elegiTuArma.classList.add("disabled");
    reiniciar.classList.remove("disabled");
    reiniciar.addEventListener("click", reiniciarJuego)
}
}   

//Si el Usuario gana un punto se dispara esta función, se suma un punto al score y se imprime el mensaje por pantalla.

function winUser () {
  contenedorUserScore.innerText = ++ userScore;
  contenedorGanaPunto.innerText = "¡Punto Ganado! 😎"
  sonidoWinner()
}

//Si la Pc gana un punto se dispara esta función, se suma un punto al score y se imprime el mensaje por pantalla.

function winPc() {
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

  let userScore = 0;
  let pcScore = 0;

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





  