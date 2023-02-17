// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var charLength = prompt ("Enter your desired character length.", 8); //asks user for desired char length
  if (charLength < 8 || charLength > 128) { //if input does not meet criteria, then output alert
    alert ("Please input a character length between 8 and 128 characters.");
    return(0);
  } 
  if (charLength => 8 && charLength <= 128) { 
    var lowerCase = confirm ("Do you want to include lower case letters?");  //prompts to check what the user wants to include in the pw
    var upperCase = confirm ("Do you want to include upper case letters?");
    var numeric = confirm ("Do you want to include numbers?");
    var specialChar = confirm ("Do you want to include special characters?");
  }

  var password = generatePassword(charLength, lowerCase, upperCase, numeric, specialChar);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword(charLength, lowerCase, upperCase, numeric, specialChar) { 
  var charSet = "";
  if (lowerCase) {
    charSet += "abcdefghijklmnopqrstuvwxyz";
    if (upperCase) {
      charSet += "ABCDEFHIJKLMNOPQRSTUVWXYZ";
      if (numeric) {
        charSet += "0123456789";
        if (specialChar) {
          charSet += "!@#$%^&*";
        }
      }
    }
  }

  var returnValue = "";

  for (var i = 0, n = charSet.length; i < charLength; i++) {
    returnValue += charSet.charAt (Math.floor (Math.random () * n));  // random characters generated
  }

return returnValue; //random pw generated i think

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
