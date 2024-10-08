//singleton object
//Object.create

//object literals
const mySym = Symbol("key1")

const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.age)
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])
// console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello Rohit")
    //return "hello"
}

console.log(JsUser.greeting())

JsUser.greeting2 = function(){
    console.log(`Hello User ${this.name}`)
}

console.log(JsUser.greeting2())