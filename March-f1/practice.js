var age = 24;

function getAge() {
    console.log(this)
    console.log(this.age);
}

getAge();

var obj = {
    age: 25,
    Func: getAge,
    nestedObj: {
        age: 27,
        nestedFunc: getAge
    }
}

obj.Func();
obj.nestedObj.nestedFunc();


// implicit

var bunny1 = {
    fname: "allu",
    foods: ["noodles" , "bacon"],
    getFood: function() {
        console.log(this.foods);
        this.foods.forEach(() => {
            console.log(this)
            console.log(`${this.fname} eats ${this.foods}`);
        });
    }   
}

bunny1.getFood();
