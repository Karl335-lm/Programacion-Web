document.addEventListener("DOMContentLoaded", function () {

    const formulario = document.querySelector(".formulario");

    const nombre = document.getElementById("nombre");
    const calificacion = document.getElementById("calf");
    const resultado = document.getElementById("result");

    // Arreglo donde se almacenarán los estudiantes
    const estudiantes = [];

    // Obtener los tres botones
    const botones = document.querySelectorAll(".boton-enviar");

    const botonAgregar = botones[0];
    const botonCalcular = botones[1];
    const botonSiguiente = botones[2];


    // ==============================
    // AGREGAR ESTUDIANTE
    // ==============================
    botonAgregar.addEventListener("click", function () {

        const nombreEstudiante = nombre.value.trim();
        const calificacionEstudiante = Number(calificacion.value);

        // Validar campos vacíos
        if (nombreEstudiante === "" || calificacion.value.trim() === "") {
            resultado.value = "Completa todos los campos";
            return;
        }

        // Validar calificación
        if (
            isNaN(calificacionEstudiante) ||
            calificacionEstudiante < 0 ||
            calificacionEstudiante > 100
        ) {
            resultado.value = "Calificación inválida";
            return;
        }

        // Crear objeto estudiante
        const estudiante = {
            nombre: nombreEstudiante,
            calificacion: calificacionEstudiante
        };

        // Agregar el objeto al arreglo
        estudiantes.push(estudiante);

        resultado.value = "Estudiante agregado";

        // Limpiar campos
        nombre.value = "";
        calificacion.value = "";

        // Regresar el cursor al nombre
        nombre.focus();
    });


    // ==============================
    // CALCULAR RESULTADOS
    // ==============================
    botonCalcular.addEventListener("click", function () {

        // Verificar que haya estudiantes
        if (estudiantes.length === 0) {
            resultado.value = "No hay estudiantes";
            return;
        }

        // Calcular la suma de las calificaciones
        const suma = estudiantes.reduce(
            (total, estudiante) => total + estudiante.calificacion,
            0
        );

        // Calcular promedio
        const promedio = suma / estudiantes.length;

        // Obtener calificación mayor
        const calificacionMaxima = Math.max(
            ...estudiantes.map(estudiante => estudiante.calificacion)
        );

        // Obtener calificación menor
        const calificacionMinima = Math.min(
            ...estudiantes.map(estudiante => estudiante.calificacion)
        );

        // Buscar estudiante con calificación mayor
        const estudianteMayor = estudiantes.find(
            estudiante => estudiante.calificacion === calificacionMaxima
        );

        // Buscar estudiante con calificación menor
        const estudianteMenor = estudiantes.find(
            estudiante => estudiante.calificacion === calificacionMinima
        );

        // Mostrar resultados
        resultado.value =
            "Promedio: " + promedio.toFixed(2) +
            " | Mayor: " + estudianteMayor.nombre +
            " | Menor: " + estudianteMenor.nombre;
    });


    // ==============================
    // SIGUIENTE
    // ==============================
    botonSiguiente.addEventListener("click", function () {

        // Vaciar completamente el arreglo
        estudiantes.length = 0;

        // Limpiar campos
        nombre.value = "";
        calificacion.value = "";
        resultado.value = "";

        // Regresar el cursor al nombre
        nombre.focus();
    });


    // Evitar que el formulario recargue la página
    formulario.addEventListener("submit", function (evento) {
        evento.preventDefault();
    });

});