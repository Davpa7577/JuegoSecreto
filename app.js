let numeroSecreto=0;
let intentos=1;
let numeroSorteado=[];
console.log(numeroSecreto);

function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML=texto;    
}
function verificarIntento(){
    console.log(intentos);
    let numeroDeUsuario=parseInt(document.getElementById('valorUsuario').value);
    console.log(numeroDeUsuario===numeroSecreto);
    if(numeroDeUsuario===numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${intentos===1?'vez':'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    //El Usuario No acerto
    }else if(numeroDeUsuario>numeroSecreto){
         asignarTextoElemento('p','El numero es menor');
    } else {
        asignarTextoElemento('p','El numero es mayor');
    }
    intentos++;
    limpiarCaja();
    
}

function generarNumeroSecreto() {
    let numeroGenerado=Math.floor(Math.random()*10)+1;
    if(numeroSorteado.includes(numeroGenerado)){
      return generarNumeroSecreto();
    } else{
      return numeroGenerado.push(numeroGenerado);
    }
}
function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del Numero Secreto');
    asignarTextoElemento('p','Indica un numero del 1 al 10');
    numeroSecreto=generarNumeroSecreto();
    intentos=1;

}