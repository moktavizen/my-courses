var name = prompt("Whats your name?");
var firstLetter = name.slice(0,1);
var firstLetterCap = firstLetter.toUpperCase();
var restOfLetter = name.slice(1,name.length);
var restOfLetterLower = restOfLetter.toLowerCase();
var capName = firstLetterCap + restOfLetterLower

alert("Hello " + capName);