
document.addEventListener("DOMContentLoaded", () => {
// ==========================================
// FUNCIONES FLECHA
// ==========================================

// Función para sumar
const sumar = (a, b) => a + b;

// Función para restar
const restar = (a, b) => a - b;

// Función para multiplicar
const multiplicar = (a, b) => a * b;

// Función para dividir
const dividir = (a, b) => b !== 0 ? a / b : 'Error: División por cero';


// ==========================================
// FUNCIÓN PRINCIPAL
// ==========================================

const calcularOperacion = (operacion) => {

    // Obtener los valores de los inputs
    const numero1 = document.getElementById("num1").value;
    const numero2 = document.getElementById("num2").value;


    // ==========================================
    // VALIDAR CAMPOS VACÍOS
    // ==========================================

    if (numero1 === "" || numero2 === "") {

        Swal.fire({
            icon: "error",
            title: "Campos vacíos",
            text: "Por favor, ingresa los dos números."
        });

        return;
    }


    // ==========================================
    // CONVERTIR A NÚMEROS
    // ==========================================

    const a = Number(numero1);
    const b = Number(numero2);


    // ==========================================
    // VALIDAR QUE SEAN NÚMEROS
    // ==========================================

    if (isNaN(a) || isNaN(b)) {

        Swal.fire({
            icon: "error",
            title: "Valor no válido",
            text: "Por favor, ingresa únicamente números."
        });

        return;
    }


    // Variable donde guardaremos el resultado
    let resultado;


    // ==========================================
    // SELECCIONAR LA OPERACIÓN
    // ==========================================

    switch (operacion) {

        case "suma":

            resultado = sumar(a, b);

            break;


        case "resta":

            resultado = restar(a, b);

            break;


        case "multiplicacion":

            resultado = multiplicar(a, b);

            break;


        case "division":

            // Validar división entre cero
            if (b === 0) {

                Swal.fire({
                    icon: "error",
                    title: "No se puede dividir",
                    text: "No es posible dividir entre cero."
                });

                return;
            }

            resultado = dividir(a, b);

            break;


        default:

            Swal.fire({
                icon: "error",
                title: "Operación no válida",
                text: "La operación seleccionada no existe."
            });

            return;
    }


    // ==========================================
    // MOSTRAR RESULTADO
    // ==========================================

    document.getElementById("result").value = resultado;

};


// ==========================================
// EVENTOS DE LOS BOTONES
// ==========================================

// Botón Sumar
document.getElementById("Sumar").addEventListener("click", () => {

    calcularOperacion("suma");

});


// Botón Restar
document.getElementById("Restar").addEventListener("click", () => {

    calcularOperacion("resta");

});


// Botón Multiplicar
document.getElementById("Multiplicar").addEventListener("click", () => {

    calcularOperacion("multiplicacion");

});


// Botón Dividir
document.getElementById("Dividir").addEventListener("click", () => {

    calcularOperacion("division");

});

});
