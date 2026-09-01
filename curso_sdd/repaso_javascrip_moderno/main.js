// Este es una alerta en JavaScript
// alert("¡Hola, Mundo!");

// Variables
let nombre = "Juan";
nombre = "Pedro"; // Reasignación de la variable

// Mostrar el valor de la variable en la consola
console.log(nombre);

// Constantes
const apellido = "Pérez"; // No se puede reasignar el valor de una constante
const altura = 1.75;

// Mostrar el valor de la constante en la consola
console.log(nombre);
console.log(altura);

// Concatenacion de variables
let concatenacion = "Mi nombre es " + nombre + " " + apellido + " y mi altura es " + altura + " metros.";
console.log(concatenacion);

// Selecion de elementos del DOM
let datos = document.querySelector("#datos");
datos.innerHTML = `
    <hr />
    <h1>Soy la caja de datos</h1>
    <h2>Mi nombre es: ${concatenacion}</h2>
`;