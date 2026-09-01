// Este es una alerta en JavaScript
// alert("¡Hola, Mundo!");

// Variables
let nombre = "Juan";
nombre = "Pedro"; // Reasignación de la variable

// Mostrar el valor de la variable en la consola
console.log(nombre);

// Constantes
const apellido = "Pérez"; // No se puede reasignar el valor de una constante

// Otra variable
let altura = 1.75;

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

// Condicionales
altura = 1.85;
if (altura >= 1.85){
    datos.innerHTML += "<h1>Eres una persona alta</h1>";
} else {
    datos.innerHTML += "<h1>Eres una persona baja</h1>";
}

// Bucles
for(let year = 2000; year <= 2023; year++){
   datos.innerHTML += `<h2>Estamos en el año: ${year}</h2>`; 
}

// Arrays
let nombres = ["Juan", "Pedro", "María", "Ana"];

let divNombres = document.querySelector("#nombres");

divNombres.innerHTML = nombres[3]; // Muestra el primer elemento del array

// Recorriendo un array con un bucle for
divNombres.innerHTML = "<h1>Listado de nombres:</h1><ul>";

/* nombres.forEach((nombre) => {
    divNombres.innerHTML += `<li>${nombre}</li>`;
});*/

for (let nombre of nombres){
    divNombres.innerHTML += `<li>${nombre}</li>`;
}

divNombres.innerHTML += "</ul>"

// Funciones

const miInformacion = (nombre, altura) => {
    let misDatos = `
        <h1>Mi nombre es: ${nombre}</h1>
        <h2>Mido: ${altura} metros</h2>
    `;
    return misDatos;
}

console.log(miInformacion("Rodolfo", "1.85"));

const imprimir = () => {
    let datos = document.querySelector("#datos"); 
    datos.innerHTML = miInformacion("Rodolfo", "1.85");
}

imprimir();
