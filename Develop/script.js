//Assignment Code.


/* This program randomly generates password based on user's choices */


//Arrays containing all the characters needed.
var Numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var SpecialChars = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?", "~",];
var AlphaLowers = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
var AlphaUppers = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];


//main function
var generatePassword = function () {
  var length = window.prompt('How many characters would you like in your password? Please choose between 8 - 128');

  //conforming length of password 
  if (length === "" || length === null) {
    alert("Please provide a valid number! Try again. ");
    return generatePassword();
  }
  if (length < 8 || length > 128) {
    alert("Please provide numbers between 8 - 128");
    return generatePassword();
  }
  //confirming to inculde numbers and/or special characters and/or lowercase alphabets and/or uppercase alphabets
  var includeNumbers = confirm("Click ok if you want Numbers in your password");
  var includeSpecialchars = confirm("Click ok if you want special characters");
  var includeLowercasealpha = confirm("Click ok if you want lowercase alphabets");
  var includeUppercasealpha = confirm("Click ok if you want uppercase alphabets");

  //if no criteria is chosen by the user
  if (
    includeNumbers === false &&
    includeSpecialchars === false &&
    includeLowercasealpha === false &&
    includeUppercasealpha === false)
    {
      alert("You must select atleast one character type.");
      return generatePassword();
      
    }
     //empptyArray to push password
     let emptyArray = [];
     //password choices to include in password 
     let randChoice =[];

    //if user choose to include special characters
    //turns false if user input is false
    if (includeSpecialchars)
    {
      randChoice = randChoice.concat(SpecialChars)
      console.log (randChoice);
      
    }
    //if user choose to include special characters and numbers
    if (includeNumbers)
    {
      randChoice= randChoice.concat(Numbers)
      console.log (randChoice);
      
    }
    //if user choose to include special characters numbers and lowercase alphabets
    if (includeLowercasealpha)
    {
      randChoice = randChoice.concat(AlphaLowers)
      console.log (randChoice);
      
    }
    //if user choose to include special characters numbers lowercase alphabets and uppercase alphabets
    if (includeUppercasealpha)
    {
      randChoice = randChoice.concat(AlphaUppers)
      console.log (randChoice);
      
    }
    
    //for loop to be aligned with our length
    for (var i = 0; i < length; i++) {
      let randomPassword = [Math.floor(Math.random() * randChoice.length)];
      emptyArray.push(randChoice[randomPassword]);
      console.log(randomPassword)
    }
    return emptyArray.join("");
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


