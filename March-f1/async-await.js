/*
*promise is a js object which promise you to return data after some time.
*async/await is a feature in JavaScript that allows you to write asynchronous code in a more synchronous
 and readable manner.
*every async function returns a promise object which will be either resolved or rejected after some time.
*The async keyword is used to define an asynchronous function.It tells JavaScript that the function will 
  contain asynchronous operations and will always return a promise.
  Inside async function you can use the await keyword to pause the execution of the code until the promise
  get's resolved or rejected.
*/

async function add(a ,b) {
    return a+b;
}

/*
* when you write a await keyword at global level..it will wait for the function to finish and will return promise object
but not the value.

*When we are using await keyword we should not write it inside the global execution context, we have to write it inside
async function and use await keyword inside async function..so that when js calling the function and sees the await keyword
it suspends the function from global execution context to function execution context.

*/

async function executeAdd() {
    var res = await add(5,4);
    console.log(res);
}

executeAdd();

var a = 10;
while(a <= 50) {
    console.log(a)
    a++;
}