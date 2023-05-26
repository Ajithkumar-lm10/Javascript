/* A promise is pending by default..if its gets resolved the state of promise changes from pending to fullfilled
*if its gets rejected the state of promise changes to rejected
*/

console.log("HIIIIIAA" , new Date())

const mypromise = new Promise((resolve , reject) => {
    setTimeout(() => {
        resolve("resolved..hello google");
        // reject("error")
    },2000)
});

console.log("promise" , mypromise , new Date());

mypromise
.then((data) => {
    console.log(data)
})
.catch((err) => {
    console.log(err)
})