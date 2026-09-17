document.addEventListener("DOMContentLoaded", function () {

    const formulario = document.querySelector(".formulario");
    const numerosInput = document.getElementById("VariosNum");
    const mayor = document.getElementById("numMayor");
    const menor = document.getElementById("numMenor");
    const promedio = document.getElementById("nPromedio");

    formulario.addEventListener("submit", function (evento) {

        evento.preventDefault();

        const entrada = numerosInput.value.trim();

        // Verificar que el campo no esté vacío
        if (entrada === "") {
            mayor.value = "Ingresa números";
            menor.value = "Ingresa números";
            promedio.value = "Ingresa números";
            return;
        }

        // Separar los números por comas y convertirlos a números
        const numeros = entrada.split(",").map(Number);

        // Verificar que todos sean números válidos
        if (numeros.some(isNaN)) {
            mayor.value = "Valores inválidos";
            menor.value = "Valores inválidos";
            promedio.value = "Valores inválidos";
            return;
        }

        // Calcular el número mayor y menor
        const numeroMayor = Math.max(...numeros);
        const numeroMenor = Math.min(...numeros);

        // Calcular el promedio
        const suma = numeros.reduce((acc, valor) => acc + valor, 0);
        const numeroPromedio = suma / numeros.length;

        // Mostrar resultados
        mayor.value = numeroMayor;
        menor.value = numeroMenor;
        promedio.value = numeroPromedio;
    });
});