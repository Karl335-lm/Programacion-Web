// Esperar a que el documento HTML esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {

    // Obtener los elementos del formulario
    const formulario = document.querySelector(".formulario");
    const edad = document.getElementById("Edad");
    const resultado = document.getElementById("vota");

    // Evento al enviar el formulario
    formulario.addEventListener("submit", function (evento) {

        // Evitar que la página se recargue
        evento.preventDefault();

        // Obtener el valor ingresado
        const valorEdad = edad.value.trim();

        // Validar que el campo no esté vacío
        if (valorEdad === "") {
            resultado.value = "Ingresa tu edad";
            return;
        }

        // Convertir el valor a número
        const edadNumero = Number(valorEdad);

        // Validar que sea un número positivo
        if (isNaN(edadNumero) || edadNumero <= 0) {
            resultado.value = "Ingresa una edad válida";
            return;
        }

        // Verificar si puede votar
        if (edadNumero >= 18) {
            resultado.value = "Puedes votar";
        } else {
            resultado.value = "No puedes votar";
        }
    });
});