// Archivo principal de la aplicación
// Aquí se inicializa y ejecuta la lógica principal

import Cl_sobre from "./Cl_sobre.js";
import Cl_gestorSobres from "./Cl_gestorSobres.js";

const sobre1: Cl_sobre = new Cl_sobre(10, 5);
const sobre2: Cl_sobre = new Cl_sobre(20, 2);
const sobre3: Cl_sobre = new Cl_sobre(100, 4);
const sobre4: Cl_sobre = new Cl_sobre(50, 3);

const gestorSobres: Cl_gestorSobres = new Cl_gestorSobres();

gestorSobres.procesarSobre(sobre1);
gestorSobres.procesarSobre(sobre2);
gestorSobres.procesarSobre(sobre3);
gestorSobres.procesarSobre(sobre4);

console.log(`El sobre numero 1: $${sobre1.dineroSobre()}`);
console.log(`El sobre numero 2: $${sobre2.dineroSobre()}`);
console.log(`El sobre numero 3: $${sobre3.dineroSobre()}`);
console.log(`El sobre numero 4: $${sobre4.dineroSobre()}`);
console.log(`El total entre todos los sobres es de: $${gestorSobres.totalDineroSobres()}`);

let salida: HTMLElement | null = document.getElementById("salida");

if (salida !== null) {
    salida.innerHTML = `El sobre numero 1: $${sobre1.dineroSobre()}<br>
El sobre numero 2: $${sobre2.dineroSobre()}<br>
El sobre numero 3: $${sobre3.dineroSobre()}<br>
El sobre numero 4: $${sobre4.dineroSobre()}<br>
El total entre todos los sobres es de: $${gestorSobres.totalDineroSobres()}`; 
} else console.error("Elemento con id 'salida' no encontrado.");