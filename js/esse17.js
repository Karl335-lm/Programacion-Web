const crearGestorTareas = () => {
    const CLAVE_STORAGE = "tareasApp";
    const obtenerTareas = () => {
        const tareasGuardadas = localStorage.getItem(CLAVE_STORAGE);
        return tareasGuardadas ? JSON.parse(tareasGuardadas) : [];
    };
    const guardarTareas = (tareas) => {
        localStorage.setItem(CLAVE_STORAGE, JSON.stringify(tareas));
    };
    const renderizarTareas = () => {
        const lista = document.getElementById("listaTareas");
        lista.innerHTML = "";
        const tareas = obtenerTareas();

        tareas.forEach((tarea, index) => {
            const li = document.createElement("li");
            li.className = "item-tarea";
            li.innerHTML = `
                <span>${tarea.texto}</span>
                <button type="button" class="btn-eliminar" onclick="gestor.eliminarTarea(${index})">Eliminar</button>
            `;

            lista.appendChild(li);
        });
    };

    const agregarTarea = () => {
        const input = document.getElementById("tarea");
        const texto = input.value.trim();

        if (texto === "") {
            Swal.fire({
                icon: "warning",
                title: "Campo vacío",
                text: "Por favor, escribe una tarea antes de agregarla."
            });
            return;
        }

        const tareas = obtenerTareas();
        tareas.push({ texto: texto });
        guardarTareas(tareas);

        input.value = "";
        input.focus();
        renderizarTareas();

        Swal.fire({
            icon: "success",
            title: "Agregada",
            text: "Tarea guardada correctamente.",
            timer: 1200,
            showConfirmButton: false
        });
    };
    const eliminarTarea = (index) => {
        Swal.fire({
            title: "¿Deseas eliminar esta tarea?",
            text: "Esta acción no se puede deshacer.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#e74c3c",
            cancelButtonColor: "#6c757d",
            confirmButtonText: "Sí, eliminar",
            cancelButtonText: "Cancelar"
        }).then((result) => {
            if (result.isConfirmed) {
                const tareas = obtenerTareas();
                tareas.splice(index, 1);
                guardarTareas(tareas);
                renderizarTareas();

                Swal.fire({
                    icon: "success",
                    title: "Eliminada",
                    text: "La tarea ha sido retirada.",
                    timer: 1200,
                    showConfirmButton: false
                });
            }
        });
    };
    return {
        agregarTarea,
        eliminarTarea,
        renderizarTareas
    };
};

const gestor = crearGestorTareas();
document.addEventListener("DOMContentLoaded", () => {
    gestor.renderizarTareas();
});