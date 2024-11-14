// Arrow function to validate if the form has "nombre", "email" and "mensaje" values.

let nombre = "Jovi";
let email = "practice@javascript.com";
let mensaje = "This is a excercise with JavasCript code.";

let verifica = (texto1, texto2, texto3) => {
    if (texto1 && texto2 && texto3) {
        console.log("¡Formulario enviado con éxito!");
    } else {
        console.log("No están los 3 datos disponibles");
    }
}

verifica(nombre, email, mensaje);