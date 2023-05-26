/*All primitive data types are immutable-means can't be changed
* depp copy - it's a concept of call by value in other language..when you assign a original value to the copied value
* and if you make changes to the copied value it doesn't affect original value..coz in deep copy original and copied value
* points to the different memory reference.
*by default deep copy happens in immutable objects.
*/

var originalVal = 10;
var copyVal = originalVal;
console.log(originalVal , copyVal);
copyVal = 20;
console.log(originalVal , copyVal);

/* non-premitive data types - object , arrays
* shalloCopy - it's a concept of call by reference..in shallow copy when you make changes in the copied value it 
* changes the original value aswell..thats coz in shallow copy both values points to the same memory reference.
* by default shallow copy happens in mutable objects
*/

var origianlObj = {
    fname: "Ajith",
    age: 21
}

var copyObj = origianlObj;
console.log(origianlObj , copyObj);
copyObj.fname = "shirley";
console.log(origianlObj , copyObj);


// creating deep copy of non-premitive data types
// 1) JSON.Stringify() - problem with this is it doesn't able to copy function

var mainValue = {
    fname: "ajith",
    lname: "kumar",
    getfullName: function() {
        return this.fname + " "+ this.lname;
    },
    address: {
        city: "tirupathi",
        state: "andhra pradesh"
    }
}

// var duplicateVal = JSON.parse(JSON.stringify(mainValue));
var duplicateVal = Object.assign({} , mainValue);

console.log(mainValue);
console.log(duplicateVal);

duplicateVal.fname = "surya";
duplicateVal.address.city = "hydrabad";
console.log(mainValue);
console.log(duplicateVal);

// Object.assign() doesn't work when object present inside an object

// ...spread operator

var spreadCopy = {...mainValue };
console.log(mainValue);
console.log(spreadCopy);

spreadCopy = {
    ...spreadCopy,
    fname: "alisha",
    ...spreadCopy.address,
    address: {
        city: "mumbai"
    }
}

console.log(mainValue);
console.log(spreadCopy);