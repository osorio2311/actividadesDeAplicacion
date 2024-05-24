function convertirTiempo() {
    // Cogemos los valores ingresados en los input de dias, horas y minutos
    let dias = document.getElementById("dias").value;
    let horas = document.getElementById("horas").value;
    let minutos = document.getElementById("minutos").value;
    let segundos = document.getElementById("segundos").value;

    // Calcular el total de segundos
    let totalSegundos = (dias * 24 * 60 * 60) + (horas * 60 * 60) + (minutos * 60) + (segundos);

    // Mostrar el resultado. Coge el id resultado e introduce con .innerText "El tiempo ingresado "
    document.getElementById("resultado").innerText = "El tiempo ingresado es de " + totalSegundos + " segundos.";
}
