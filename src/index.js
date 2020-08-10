import validator from './validator.js';
const inicio= document.getElementById("inicio");
const botonInicio= document.getElementById("botonInicio");
const validacionDeTarjeta= document.getElementById("validacionDeTarjeta");
const final= document.getElementById("final");
botonInicio.addEventListener("click",solicitarDatos);
//let numbers= document.getElementById("numbers");

const botonIngresar =document.getElementById("botonIngresar");
botonIngresar.addEventListener("click",ingresar)

function solicitarDatos () {
    //let numbersValue= numbers.value;
    inicio.classList.add("ocultar");
    validacionDeTarjeta.classList.remove("ocultar");

   

}

function ingresar(){
    //variables
const numeroTarjeta=document.getElementById("numbers").value;

    if (validator.isValid(numeroTarjeta)===true) {
       
        alert("correcto");
    validacionDeTarjeta.classList.add("ocultar");
    final.classList.remove("ocultar");
    
    }else{
        alert("incorrecto");
    }
}



console.log(validator);






