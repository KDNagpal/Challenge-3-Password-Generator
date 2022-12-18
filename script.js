function generatePassword(){
let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let special = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
let possibleChoice = [];

//asking for number of characters
const numberOfCharacters = prompt ('How many characters would you like in your password? (Choose a number between 8 and 128.)');
if (numberOfCharacters < 8 || numberOfCharacters > 128) {
  return 'Please choose a valid number!';
}
  else { alert ('Your password will be ' + numberOfCharacters + ' characters long!!');
}

//asking for numbers
hasNumbers = confirm('Would you like to use numbers?');
  if (hasNumbers) {
    alert('Your password WILL have numbers!!');
  }
  else {
    alert('Your password WON\'T have numbers!!');
  }

//asking for upper case
hasUpper = confirm('Would you like any uppercase letters?');
  if (hasUpper) {
    alert('Your password WILL have uppercase letters!!');
  }
  else {
    alert('Your password WON\'T have uppercase letters!!');
  }

//asking for lower case
const hasLower = confirm('Would you like any lowercase letters?');
if (hasLower) {
  const lowercaseOn = alert('Your password WILL have lowercase letters!!');
}
else {
  alert('Your password WON\'T have lowercase letters!!');
}

//asking for special characters
hasSpecial = confirm('Do you want special characters?');
if (hasSpecial) {
  alert('Your password WILL have special characters!!');
}
else {
  alert('Your password will WON\'T have special characters.');
}

if (hasNumbers === false && hasUpper === false && hasLower === false && hasSpecial === false) {
  return 'You MUST choose at least one of the previous character choices!!!';
};

// groupes user choices

if (hasNumbers) {
  possibleChoice = possibleChoice.concat(numbers);
}
if (hasLower) {
  possibleChoice = possibleChoice.concat(lowerCase);
}
if (hasUpper) {
  possibleChoice = possibleChoice.concat(upperCase);
}
if (hasSpecial) {
  possibleChoice = possibleChoice.concat(special);
}

//creates random password
let genPassword = ""
  for (let i = 0; i < numberOfCharacters; i++) {
    let random =[Math.floor(Math.random() * possibleChoice.length)];
    genPassword = genPassword + possibleChoice[random];
  }
  return genPassword;
};

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);