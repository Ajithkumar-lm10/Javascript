function wakeUp() {
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            resolve("Wake up in the mornig!")
    },1000)
})
}

function DoBath() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("bathing..")
        },2000)
    })
}

function EatFood() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Eating food")
        },1000)
    })
}

function College() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("going to college")
        },2000)
    })
}

// wakeUp()
// .then((data) => {
//     console.log(data , new Date())
//     return DoBath()
// })
// .then((data1) => {
//     console.log(data1 , new Date())
//     return EatFood()
// })
// .then((data2) => {
//     console.log(data2 ,new Date())
//     return College()
// })
// .then((data3) => {
//     console.log(data3 ,new Date())
// })
// .catch((error) => {
//     console.log("error")
// })

async function dailyLife() {
    try {
        const data = await wakeUp();
        console.log(data);
        const data1 = await DoBath();
        console.log(data1);
        const data2 = await EatFood();
        console.log(data2);
        const data3 = await College();
        console.log(data3);
    } catch (error) {
        console.error(error);
    } 
}

dailyLife()