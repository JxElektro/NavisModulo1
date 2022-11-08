// #1 Console.log('Hello World');
console.log("Hola Mundo");


// #2 Variables and Data Types
let nombre = "Jhen";
let edad = 32;
let mayorDeEdad = true;

const direccion = {
  calle: "Calle 1",
  numero: 123
}

const coloresFavoritos = ["Rojo", "Azul", "Verde"];
const lenguajesFavoritos = ["Javascript", "Java", "Python"];

let mejorLenguaje = lenguajesFavoritos[0];
console.log(mejorLenguaje);
let peorLenguaje = lenguajesFavoritos[2];
console.log(peorLenguaje);

// #3 Operadores
//Sum
let numero1 = 10;
let numero2 = 20;

let sum = numero1 + numero2;
console.log(sum);

// Rest
let numero3 = 10;
let numero4 = 20;

let rest = numero3 - numero4;
console.log(rest);

// Multiplication
let numero5 = 10;
let numero6 = 20;

let multiplication = numero5 * numero6;
console.log(multiplication);

// Division
let numero7 = 10;
let numero8 = 20;

let division = numero7 / numero8;
console.log(division);

// #4 Conditionals
let saludo = "Hola";

if (saludo === "Hola") {
  console.log("ha saludado");
}

// #5 Loops
const pokemon = [ "Pikachu", "Charmander", "Bulbasaur" ];
for (let i = 0; i < pokemon.length; i++) { console.log(pokemon[i]);}

// #6 Conditional

const pokemon2 = [
  pikachu = {
    nombre: "Pikachu",
    tipo: "Electrico"
  },
  charmander = {
    nombre: "Charmander",
    tipo: "Fuego"
  },
  squirtle = {
    nombre: "Squirtle",
    tipo: "Agua"
  }
];

if (pokemon2[1].tipo === "Fuego") {
  console.log("Es un pokemon Fuego");
}