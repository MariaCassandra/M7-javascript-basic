//Exercicio 1
console.log("Hola mundo!");

//Exercicio 2
alert("Me llamo Maria!");

//Exercicio 3
const firstName = "Maria";
const lastName = "Cassandra";
console.log(firstName + " " + lastName);

//Exercicio 4
let num1 = 23;
let num2 = 6;
let result = num1 + num2;
console.log("La suma entre "+ num1 +" y " + num2 + " es: "+ result);

//Exercicio 5
var nota_examen = 7.5;
if (nota_examen > 5) {
    alert("Felicidades! Has aprobado el examen con un " + nota_examen);
} else {
    alert("Ohh, has suspendido en examen con un " + nota_examen);
}

//Exercicio 6
// cambio de blau a verd
var blueCar = "Tinc un cotxe de color blau.";

console.log(blueCar);

console.log(blueCar.replace("blau", "verd"));

// cambio de las letras
var letter = "o";

console.log(blueCar.replace(new RegExp(letter, "g"), "u"));

//Exercicio 7
var muebles = ['taula', 'cadira', 'ordinador', 'llibreta'];

for (let i=0; i < muebles.length; i++) {
    console.log("L'objecte " + muebles[i] + " està a la posició " + i);
}

//Exercicio 8
