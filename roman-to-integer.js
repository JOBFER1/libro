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

    // If user types 'help', definition of roman numerals will be displayed
    if (romanNumeral === 'HELP') {
        console.log('Roman numerals are the numbers that were used in ancient Rome, which employed combinations of letters from the Latin alphabet (I, V, X, L, C, D, M).');
        console.log('The numbers 1 to 10 can be expressed in Roman numerals as follows:');
        console.log('1: I, 2: II, 3: III, 4: IV, 5: V, 6: VI, 7: VII, 8: VIII, 9: IX, 10: X');
        rl.close();
        return;
    }
        
    if (!isRomanNumeral(romanNumeral)) {
        console.log('Invalid input. Please enter a valid roman numeral'); 
        rl.close();
        //exit the application
        //process.exit();
        return
    }        

    console.log("The integer value of " + romanNumeral + " is " + romanToInt(romanNumeral));
    rl.close();
});

// check if the input is a valid roman numeral
function isRomanNumeral(romanNumeral) {
    var romanNumeralArray = romanNumeral.split('');
    var romanNumeralArrayLength = romanNumeralArray.length;

    for (var i = 0; i < romanNumeralArrayLength; i++) {
        if (romanNumeralArray[i] !== 'I' && romanNumeralArray[i] !== 'V' && romanNumeralArray[i] !== 'X' && romanNumeralArray[i] !== 'L' && romanNumeralArray[i] !== 'C' && romanNumeralArray[i] !== 'D' && romanNumeralArray[i] !== 'M') {
            return false;
        }
    }
    return true;
}

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
