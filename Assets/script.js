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

      
} 
  