/*
Ejercicios de Strings
Escribe tu solución debajo de cada enunciado y comprueba el resultado en la consola (F12).
Las soluciones están en soluciones/03-Strings/js/soluciones.js
*/

// Ejercicio 1
// Escribe un programa que convierta una cadena de texto a mayúsculas utilizando un método de String.
console.log("--- Ejercicio 1 ---");

// Escribe aquí tu solución
let MuestraMayus = "Esto sale en mayusculas";
 console.log(MuestraMayus.toUpperCase())

// Ejercicio 2
// Dado el texto "JavaScript es un lenguaje de programación", extrae la palabra "lenguaje" utilizando un método de String.
console.log("--- Ejercicio 2 ---");

// Escribe aquí tu solución
let lenguaje = "JavaScript es un lenguaje de programación"
console.log(lenguaje.substring(17, 25 )); // "lenguaje"


// Ejercicio 3
// Muestra por consola el siguiente valor de texto sin los espacios en blanco del inicio y final.
console.log("--- Ejercicio 3 ---");
let texto = "   La vida en la Selva   ";

// Escribe aquí tu solución
console.log(texto.trim())


// Ejercicio 4
// Comprueba si las siguientes cadenas de texto terminan con la palabra "programación".
// Muestra el resultado por consola.
console.log("--- Ejercicio 4 ---");
const texto1 = "Estoy estudiando JavaScript";
const texto2 = "JavaScript es un lenguaje de programación";

// Escribe aquí tu solución
console.log(texto1)
console.log(texto1.split("  "))
console.log(texto1.endsWith("programacion"))

console.log(texto2)
console.log(texto2.split("programación"))
console.log(texto2.endsWith("programación"))


// Ejercicio 5
// Dado el texto "Aprender JavaScript es divertido", reemplaza la palabra "divertido" por "fascinante" utilizando un método de String.
console.log("--- Ejercicio 5 ---");

// Escribe aquí tu solución

let ejercicio5 = "Aprender JavaScript es divertido"
console.log(ejercicio5.replace("divertido","fascinante"))


// Ejercicio 6
// Muestra por consola la cantidad de caracteres que contiene la variable texto3.
// Muestra también la cantidad de caracteres que contiene sin contar los espacios del principio y final.
console.log("--- Ejercicio 6 ---");
let texto3 = "  Me lo paso muy bien   ";

// Escribe aquí tu solución
console.log(texto3.length)
console.log(texto3.trim().length)



// Ejercicio 7
// Dado el texto "Hola, mundo", verifica si contiene la palabra "mundo" utilizando un método de String.
console.log("--- Ejercicio 7 ---");

// Escribe aquí tu solución
console.log("hola,mundo".includes("mundo"))


// Ejercicio 8
// Escribe un programa que divida la frase "HTML, CSS, JavaScript, React" en un array de palabras.
console.log("--- Ejercicio 8 ---");

// Escribe aquí tu solución
let dividetexto = ("HTML, CSS, JavaScript, React")
console.log(dividetexto.split(", "))

// Ejercicio 9
// Devuelve los 5 primeros caracteres de la variable texto4.
console.log("--- Ejercicio 9 ---");
let texto4 = "Escribiendo código";

// Escribe aquí tu solución
console.log(texto4.substring(0, 5))


// Ejercicio 10
// Dado el texto "JavaScript es genial", encuentra la posición de la palabra "genial" utilizando un método de String.
console.log("--- Ejercicio 10 ---");

// Escribe aquí tu solución
let posicionpalabra = ("JavaScript es genial, encuentra la posición de la palabra genial utilizando un método de String.")
console.log(posicionpalabra.indexOf("genial"))

