// 'use strict';
// this has different values depending on where it is used.

// Default Binding
// by default 'this' keyword refers to window object
// when inside a standalone function(global function), `this` keyword refers to window object..this rule doesn't word when we use
// use strict.
// when a function is present inside a function then also `this` keyword refers to window object.

// console.log(this);
function add() {
    console.log(this);
}

add();

//------- Implicit BINDING  -------
// if a function is bound to an object, then `this` keyword referes to that object only.

var age = 25;
function getAge() {
    console.log(this);
    console.log(this.age);
}
getAge();

var obj = {
    age: 22,
    func: getAge,
    nestedObj: {
        age: 29,
        nestFunc: getAge
    }
}

obj.func();                //obj ===  obj
obj.nestedObj.nestFunc();  // obj === nestedObj

// here the getage function at 19 is a standalone function so this refers to window object then getAge is inside an
// object so its refers to the current object.

var bunny = {
    name: "allu arjun",
    foods: ["biriyani " , "noodles"],
    showName: function() {
        console.log(this)
        this.foods.forEach(function (value) {
            console.log(this);
            console.log(this.name + "eats these foods " + value);
        });
    }
}

bunny.showName();


// ways to solve this in ES5
console.log("ways to solve this in ES5");

var bunny = {
    name: "allu arjun",
    foods: ["biriyani " , "noodles"],
    showName: function() {
        var that = this;
        console.log(that)
        this.foods.forEach(function (value) {
            console.log(that);
            console.log(that.name + " eats these foods " + value);
        });
    }
}

bunny.showName();

// arrow function
// incase of arrow function, `this` keyword is based on enclosing lexical scope..which means if this isnt refering to
// any object it will look for parent objcets.

console.log("arrow function");

var bunny = {
    name: "allu arjun",
    foods: ["biriyani " , "noodles"],
    showName: function() {
        console.log(this)
        this.foods.forEach((value) => {
            console.log(this);
            console.log(this.name + " eats these foods " + value);
        });
    }
}

bunny.showName();

// ---- EXPLICIT BINDING ----- 
// CALL METHOD 

var employee = {
    fname: "john",
    lname: "wick",
    getfullName: function(city , state) {
       console.log(`${this.fname} ${this.lname} stays in ${city} ${state}`);
    }
}

var client = {
    fname: "ajith",
    lname: "kumar"
}

employee.getfullName('faridabad' , 'haryana');
employee.getfullName.call(client , "Tirupathi" , "Andhra pradesh");
employee.getfullName.apply(client , ["Tirupathi" , "Andhra pradesh"]);

// objcet_which_has_the_method.Method_name.call(new-object-you-want-this to refer)
// call is a fucntion which helps us to replace the value of `this` inside with whatever value you want.

// Call , apply executes the function as soon as they calls them.

// BIND 
// Bind is a function which creates another function that you can execute later with the new context of `this`

var handler = employee.getfullName.bind(employee , );

document.getElementById('btn').addEventListener('click' , employee.getfullName.bind(employee ,"gurgaon" , "haryana"));
document.getElementById('btn-1').addEventListener('click' , employee.getfullName.bind(client ,"Tirupathi" , "Andhra pradesh"));


// call,apply,bind used for explicit binding , when you want to replace or set value of `this` keyword to yourself
