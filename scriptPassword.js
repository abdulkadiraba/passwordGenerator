// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var character = Number(prompt("how many characters would you like between 8-128?"))
  while(character < 8 || character > 128 ) {
    character = Number(prompt("how many characters would you like between 8-128?"))
  }
  var lowercaseCheck = confirm("Do you want lowercase? hit OK for yes and CANCEL for no.")
  var uppercaseCheck = confirm("do you want uppercase? hit OK for yes and CANCEL for no.")
  var numbersCheck = confirm("do you want numbers? hit OK for yes and CANCEL for no")
  var specialCharCheck = confirm("do you want special characters? hit OK for yes and CANCEL for no")
  while(!lowercaseCheck && !uppercaseCheck && !numbersCheck && !specialCharCheck) {
    lowercaseCheck = confirm("Do you want lowercase? hit OK for yes and CANCEL for no.")
    uppercaseCheck = confirm("do you want uppercase? hit OK for yes and CANCEL for no.")
    numbersCheck = confirm("do you want numbers? hit OK for yes and CANCEL for no")
    specialCharCheck = confirm("do you want special characters? hit OK for yes and CANCEL for no")
  } 

  var password = generatePassword(lowercaseCheck, uppercaseCheck, numbersCheck, specialCharCheck,character);
  var passwordText = document.querySelector("#password");
  //var password = "Aba"
  passwordText.value = password;


}
function generatePassword(lowercaseCheck, uppercaseCheck, numbersCheck, specialCharCheck,characterCount){ 
  var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s","t", "u", "v", "w", "x", "y", "z"];
  var uppercase = ["A", "B", "C","D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  var specialChar = ["#","$","*"];
  var choiceArray = [] 
  if(lowercaseCheck){
    choiceArray.push(...lowercase)
    console.log(choiceArray)
  }
  if(uppercaseCheck){
    choiceArray.push(...uppercase)  
  }
  if (numbersCheck){
    choiceArray.push(...numbers)
  }
  if(specialCharCheck){
    choiceArray.push(...specialChar)
  }
  var password = ""
  for (var i = 0; i < characterCount; i++){
    var randomIndex = Math.floor(Math.random()*choiceArray.length)
    password += choiceArray[randomIndex]
  }
  return password
} 



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
