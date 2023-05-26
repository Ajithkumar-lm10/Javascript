function ValidCard() {
    return true;
}

function sufficientBalance() {
    return true;
}

function validUser() {
    return true;
}

function makePayment() {
    console.log("payment is made.")
}


var promise1 = new Promise((resolve , reject) => {

    setTimeout(() => {
        if(ValidCard()) {
            resolve("valid Card")
        } 
        else {
            reject("card is invalid rejected")
        }
    },1000);

});

var promise2 = new Promise((resolve , reject) =>{
    setTimeout(() => {
        if(sufficientBalance()) {
            resolve("sufficient balance")
        } 
        else {
            reject("Insufficient balance")
        }
    },2000);

});

var promise3 = new Promise((resolve , reject) => {
    setTimeout(() => {
        if(validUser()) {
            resolve("valid user")
        } 
        else {
            reject("Invalid user")
        }
    },3000);

});

var allPromise = Promise.race([promise1 , promise2 , promise3]);
// var anyPromise = Promise.any([promise1 , promise2 , promise3]);

allPromise.then((data) => {
    console.log("all resolved" , data);
    makePayment();
}).catch((data) => {
    console.log("promise rejected" , data);
});