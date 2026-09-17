// Esperar a que el documento HTML esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {

    // Obtener los elementos del formulario
    const formulario = document.querySelector(".formulario");
    const pesos = document.getElementById("Pesos");
    const dolares = document.getElementById("dolar");

    // Tasa de cambio
    const tasaCambio = 0.055;

    // Evento al enviar el formulario
    formulario.addEventListener("submit", function (evento) {

        // Evitar que la página se recargue
        evento.preventDefault();

        // Obtener el valor ingresado
        const valorPesos = pesos.value.trim();

        // Validar que el campo no esté vacío
        if (valorPesos === "") {
            alert("Por favor, ingresa una cantidad válida.");
            pesos.focus();
            return;
        }

        // Convertir el valor a número
        const cantidadPesos = Number(valorPesos);

        // Validar que sea un número
        if (isNaN(cantidadPesos)) {
            alert("Por favor, ingresa un valor numérico válido.");
            pesos.focus();
            return;
        }

        // Validar que sea positivo
        if (cantidadPesos <= 0) {
            alert("Por favor, ingresa una cantidad mayor que cero.");
            pesos.focus();
            return;
        }

        // Realizar la conversión
        const cantidadDolares = cantidadPesos * tasaCambio;

        // Mostrar el resultado
        dolares.value = cantidadDolares.toFixed(2) + " USD";
    });
});