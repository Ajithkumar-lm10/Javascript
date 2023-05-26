var s = "ajith";

// size of the string
console.log(s.length);

//chatAt() returns char present in the index or position

console.log(s.charAt(1));
// return assci code of the character at the index 
console.log(s.charCodeAt(0));

// concat() to add / concate to strings
var s1 = "vip";
console.log(s.concat(s1))

// if you want to check your string ends with some other string
var str = "i am learning, string in this, sesssion";

console.log(str.endsWith("ion"));
console.log(str.startsWith("I"));

// check if substring is present or not

console.log(str.includes("lea"));

// finding index of a substring
console.log(str.indexOf("ing"));
console.log(str.lastIndexOf("ing"));

// split is uded to split the string

console.log(str.split(","));

// replacing strings
console.log(str.replace("," ,""));
console.log(str.replaceAll("," ,""));

// getting substring from a string
console.log("39");
console.log(str.substring(2 , 13));

// trim used to remove spaces around

var str1 ="   abc  pqr   ";
console.log(str1.trim());

//finding occurences of is

var str2 = "this is a sample string which is good. Is iS IS";

var ett = /i(s|n)/gi;     
var smallLet = /[A-Z]/g; // extracting capital letter from string(no i coz its case insensitive)
var regExp = /is/gi; //regular expression g = global i = case insensitive
console.log(str2.match(regExp));
console.log(str);
console.log(str.replace(/,/g, ""));
console.log(str2.match(ett));
console.log(str2.match(smallLet));