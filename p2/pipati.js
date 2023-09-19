let puntosUsuario = 0;
let puntosPC = 0;

let inicio = document.querySelector("#inicio")
let instrucciones = document.querySelector("#instrucciones");
let contenedorEleccionUsuario = document.querySelector("#eleccion-usuario");
let contenedorEleccionPc = document.querySelector("#eleccion-computadora");
let contenedorGanaPunto = document.querySelector("#gana-punto");
let contenedorPuntosUsuario = document.querySelector("#puntos-usuario");
let contenedorPuntosPC = document.querySelector("#puntos-computadora");
let elegiTuArma = document.querySelector("#elegi-tu-arma");
let festejo = document.querySelector("#festejo");
let festejoPC = document.querySelector("#festejoPC");
let marcador = document.getElementById("marcador");
let mensaje = document.querySelector("#mensaje");
let respuesta = document.querySelector("#respuesta")
let seleccionPC = document.getElementById("seleccionPC");
let seleccionUsuario = document.getElementById("seleccionUsuario");
let usuario = document.getElementById("#user-label")

// al dar click en comenzar se llama a la funcion "validar" para corroborar que el campo del usuario no se encuentre vacio
startButton.addEventListener("click", validar)

function validar(){
    var input = document.getElementById("nombreJug");
    var nombreJug = input.value.trim();
    
    //en caso de que el campo se encuentre vacio aparecera este mensaje de error y no se dara inicio al juego
    if (nombreJug === ""){
        alert("Por favor, Ingrese su nombre");
    }
    else {
        //en caso contrario se ejecuta el juego, desaparece el form que pide el nombre de usuario
        usuario.textContent = nombreJug;

        var form = document.getElementById("player-nombre");
        form.classList.add("disabled");

        instrucciones.innerText = "El primero que llega a 3 puntos gana el juego";
        /*se cambia el texto de las instrucciones, se activa la visualizacion de los nombres, los marcadores 
        y el selector de opciones para jugar */
        marcador.classList.remove("disabled");
        elegiTuArma.classList.remove("disabled");
        inicio.classList.add("disabled");
        seleccionUsuario.classList.remove("disabled");
        seleccionPC.classList.remove("disabled");
    }
    
}

const piedra = document.getElementById("piedra");
const papel = document.getElementById("papel");
const tijera = document.getElementById("tijera");

//en caso de que se haga click en alguna de las opciones para jugar se llamara a la funcion "iniciarTurno"
let botonesArmas = document.querySelectorAll(".arma")
botonesArmas.forEach(boton => {
    boton.addEventListener("click", iniciarTurno);
});

//la eleccion de la pc se calcula aleatoriamente y la del usuario segun el boton que haya seleccionado
function iniciarTurno (e) {

    let eleccionPc = Math.floor(Math.random()*3);
    let eleccionUsuario= e.currentTarget.id;

    //en caso de cada seleccion hecha por el usuario y la pc se mostrara por pantalla la imagen correspondiente
    if (eleccionUsuario === "piedra") {
        seleccionUsuario.src = "img/piedra.png";
    }
    else if (eleccionUsuario === "papel") {
        seleccionUsuario.src = "img/papel.png";
    }
    else if (eleccionUsuario === "tijera") {
        seleccionUsuario.src = "img/tijeras.png";
    }
    
    if (eleccionPc === 0) {
        eleccionPc = "piedra"
        seleccionPC.src = "img/piedra2.png";
    }
    else if (eleccionPc === 1) {
        eleccionPc = "papel"
        seleccionPC.src = "img/papel2.png";
    }
    else if (eleccionPc === 2) {
        eleccionPc = "tijera"
        seleccionPC.src = "img/tijeras2.png";
    }

    // se comparan las elecciones de pc y jugador y se llama a la funcion correspondiente
    if (
        eleccionUsuario==="piedra" && eleccionPc === "tijera" ||
        eleccionUsuario==="tijera" && eleccionPc === "papel" ||
        eleccionUsuario==="papel" && eleccionPc === "piedra"
    ) { ganaUsuario();
    }
    else if (
        eleccionUsuario==="tijera" && eleccionPc === "piedra" ||
        eleccionUsuario==="papel" && eleccionPc === "tijera" ||
        eleccionUsuario==="piedra" && eleccionPc === "papel"
    ) { ganaPc();
    }
    else { empate()}

    //se habilita la visualizacion del mensaje que muestra por pantalla en palabras la seleccion de cada jugador
    mensaje.classList.remove("visibility");
    contenedorEleccionUsuario.innerText = eleccionUsuario;
    contenedorEleccionPc.innerText = eleccionPc;

    //en caso de que el jugador o la pc alcancen los 3 puntos se iniciara alguna de las funciones mostrando el mensaje al ganador correspondiente
    if (puntosPC===3 || puntosUsuario===3){
        if (puntosUsuario===3){
            festejo.classList.remove("disabled");
        }
    
        else if (puntosPC===3){
            festejoPC.classList.remove("disabled");
        }
        //si alguno llega a 3 puntos se deshabilita la opcion de elegir y se habilita el boton para volver a jugar
        elegiTuArma.classList.add("disabled");
        reiniciar.classList.remove("disabled");
        reiniciar.addEventListener("click", reiniciarJuego)
    }
}   

//si gana el usuario un punto se inicia esta funcion, se suma un punto al marcador y se muestra el mensaje por pantalla
function ganaUsuario() {
    contenedorPuntosUsuario.innerText = ++puntosUsuario;
    contenedorGanaPunto.innerText= "¡Ganaste un punto! 😀"
}

//si gana la pc un punto se inicia esta funcion, se suma un punto al marcador y se muestra el mensaje por pantalla
function ganaPc() {
    contenedorPuntosPC.innerText = ++puntosPC;
    contenedorGanaPunto.innerText= "Gano un punto la PC 😟"
}

//si hay empate se muestra el mensaje de empate y no se suma ningun punto
function empate(){
    contenedorGanaPunto.innerText = "¡Empate!"
}

//la funcion reiniciar juego se inicia al dar click al boton de "volver a jugar"
function reiniciarJuego() {
    //se deshabilita la visualizacion del boton "volver a jugar"
    let reiniciar = document.getElementById("reiniciar")
    reiniciar.classList.add("disabled");
    //se vuelve a activar la opcion para elegir
    elegiTuArma.classList.remove("disabled");
    mensaje.classList.add("visibility");

    puntosUsuario=0;
    puntosPC=0;
    //se reinician los puntos, se desactiva la visualizacion de los festejos y se vuelve a las imagenes iniciales del juego
    contenedorPuntosUsuario.innerText = puntosUsuario;
    contenedorPuntosPC.innerText = puntosPC;
    festejo.classList.add("disabled");
    festejoPC.classList.add("disabled");
    seleccionUsuario.src = "img/ppt.png";
    seleccionPC.src = "img/ppt2.png";
}

