let ataqueJugador;
let ataqueRival;
let vidasPlayer = 3;
let vidasRival = 3;


function iniciarJuego() {
    let botonMascotaJugador = document.getElementById('boton-mascota');
    let selectAtaques = document.getElementById('selectAtaques');
    let botonFuego = document.getElementById('boton-fuego');
    let botonAgua = document.getElementById('boton-agua');
    let botonPlanta = document.getElementById('boton-planta');
    let botonReiniciar = document.getElementById('boton-reiniciar');
    let restart = document.getElementById('restart');
    selectAtaques.style.display = 'none';
    restart.style.display = 'none';
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);
    botonFuego.addEventListener('click', ataqueFuego);
    botonAgua.addEventListener('click', ataqueAgua);
    botonPlanta.addEventListener('click', ataquePlanta);
    botonReiniciar.addEventListener('click', reiniciarJuego);
}


function seleccionarMascotaJugador() {
    let input1 = document.getElementById('hipomar');
    let input2 = document.getElementById('arboldilla');
    let input3 = document.getElementById('llamalobo');
    let spanMascotaPlayer = document.getElementById('mascotaJugador');
    let selectMascota = document.getElementById('selectMascota');
    selectMascota.style.display = 'none';
    let selectAtaques = document.getElementById('selectAtaques');
    selectAtaques.style.display = 'flex';
    if (input1.checked) {
        spanMascotaPlayer.innerHTML = 'Hipomar';
        // alert('Seleccionaste a Hipomar!')
    }
    else if (input2.checked) {
        spanMascotaPlayer.innerHTML = 'Arboldilla';
        // alert('Seleccionaste a Arboldilla!')
    }
    else if (input3.checked) {
        spanMascotaPlayer.innerHTML = 'Llamalobo';
        // alert('Seleccionaste a Llamalobo!')
    }
    else {
        alert('DEBES ELEGIR UNA MASCOTA!!')
    }

    seleccionarMascotaRival();
};
function seleccionarMascotaRival() {
    let mascotaRival = aleatorio(1, 3);
    let spanMascotaRival = document.getElementById('mascotaRival');

    if (mascotaRival == 1) {
        spanMascotaRival.innerHTML = 'Hipomar';
    } else if (mascotaRival == 2) {
        spanMascotaRival.innerHTML = 'Arboldilla';
    } else if (mascotaRival == 3) {
        spanMascotaRival.innerHTML = 'Llamalobo';
    }
}

function ataqueFuego() {
    ataqueJugador = 'Fuego';
    ataqueAleatorioRival();
}

function ataqueAgua() {
    ataqueJugador = 'Agua';
    ataqueAleatorioRival();
}

function ataquePlanta() {
    ataqueJugador = 'Planta'
    ataqueAleatorioRival();
}

function ataqueAleatorioRival() {
    let ataqueAleatorio = aleatorio(1, 3);

    if (ataqueAleatorio == 1) {
        ataqueRival = 'Fuego';
    } else if (ataqueAleatorio == 2) {
        ataqueRival = 'Agua';
    } else {
        ataqueRival = 'Planta';
    }

    combate();
}


function crearMensaje(combate) {
    let mensaje = document.getElementById('combate');
    let playerAttacks = document.getElementById('playerAttacks');
    let pcAttacks = document.getElementById('pcAttacks');
    let nuevoAtaque = document.createElement('p');
    let nuevoAtaquePc = document.createElement('p');

    mensaje.innerHTML = combate;
    nuevoAtaque.innerHTML = ataqueJugador;
    nuevoAtaquePc.innerHTML = ataqueRival;
    playerAttacks.appendChild(nuevoAtaque);
    pcAttacks.appendChild(nuevoAtaquePc);
}


function combate() {
    let spanVidasPlayer = document.getElementById('vidaPlayer');
    let spanVidasRival = document.getElementById('vidaRival');
    if (ataqueJugador == ataqueRival) {
        crearMensaje('Empate :/');
    } else if ((ataqueJugador == 'Fuego' && ataqueRival == 'Planta') || (ataqueJugador == 'Agua' && ataqueRival == 'Fuego') || (ataqueJugador == 'Planta' && ataqueRival == 'Agua')) {
        crearMensaje('Ganaste!! 🎊');
        vidasRival--
        spanVidasRival.innerHTML = vidasRival;
    } else {
        crearMensaje('Perdiste...');
        vidasPlayer--
        spanVidasPlayer.innerHTML = vidasPlayer;
    }
    revisarVidas();
}

function revisarVidas() {
    if (vidasRival == 0) {
        mensajeFinal('HAS GANADO LA BATALLA!');
    } else if (vidasPlayer == 0) {
        mensajeFinal('Has perdido la batalla...');
    }
}

function mensajeFinal(resultadoFinal) {
    let mensaje = document.getElementById('combate');
    let restart = document.getElementById('restart');
    restart.style.display = 'block';
    mensaje.innerHTML = resultadoFinal;
    let botonFuego = document.getElementById('boton-fuego');
    let botonAgua = document.getElementById('boton-agua');
    let botonPlanta = document.getElementById('boton-planta');
    botonFuego.disabled = true;
    botonAgua.disabled = true;
    botonPlanta.disabled = true;
}

function reiniciarJuego() {
    location.reload();
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego);