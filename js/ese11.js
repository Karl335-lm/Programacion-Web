
// Esperar a que el documento HTML esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {

    // Obtener los elementos del formulario
    const formulario = document.querySelector(".formulario");
    const kilometro = document.getElementById("km");
    const millas = document.getElementById("millat");

    // Evento al enviar el formulario
    formulario.addEventListener("submit", function (evento) {

        // Evitar que la página se recargue
        evento.preventDefault();

        // Obtener el valor ingresado
        const valorKm = kilometro.value.trim();

        // Validar que el campo no esté vacío
        if (valorKm === "") {
            alert("Por favor, ingresa la distancia en kilómetros.");
            kilometro.focus();
            return;
        }

        // Convertir el valor a número
        const kilometros = Number(valorKm);

        // Validar que sea un número
        if (isNaN(kilometros)) {
            alert("Por favor, ingresa un valor numérico válido.");
            kilometro.focus();
            return;
        }

        // Realizar la conversión de kilómetros a millas
        const resultadoMillas = kilometros * 0.621371;

        // Mostrar el resultado
        millas.value = resultadoMillas.toFixed(5) + " millas";
    });
});

