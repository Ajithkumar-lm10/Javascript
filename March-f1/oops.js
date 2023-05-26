// class based constructor

class Person {
    constructor(name ,  age) {
        this.name = name;
        this.age = age;
     }

     welcome() {
        console.log(`${this.name}`)
     }
}

var person = new Person("ajith");
person.welcome();


// function constructor

function Customer(name , city){
    this.name = name;
    this.city = city;
    this.getFunc = function() {
        console.log(`${this.name} is from ${this.city}`);
    }
}

// to create an object from a constructor function we require new keyword
var customer1 = new Customer("ajith" , "tirupathi");
var customer2 = new Customer("suman ghosh" , "haryana");
customer1.getFunc();
customer2.getFunc();


// object literal vs constructor function

// object literal - used to create single object
var obj = {
    name: "ajith",
    country: "india"
}

//constructor function - you can create multiple function
function Client(name) {
    this.name = name;
}

var client = new Client("Rashmika");
var client2 = new Client("anushka");

// Object created using constructor are unique..incase if you want to modify a property
// to one particular object, they can be accessed from that particular object only.it cannot change constructor function
client2.city = "mumbai";
console.log(client);
console.log(client2);