const validator = {
  isValid:  function (cardNumber) {
    let sumaimpar=0;
    let suma = 0;

    for (let i = 0; i < cardNumber.length; i += 1) {
      const numeroDeTarjeta = cardNumber[i];
      if ((i % 2) === 0) {
        let multiplicacion = numeroDeTarjeta * 2;
        if (multiplicacion < 9) {
          suma = suma + multiplicacion;
        } else {
      let convertirAString = multiplicacion.toString();
      let sumaDeMultiplicacion = parseInt(convertirAString[0]) + parseInt(convertirAString[1]);
      suma = suma + sumaDeMultiplicacion;

        }
    
      } 
      else {
      let m = numeroDeTarjeta * 1;
      sumaimpar =sumaimpar + m;
     
      } 
    }
let sumatotal=sumaimpar+suma;

    console.log(sumatotal);
    if((sumatotal%10)===0){
    return true;
 
    }else{
    return  false;
 
    }
  } ,
  maskify: function (cardNumber) {
  let codificarNumero=cardNumber.replace(/.(?=.{4})/g, "#");
  return codificarNumero;
  }

}


export default validator;

