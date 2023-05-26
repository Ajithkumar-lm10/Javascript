console.log(this)

var age = 25
function getAge() {
    console.log(this.age)
}

let user = {
    name: "ajith",
    age: 22,
    func1: getAge,
    getFullName: {
        age: 29,
        nestedFunc: getAge
    }
}

user.func1()
user.getFullName.nestedFunc()

console.log("explicit bind")

let user2 = {
    name: "ajith",
    age: 22,
    getFullName: function() {
        return this.name + this.age
    }
}

var logFullName = function(prefix , suffix) {
    console.log(`${prefix} ${this.getFullName()} ${suffix}`)
}

let newfuncByBIND = logFullName.bind(user2 , "hi my name is" , "bye!")
newfuncByBIND()


console.log("call apply")

let user3 = {
    name: "ajith",
    fname: "kumar",
    getFullName: function(city, state ) {
       console.log(`${this.name} ${this.fname} stays in ${city} ${state}`)
    }
}

clinet = {
   name: "john",
   fname: "wick"
}

user3.getFullName.call(clinet , "chittor" , "ap")
user3.getFullName.apply(clinet , ["chittor" , "ap"])