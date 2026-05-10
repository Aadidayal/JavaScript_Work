// singleton---> only one object can be created, we can not create multiple objects
// Object.create




// object literals----> no singleton, can create multiple objects
// object literal is a comma separated list of name:value pairs inside curly braces. 
// It is a data structure that allows us to store multiple values in a single variable. Each name:value pair is called a property, 
// and the name is also called a key. The value can be of any data type, including another object or a function. 
// Object literals are commonly used in JavaScript to create objects and define their properties and methods.

const mySym = Symbol("key1")
// Symbol is a primitive data type that is used to create unique identifiers for object properties. Each time you create a Symbol, 
// it is guaranteed to be unique, even if it has the same description. This makes Symbols useful for defining properties that should 
// not conflict with other properties in an object, 
// especially when working with libraries or frameworks where you want to avoid naming collisions.  

const JsUser = {
    name: "Aadi",
    "full name": "Aadi dayal",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "    aadi@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "aadi@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "aadi@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());