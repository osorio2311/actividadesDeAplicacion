let numero= prompt("introduce un número:");
let resultado = 1;

for (let i=numero; i>1; i--){
    resultado *=i;
}
alert(resultado);




// // Creamos una funcion para calcular el factorial
// function calcularFactorial() {

//     // Obtenemos el valor del campo de entrada
//     let number = document.getElementById("numeroIntroducido").value;

//     // Inicializamos la variable factorial en 1
//     let factorial = 1;

//     // Bucle for para calcular el factorial
//     for (let i = 1; i <= number; i++) {
//         factorial *= i; // Multiplicamos el factorial por el número actual
//     }

//     // Mostramos el resultado en el elemento con id "result"
//     document.getElementById("resultado").innerText = "El factorial de: " + number + " es: " + factorial;
// }

