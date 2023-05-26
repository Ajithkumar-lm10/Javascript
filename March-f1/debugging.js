/*
  debugging is the process of finding out how the cord works internally.
  A stack normally is a structure of sequential and ordered elements and it’s based on the principle of last in first out (LIFO)
  A queue is a linear structure of sequential and ordered elements, similar to a stack, with a difference that it works based on the principle of first in first out (FIFO).
*/
var a = 10;

function add(a , b){
    var c = a + b;
    return c;
}

console.log(a);
console.log(add(10,34));
console.log(add(5));