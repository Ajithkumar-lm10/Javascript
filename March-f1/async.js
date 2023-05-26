// synchronous programming - the execution do not move to the next line until it finishes the current line 
//                            of code execution.

/* async programming - the execution can move to the next line of code without fully executing the current line
*  callback - a callback function is a function which can be passed to an asynchronous function..internally 
*  whenever those acynchronous function execution is complete javascript will call callback function for us.
*
*/
function callback(){
    console.log("hello world");
}

setTimeout( () => {
    console.log("hello world")
}, 3000);

console.log("hi");
