console.log("Write a program to find element occurence in array");

const arr = [1,1,2,3,1,4]
const count = {};

for(const element of arr) {

    if(count[element]) {
        count[element] += 1
    }else {
        count[element] = 1
    }
}
console.log(count)

//Write a program to remove duplicate item from the array
console.log("Write a program to remove duplicate item from the array");

const arr1 = [1, 2, 3, 4, 1, 2];

// const uniqueArr = [...new Set(arr1)]
// console.log(uniqueArr);

const uniqueArr = [];
for(let i = 0;i < arr1.length ; i++) {
    if(uniqueArr.indexOf(arr1[i]) === -1 ) {
        uniqueArr.push(arr1[i])
    }
}
console.log(uniqueArr)

for (var i = 0; i < 5; i++) {
    setTimeout(function () {
    console.log(i);
    }, i * 1000);
}
     