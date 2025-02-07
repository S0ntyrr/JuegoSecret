let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    console.log(intentos);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento(`p`, `Le pego al perro en ${intentos} ${(intentos == 1) ? `vez`:`veces`} `);
        document.getElementById('reiniciar').removeAttribute('disabled');
    
    
    }else{
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento(`p`, `El numero secreto es menor`);
        } else{
            asignarTextoElemento(`p`, `El numero secret es mayor`)
        }
        intentos ++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
     document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

    if(listaNumeroSorteados.length == numeroMaximo){
        asignarTextoElemento(`p`, `No hay más numeros mi rey, intente de nuevo`)
    }else{

        if (listaNumeroSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumeroSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}
function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
  limpiarCaja();
  condicionesIniciales();
  document.querySelector('#reiniciar').setAttribute('disable','true');
  
}


condicionesIniciales();
