///////////////////////// DO NOT CHANGE ////////////////////////////////////
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
/* password requirements: at least 8 characters & no more that 128
special characters (include or no lowercase, upper case, numeric and/or special characters) 
*/
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
///////////////////////// DO NOT CHANGE ABOVE HERE /////////////////////////

function generatePassword() {
  /////////////////////////// WRITE YOUR CODE HERE /////////////////////////
  /* if (How many characters do you want you password to be) 
      else if
      else (you fucked up start again)
    */

    var charLenghth = prompt("WHATS UP"); //parseint 
    console.log(charLenghth)

    if (charLenghth <= 7) {
      alert("Please choose a number between 8-128")
    }

    if (charLenghth >= 128) {
      alert ("Please choose a number between 8-128")
    }
    
    //empty array to store info 
    //for loop
    //fart=[] (writing)
  
    //.join method (array to string)
  

    var isMichi = confirm ("Is this michi")

    var auggie = confirm("Lowercase?")
    console.log (michi,auggie)
    //if password is less than or equal 7 then function ends
    // if password is between 8-128 then ask if you want upper case characters CONFIRM (BOOLEAN), then CONFIRM lower case, CONFIRM numeric, CONFIRM specials 
    //boolean OR *mdn boolean operators 



//VARIABLES    
}
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    console.log(upperCase)

var lowerCase = upperCase.map(element => {
  return element.toLowerCase();
});
  console.log(lowerCase)

var fancy = [",", "!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", 
    ":", ";", "<", "=", ">", "?", "@", "[", "^", "`", "{", "|", "}", "~"]
  console.log(fancy)

/* will probably need to use "prompt" 
when I press genterate password, prompt box asks for number of characters 
5 prompts: lenghth of password (PROMPT), lowercase, uppercase, numeric, & special characters (CONFIRM) VARIABLES 

For loop potentially for lower case upper case 

If not right characters - alert box (ok only)

alert - just shows the message - ok 
prompt - input box with ok and cancel 
confirm - else (message with an ok & cancel)


GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
*/