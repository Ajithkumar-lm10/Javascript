/*
prototype - whenever you create an object js automatically pushes hidden properties into an object..and then
js engine attaches these objects to our custom objects.
{
// print user.__proto__ you'll get those properties which is same as Object.prototype.

** .__proto__ is a property that is present in the custom obj/arr/var.
** prototype is a property that is present in the built in function keyword..String/Object/Array/Boolean


user
{name: 'ajith'}
user.__proto__
{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
Object.prototype
{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
user.__proto__ === Object.prototype
true
}

!)similary custom function inhertis properties from Function.prototype.
2)similary custom Array inhertis properties from Array.prototype.
3)similary custom String inhertis properties from String.prototype.
4)similary custom Boolean inhertis properties from Boolean.prototype.

all these prototypes are actually inherits fom the Object.prototype..this is called inheritance in js.
(also this is why we call everything in js are objects)
*/


var user = {
    name: "ajith"
}

var a = 10;

var ble = true;

var arr = [10,20,30];

//USES
//1)add new mothods to the prototype property
//2)

function User(name , age) {
    this.name = name;
    this.age = age;
}

User.prototype.myMap = function() {
    console.log("my map function");
}

let user1 = new User();
user1.myMap();
