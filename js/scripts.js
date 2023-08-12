let nombre = "Esteban";
let apellido = "Beltrán";

//console.log(nombre + " " + apellido);

nombre = "Charly";
apellido = "Beltrán Garcia"

//console.log(nombre + " " + apellido);

/*---------------------------------------------------------------------------------*/

let precioSanitarios = [500, 800, 2000, 9000, 200];

let resultado = 0;

for (let index = 0; index < precioSanitarios.length; index++) {
    resultado += precioSanitarios[index];
}

//console.log(resultado);

/*-----------------------------------------------------------------------------------*/

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let index2 = 0; index2 < numeros.length; index2++) {
    let parOimpar = numeros[index2];
    
    if (parOimpar % 2 == 0) {
        //console.log(parOimpar + " Es PAR")
    } else {
        //console.log(parOimpar + " Es IMPAR")
    }
}

/*------------------------------------------------------------------------------------*/

let nota = 10;

if (nota === 9 || nota === 10) {
    //console.log("Su nota es sobresaliente")
} else if (nota === 8) {
    //console.log("Su nota es notable")
} else if (nota === 7) {
    //console.log ("Su nota está bien")
} else if (nota === 6) {
    //console.log("Su nota es suficiente")
} else if (nota <= 5 && nota >= 0) {
    //console.log("Su nota es insuficiente")
} else {
    //console.log("El valor introducido no está en el rango calificativo")
}

/*-------------------------------------------------------------------------------------*/

//Marcelo








/*--------------------------------------------------------------------------------------*/

const colores = ["verde", "rojo", "azul", "amarillo", "rosa", "negro"];



/*---------------------------------------------------------------------------------------*/

const animales = ["perro", "gato", "peces"];

//console.log(animales);

//animales.push("canario");

//console.log(animales);

//console.log(animales[0]);

//console.log(animales.length);

//console.log(animales.indexOf("canario"));

/*----------------------------------------------------------------------------------*/

const nombres = ["Charly", "Esteban", "Pepe", "Panda", "Victor"];

///*console.log(nombres);

/*for (let index = 0; index < 10; index++) {
    console.log("Esta es la vuelta " + index)
}*/

/*--------------------------------------------------------------------------------------*/

let primero = ["hola", "como", "estan"];

let segundo = [];

for (let index = 0; index < primero.length; index++) {
    segundo.push(primero[index]);
}

//console.log(segundo);

/*------------------------------------------------------------------------------------------*/

let siu = 0;

while (siu < 5) {
    //console.log("La variable es menor que 5")
    siu ++
}
