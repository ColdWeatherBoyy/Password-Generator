// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


  // https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
  // let passwordLength = Math.floor(Math.random()* ((129-8) + 8));
  // console.log(passwordLength);
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

let upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
let lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let digits = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
let specialCharacters =[" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

// pseudo code 

generatePassword();

function generatePassword() {

  // user select length

  var userLength = selectLength();
  console.log(userLength);

  function selectLength() {
    var passwordLength = Number.parseFloat(prompt("How long would you like your password to be? Please select a value between 8 and 128."));

      if (isNaN(passwordLength)) {
        alert("That's not a number, try again!");
        return selectLength();
      } else if (((passwordLength % 1) > 0) && (passwordLength < 8 || passwordLength > 128)) {
        alert("Please select an integer that is within the specified range.");
        return selectLength();
      } else if ((passwordLength % 1) > 0) {
        alert("Integers only please! Try again.");
        return selectLength();
      } else if (passwordLength < 8 || passwordLength > 128) {
        alert("That number is outside the range, please try again.");
        return selectLength();
      } else if (passwordLength >= 8 && passwordLength <=128) {
        alert("Okay, moving on!");
        return passwordLength;
      }
  } 

  // select uppercase or not 
  var userUpper = selectUpper();
  console.log(userUpper);

  function selectUpper() {
    var upperSelection = confirm("Would you like your password to include uppercase letters?");
    
    if (upperSelection) {
      alert("Okay, we'll include uppercase letters!");
      return upperSelection;
    } else {
      alert("Okay, no uppercase letters will be included.")
    }
  }

    // select uppercase or not 
    var userLower = selectLower();
    console.log(userLower);
  
    function selectLower() {
      var lowerSelection = confirm("Would you like your password to include Lowercase letters?");
      
      if (lowerSelection) {
        alert("Okay, we'll include lowercase letters!");
        return lowerSelection;
      } else {
        alert("Okay, no lowercase letters will be included.")
      }
    }

}

// data sets


  // prompt password criteria
//prompt for password length from 8 to 128

// prompts for character types to include
  // prompts for uppercase yes or no
  // prompts for character yes or no
  // prompts for lowercase yes or no
  // prompts for numeric yes or no
  // prompts for special characters yes or now
// confirm at least one character type selected.

//password generated from paramters above

// password is displayed in alert or written to page