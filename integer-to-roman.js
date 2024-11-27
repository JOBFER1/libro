/**
* create a node.js app that gets a integer numeral via user input
* and outputs the correct roman value
*/

// get the integer numeral from the user
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter an integer: ", function(integerNumeral) {
    var integerNumeral = parseInt(integerNumeral);
    
    if (isNaN(integerNumeral)) {
        console.log('Invalid input. Please enter a valid integer'); 
        rl.close();
        //exit the application
        //process.exit();
        return
    }        

    console.log("The roman value of " + integerNumeral + " is " + intToRoman(integerNumeral));
    rl.close();
});

// convert the integer numeral to a roman numeral
function intToRoman(integerNumeral) {
    var romanNumeral = '';
    var romanNumeralArray = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    var romanNumeralArrayValues = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var romanNumeralArrayLength = romanNumeralArray.length;

    for (var i = 0; i < romanNumeralArrayLength; i++) {
        while (integerNumeral >= romanNumeralArrayValues[i]) {
            romanNumeral += romanNumeralArray[i];
            integerNumeral -= romanNumeralArrayValues[i];
        }
    }

    return romanNumeral;
}

