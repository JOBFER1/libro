//Copia literalmente aquí el contenido del fichero roman-to-integer.js
// y modifica el código para que convierta de números enteros a números romanos.

//Obtener el entero por teclado (no usar la función prompt) 
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter an integer: ", function(integer) {
    var integer = parseInt(integer);

    //Validar que se ingrese un entero y no un string
    if (isNaN(integer)) {
        console.log('Invalid input. Please enter an integer between 1 and 3999');
        rl.close();
        return
    }

    if (integer < 1 || integer > 3999) {
        console.log('Invalid input. Please enter an integer between 1 and 3999'); 
        rl.close();
        return
    }        
    console.log("The roman numeral value of " + integer + " is " + intToRoman(integer));
    rl.close();
});

// convert the integer to a roman numeral
function intToRoman(integer) {
    var romanNumeral = '';
    var romanNumeralArray = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    var romanNumeralArrayValues = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var romanNumeralArrayLength = romanNumeralArray.length;

    for (var i = 0; i < romanNumeralArrayLength; i++) {
        while (integer >= romanNumeralArrayValues[i]) {
            romanNumeral += romanNumeralArray[i];
            integer -= romanNumeralArrayValues[i];
        }
    }
    return romanNumeral;
}

