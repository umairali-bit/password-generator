
var Numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var SpecialChars = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var AlphaLowers = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var AlphaUppers = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var Numbers = Numbers .concat(SpecialChars, AlphaLowers, AlphaUppers);
console.log(Numbers); 

var generatePassword = function() {
   var length = window.prompt ('How many characters would you like in your password? Please choose between 8 - 128');

   if (length === "" || length === null) {
      alert("Please provide a valid number! Try again. ");
     return generatePassword();
   }
   if (length < 8 || length > 128) {
    alert("Please provide numbers between 8 - 128");
    return generatePassword();
   }
   var includeNumbers = confirm ("Click ok if you want Numbers in your password");
   var includeSpecialchars = confirm ("Click ok if you want special characters");
   var includeLowercasealpha = confirm ("Click ok if you want lowercase alphabets");
   var includeUppercasealpha = confirm ("Click ok if you want uppercase alphabets");

   do {

     alert("You must choose atleast one criteria");
     generatePassword();

   }
   while (
    includeNumbers === false &&
    includeSpecialchars === flase &&
    includeLowercasealpha === false &&
    includeUppercasealpha === false);
}
   
 


  

   













// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


