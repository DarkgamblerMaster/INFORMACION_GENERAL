"use strict"

let mensaje_consola = "Este es un mensaje \
de consola";

let mensaje_prompt = "Ingrese su nombre";

let mensaje_alert = "Este es un mensaje \
alert";

// mensaje de terminal
console.log(mensaje_consola);

// mensaje de alert que se despliega en una
// ventana propia
alert(mensaje_alert);


// peticion de datos al usuario
let peticion = prompt(mensaje_prompt);

// muestra en una ventana el nombre ingresado
alert("su nombre es: " + peticion);

// muestra en la terminal el nombre ingresado
console.log("su nombre es: " + peticion);

// mensaje escrito en el html
document.write("su nombre es: " + peticion);
