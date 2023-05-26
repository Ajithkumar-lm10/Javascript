
var promise = new Promise((resolve , reject) => {
    setTimeout((val) => {
        resolve("resolved after 3 seconds");
    }, 3000);
});

function sayHi() {
    return promise;
}

sayHi().then((data) => {
    console.log("hello world", data);
 }).catch((err) => {
    console.log("error" , err);
 });
