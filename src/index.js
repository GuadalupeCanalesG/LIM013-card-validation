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
    
    inicio.classList.add("ocultar");
    validacionDeTarjeta.classList.remove("ocultar");

   

}

const botonRegresar =document.getElementById("botonRegresar");
botonRegresar.addEventListener("click",regresar)

function regresar() {
       
    final.classList.add("ocultar");
    validacionDeTarjeta.classList.remove("ocultar");
}


function ingresar(){
    //variables
    const numeroTarjeta=document.getElementById("numbers").value;

if (validarDatos()!==false) {
    if (validator.isValid(numeroTarjeta)===true) {
       
    alert("correcto");
    validacionDeTarjeta.classList.add("ocultar");
    final.classList.remove("ocultar");
    
    }
    else{
        alert("incorrecto");
    } 
}

}


function validarDatos() {
    //Variable:
    const numeroTarjeta=document.getElementById("numbers").value;
    const resultado=document.getElementById("resultado");

    if (numeroTarjeta==="") {
        alert("Debe Ingresar un Nro de Tarjeta");
        return false;
    } else {
       resultado.innerHTML="<p><b>Nro de Tarjeta: </b>"+validator.maskify(numeroTarjeta)+"</p>";
        return true;
    }


}



console.log(validator);






