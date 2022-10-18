///////////////////////// DO NOT CHANGE ////////////////////////////////////
// Assignment Code
var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
///////////////////////// DO NOT CHANGE ABOVE HERE /////////////////////////

//ARRAY OF OPTIONS FOR COMPUTER TO PICK

var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
console.log(upperCase);

var lowerCase = upperCase.map((element) => {
  return element.toLowerCase();
});
console.log(lowerCase);

var fancy = [
  ",",
  "!",
  "#",
  "$",
  "%",
  "&",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "^",
  "`",
  "{",
  "|",
  "}",
  "~",
];
console.log(fancy);

var nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Write password to the #password input
/* password requirements: at least 8 characters & no more that 128
special characters (include or no lowercase, upper case, numeric and/or special characters) 
*/

function generatePassword() {
  var validChar = [];

  //set boolean for first question: how many characters would you like your password to contain?
  var isValid = false;
  while (!isValid) {
    var charLenghth = prompt(
      "How many characters would you like your password to contain?"
    );
    console.log(charLenghth);

    if (charLenghth >= 8 && charLenghth <= 128) {
      isValid = true;
    } else {
      alert("Please choose a number between 8-128");
    }
  }

  // if password is between 8-128 then ask if you want upper case characters CONFIRM (BOOLEAN), then CONFIRM lower case, CONFIRM numeric, CONFIRM specials
  //boolean OR *mdn boolean operators

  var isUpper = confirm("Do you want uppercase letters?");
  if (isUpper) {
    validChar = validChar.concat(upperCase);
  }
  console.log(isUpper);

  var isLower = confirm("Do you want lowercase letters?");
  if (isLower) {
    validChar = validChar.concat(lowerCase);
  }
  console.log(isLower);

  var isFancy = confirm("Do you want special characters?");
  if (isFancy) {
    validChar = validChar.concat(fancy);
  }
  console.log(isFancy);

  var isNumber = confirm("Do you to use numbers?");
  if (isNumber) {
    validChar = validChar.concat(nums);
  }
  console.log(isNumber);

  //for loop to store user choices into password using information stored in validChar variable

  let password = "";
  for (let index = 0; index < charLenghth; index++) {
    var ranNum = Math.random() * validChar.length;
    ranNum = Math.floor(ranNum);
    var ranChar = validChar[ranNum];
    password += ranChar;
  }
  return password;
}
