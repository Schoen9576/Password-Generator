// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerSet = "abcdefghijklmnopqrstuvwxyz"
var specialSet = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~"
var numberSet = "1234567890"
var upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

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
  var passwordLength = prompt("How long do you want your password to be? Must be > 8 but <128");
  if (isNaN(passwordLength)){
    alert("Please enter a number");
    generatePassword()
  }
  else if (passwordLength < 8 || passwordLength > 128){
    alert("password must be minimum 8 characters and a maximum of 128")
    generatePassword()
  };

  //acquiring whether the user wants nummbers or upper, lower, or special charadcters
  
  var lowerCase = confirm("Would you like lower case letters?")
  console.log(lowerCase)
  var upperCase = confirm("Would you like upper case letters?")
  console.log(upperCase)
  var specialChar = confirm("Would you like special characters(such as !%&*)?")
  console.log(specialChar)
  var numbersLog = confirm("Would you like numbers?")
  console.log(numbersLog)

  var userRequest = []
  // applying lower case to the password

  if( lowerCase == true){

    for (var i = 0; i < passwordLength; i++) {

      min= 0
      max= lowerSet.length - 1

      var randomInt = Math.floor(Math.random()*(max-min+1)+min);
      var randomChar = charSet.charAt(randomInt);
      userRequest.push(randomChar)
      }
  }
  
  // appling upper case letters to the password

  if( upperCase == true){

    for (var i = 0; i < passwordLength; i++) {

      min= 0
      max= upperSet.length - 1

      randomInt = Math.floor(Math.random()*(max-min+1)+min);
      randomChar = upperSet.charAt(randomInt);
      userRequest.push(randomChar)
      }
  }
 

  //applying special characters

  if( specialChar == true){

    for (var i = 0; i < passwordLength; i++) {

      min= 0
      max= specialSet.length - 1

      randomInt = Math.floor(Math.random()*(max-min+1)+min);
      randomChar = specialSet.charAt(randomInt);
      userRequest.push(randomChar)
      }
  }
  
  //applying numbers 

  if( numbersLog == true) {

    for (var i = 0; i < passwordLength; i++) {

      min= 0
      max= numberSet.length - 1

      randomInt = Math.floor(Math.random()*(max-min+1)+min);
      randomChar = numberSet.charAt(randomInt);
      userRequest.push(randomChar)
      }
  }
  console.log(userRequest)
  userRequest = userRequest.join("")
  console.log(userRequest)

  var finalPassword = []

  for(var i = 0; i < passwordLength; i++) {
    min = 0
    max = userRequest.length - 1

    randomInt = Math.floor(Math.random()*(max-min+1)+min);
      randomChar = userRequest.charAt(randomInt);
      finalPassword.push(randomChar) 
  }

  finalPassword = finalPassword.join("")

  return finalPassword
}