var display = document.querySelector('#display');

var numeros = document.querySelectorAll('.numeros');
var numeroClicado;

    if (numeros[9].addEventListener('click', mudaDisplay)){
        numeroClicado = '0';
    }else if(numeros[0].addEventListener('click', mudaDisplay)){ numeroClicado = '1';}
function mudaDisplay(){
    display.innerHTML = numeroClicado;
}