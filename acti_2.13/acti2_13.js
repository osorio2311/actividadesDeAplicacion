let esnumero=true;

do{
let numero1 = Number(prompt("Introduzca un número"));
let operador = prompt("Introduzca operador: +.-.*,/")
let numero2 = Number(prompt("introduzca un número"))
if(isNaN(numero1) || isNaN(numero2)){ //comprueba que el valor sea numérico
   alert("Introduce número correcto")
    esnumero=false;
}else{


    // Calcular el resultado
    let resultado;
    switch (operador) {
        case "+":
            resultado = numero1 + numero2;
            break;
        case "-":
            resultado = numero1 - numero2;
            break;
        case "*":
            resultado = numero1 * numero2;
            break;
        case "/":
            resultado = numero1 / numero2;
            break;
        case "**":
            resultado = numero1 ** numero2;
            break;
        case "%":
            resultado = numero1 % numero2;
            break;
        default:
            resultado = "Operador no válido";
        }
    
    alert(resultado);
    }
}while(!esnumero)