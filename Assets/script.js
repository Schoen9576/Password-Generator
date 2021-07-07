// Assignment Code
var generateBtn = document.querySelector("#generate");
var charSet = "abcdefghijklmnopqrstuvwxyz"
var specialSet = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
var numberSet = "1234567890"

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  // acquiring length of password and limiting it to between 8 and 128
  var passwordLength = parseInt(prompt("How long do you want your password to be? Must be > 8 but <128"))
  if (isNaN(passwordLength)){
    alert("Please enter a number");
    generatePassword()
  }
  else if (passwordLength < 8 || passwordLength > 128){
    alert("password must be minimum 8 characters and a maximum of 128")
    generatePassword()
  }

  //acquiring whether the user wants nummbers or upper, lower, or special charadcters
  
  var lowerCase = confrim("Would you like lower case letters?")
  var upperCase = confirm("Would you like upper case letters?")
  var special = confrim("Would you like special characters(such as !%&*)?")
  var numbers = confirm("Would you like numbers?")

  // applying lower case to the password

  if( lowerCase === true){

    for (var i = 0; i < passwordLength; i++) {

      min= 0
      max= charSet.length - 1

      randomInt = Math.floor(Math.random()*(max-min+1)+min);
      randomChar = charSet.charAt(randomInt);
      userRequest.push(randomChar)
      }
  }
  
  // appling upper case letters to the password

} 
  