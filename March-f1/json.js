/* JSON stands for JavaScript Object Notation..it is a lightweight data interchange format that is easier to
 understand humans to read and machines to parse it..it is often used to send data between server and web application.
 
 JSON consists of key-value pairs where the keys are strings and the values can be various types, including strings, 
 numbers, booleans, arrays, and objects.
*/

var json =
{
    "fname": "ajith",
    "lname": "kumar",
    "age": 22,
    "pageTitle": {
        "pageInfo": {
            "id": 1,
            "number": 1
        }
    }
 }

console.log(json.pageTitle);

// JSON.Stringify() converts object into string..it's used to send the data from client to server in string format 
// as strings are lightweight

var stringifiedJson = JSON.stringify(json);
console.log(stringifiedJson);
console.log(typeof stringifiedJson);

// JSON.Parse() converts sringified Json to onjects
var ParseJson = JSON.parse(stringifiedJson);
console.log(ParseJson);
console.log(typeof ParseJson);
