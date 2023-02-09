let upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
let lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
let specialCharacters =[" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {

  // user select lengt


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
        alert("Thanks, here's some more parameters to select!");
        return passwordLength;
      }
  } 

  // prompts for character types to include
  var userCharacters = [];
  selectCriteria();
  function selectCriteria() {
   
    // user selects to use uppercase or not. adds array to userCharacters if relevant
    var userUpper = selectUpper();
    console.log(userUpper);

    function selectUpper() {
      var upperSelection = confirm("Would you like your password to include uppercase letters?");
      
      if (upperSelection) {
        alert("Okay, we'll include uppercase letters!");
        userCharacters.push(...upperCaseLetters);
        return upperSelection;
      } else {
        alert("Okay, no uppercase letters will be included.");
        return upperSelection;
      }
    }

      // user selects to use lowercase or not. adds array to userCharacters if relevant
      var userLower = selectLower();
      console.log(userLower);
    
      function selectLower() {
        var lowerSelection = confirm("Would you like your password to include lowercase letters?");
        
        if (lowerSelection) {
          alert("Okay, we'll include lowercase letters!");
          userCharacters.push(...lowerCaseLetters);
          return lowerSelection;
        } else {
          alert("Okay, no lowercase letters will be included.");
          return lowerSelection;
        }
      }

      // user selects to use special characters or not. adds array to userCharacters if relevant 
      var userSpecial = selectSpecial();
      console.log(userSpecial);
    
      function selectSpecial() {
        var specialSelection = confirm("Would you like your password to include special characters?");
        
        if (specialSelection) {
          alert("Okay, we'll include special characters!");
          userCharacters.push(...specialCharacters);
          return specialSelection;
        } else {
          alert("Okay, no special characters will be included.");
          return specialSelection;
        }
      }

        // user selects to use numbers or not. adds array to userCharacters if relevant 
      var userNumber = selectNumber();
      console.log(userNumber);
    
      function selectNumber() {
        var numberSelection = confirm("Would you like your password to include numbers?");
        
        if (numberSelection) {
          alert("Okay, we'll include numbers!");
          userCharacters.push(...numbers);
          return numberSelection;
        } else {
          alert("Okay, no numbers will be included.");
          return numberSelection;
        }
      }
 
    // confirms at least one character type is selected
    if (!userSpecial && !userUpper && !userLower && !userNumber) {
      alert("Come on, you gotta pick at least one character type. Try again.");
      return selectCriteria();
    } else {
      alert("All right, now we'll do our magic.")
    }
  }

console.log(userCharacters);


var password = "";
for(i=0; i < userLength; i++) {
  password += userCharacters[Math.floor(Math.random() * userCharacters.length)];
  }
 
return password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);