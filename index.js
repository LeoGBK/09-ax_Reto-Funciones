// Arrow function to validate if the form has "nombre", "email" and "mensaje" values.
let nombre = "Jovi";
let email = "practice@javascript.com";
let mensaje = "This is an excercise with JavasCript code.";

let verifica = (texto1, texto2, texto3) => {
    if (texto1 && texto2 && texto3) {
        console.log("¡Formulario enviado con éxito!");
    } else {
        console.log("Por favor completa todos los campos");
    }
}



// JavaScript code for login section after data form input.
function envioDatos(texto1, texto2, texto3) {
    verifica(texto1, texto2, texto3);
}

envioDatos(nombre, email, mensaje);