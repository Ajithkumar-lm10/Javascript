var course = ["html" , "css" ,"bootstrap" , "javascript"];
console.log(course);
console.log(course[0]);
console.log(course[1]);
console.log(course[2]);
console.log(course[3]);

// size of an array
var size = course.length;
console.log(size);

//empty array using new keyword

var marks = new Array(5)
console.log(marks);
console.log(marks.length);

// how to add elements at the end of an array

var fruits = ["banana" , "mango"];
fruits.push("strawberry" , "sapota" , "new element");
console.log(fruits);

// how to add elements at the start of an array

fruits.unshift("tomato" , "onion" ,"chillie" , 25 , false ,"rahul" ,"Ajith");
console.log(fruits);
console.log(fruits.length)

// how remove element at the end

fruits.pop()
console.log(fruits);
console.log(fruits.length);

// how to remove element at the start

console.log("hi");
fruits.shift();
console.log(fruits);
console.log(fruits.length);

// how can you remove elements from any index
// splice will take 2 param first for the index and 2nd for no.of elements u want to remove
// splice(index , no.of.elements , items to add);
fruits.splice(4 , 2 , "ajithkumar" , 22 , true);
console.log(fruits);
console.log(fruits.length);

// copying array elements

var marks = [12,27,55,72];
var markscopy = marks;  // we should use spread operator to copy array elemetns

marks.push(91);
markscopy.push(100);  // since we are assigning marks to mc it me means that both memory reference are same..so 
                      //any chances happens to mc reflects to original array aswell.
                    
console.log(markscopy);
console.log(marks);
console.log(marks === markscopy);  // true coz both value & memory reference are same.

// for off gives value
console.log("for off");
for(var value of marks) {
    console.log(value);
}

// for in gives both index and value
console.log("for in");
for(var index in marks) {
    console.log(index , marks[index]);
}

// for each is an higher order function..an higher order function is a function that takes another function as an
//  argument.

// forEach

function arrayElements(value , index) {
    console.log(index , value);
}

marks.forEach(arrayElements);

// array sort

var arr1 = [1 , 3, 8 ,13 , 45 ,82];
arr1.sort((a , b) => {return a - b});  // assendidng order(sort is an higher order function)
console.log(arr1);
arr1.sort((a , b) => {return b - a});   // desending order
console.log(arr1);