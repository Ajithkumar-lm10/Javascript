function greet () {
    return new Promise((resolve , reject) => {
    setTimeout(() => {
       resolve("say hello!")
    },1000)
})
}

function takeOrder () {
    return new Promise((resolve , reject) => {
    setTimeout(() => {
        resolve("taking order...")
    },2000)
})
}

function giveFood() {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("giving food..")
    },1000)
})
}


function takePayment() {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("please pay for your food...")
    },2000)
})
}

function thankyou () {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("thank you for coming.")
    },1000)
})
}


greet()
.then((data1) => {
    console.log(data1 , new Date())
    return takeOrder();
})
.then((data2) => {
    console.log(data2 , new Date())
    return giveFood();
})
.then((data3) => {
    console.log(data3 , new Date())
    return takePayment();
})
.then((data4) => {
    console.log(data4 , new Date())
    return thankyou();
})
.then((data5) => {
    console.log(data5)
})
.catch((error) => {
    console.log(error)
})