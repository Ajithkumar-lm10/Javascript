function addition(a , b) {
    const promise = new Promise((resolve , reject) => {
        let c = a + b;
        setTimeout(() => {
            console.log(`addition is ${c}`)
            resolve(c)
        }, 2000)
    })
    return promise;
}

function subtract(val) {
    const promise  = new Promise((resolve, reject) => {
        let c = val - 5;
        setTimeout(() => {
            console.log(`subtaction is ${c}`)
            resolve(c)
        },1000)
    })
    return promise;
}

function multiply(val) {
    const promise = new Promise((resolve, reject) => {
        let c = val * 7;
        setTimeout (() => {
            console.log(`Multiplication is ${c}`)
            resolve(c)
        }, 2000)
    })
    return promise;
}

function divition (val) {
    const promise = new Promise((resolve, reject) => {
        let c = val / 2;
        setTimeout(() => {
            console.log(`divition is ${c}`)
            resolve(c)
        },1000)
    })
    return promise
}


// addition(10 , 5)
// .then((res) => {
//     return subtract(res)
// })
// .then((res2) => {
//     return multiply(res2)
// })
// .then((res3) => {
//     return divition(res3)
// })
// .catch((err) => {
//     console.log("something went wrong")
// })

async function handleAsync() {

    const data = await addition(5 , 10);
    const data1 = await subtract(data);
    const data2 = await multiply(data1);
    const data3 = await divition(data2);

    // console.log(data);
    // console.log(data1);
    // console.log(data2);
    // console.log(data3);
}

handleAsync()