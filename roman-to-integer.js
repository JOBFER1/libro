/**
* create a node.js app that gets a roman numeral via user input
* and outputs the correct integer value
*/


// get the roman numeral from the user
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a roman numeral: ", function(romanNumeral) {
    var romanNumeral = romanNumeral.toUpperCase();
    console.log("The integer value of " + romanNumeral + " is " + romanToInt(romanNumeral));
    rl.close();
    });

// convert the roman numeral to an integer

function romanToInt(romanNumeral) {
    //var romanNumeral = romanNumeral.toUpperCase();
    var romanNumeralArray = romanNumeral.split('');
    var romanNumeralArrayLength = romanNumeralArray.length;
    var romanNumeralArrayValues = [];
    //var romanNumeralArrayValuesLength = romanNumeralArrayValues.length;
    var romanNumeralArrayValuesSum = 0;
    //var romanNumeralArrayValuesSumFinal = 0;

    for (var i = 0; i < romanNumeralArrayLength; i++) {
        switch (romanNumeralArray[i]) {
            case 'I':
                romanNumeralArrayValues.push(1);
                break;
            case 'V':
                romanNumeralArrayValues.push(5);
                break;
            case 'X':
                romanNumeralArrayValues.push(10);
                break;
            case 'L':
                romanNumeralArrayValues.push(50);
                break;
            case 'C':
                romanNumeralArrayValues.push(100);
                break;
            case 'D':
                romanNumeralArrayValues.push(500);
                break;
            case 'M':
                romanNumeralArrayValues.push(1000);
                break;
            default:
                console.log("Invalid roman numeral");
                break;
        }
    }

    for (var i = 0; i < romanNumeralArrayValues.length; i++) {
        if (romanNumeralArrayValues[i] < romanNumeralArrayValues[i + 1]) {
            romanNumeralArrayValuesSum += romanNumeralArrayValues[i + 1] - romanNumeralArrayValues[i];
            i++;
        } else {
            romanNumeralArrayValuesSum += romanNumeralArrayValues[i];
        }
    }

    return romanNumeralArrayValuesSum;
}
