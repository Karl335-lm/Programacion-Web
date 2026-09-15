
// Esperar a que el documento HTML esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {

    // Obtener los elementos del formulario
    const formulario = document.querySelector(".formulario");
    const celsius = document.getElementById("Celcius");
    const fahrenheit = document.getElementById("Farent");

    // Evento al enviar el formulario
    formulario.addEventListener("submit", function (evento) {

        // Evitar que la página se recargue
        evento.preventDefault();

        // Obtener el valor ingresado
        const valorCelsius = celsius.value.trim();

        // Validar que el campo no esté vacío
        if (valorCelsius === "") {
            alert("Por favor, ingresa una temperatura en grados Celsius.");
            celsius.focus();
            return;
        }

        // Convertir el valor a número
        const temperaturaCelsius = Number(valorCelsius);

        // Validar que sea un número
        if (isNaN(temperaturaCelsius)) {
            alert("Por favor, ingresa un valor numérico válido.");
            celsius.focus();
            return;
        }

        // Realizar la conversión
        const temperaturaFahrenheit = (temperaturaCelsius * 9 / 5) + 32;

        // Mostrar el resultado
        fahrenheit.value = temperaturaFahrenheit + "°F";
    });
});

