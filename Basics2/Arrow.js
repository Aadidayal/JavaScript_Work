const user = {
    username: "aadi",
    price: 999,
// this is a method of user object and this is how we can define a method in an object. 
// A method is a function that is associated with an object and can be called on that object.
    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}
// why this keyword is used to access the properties of the current object. 
// In this case, it refers to the user object, so this.username will access the username property of the user object.
// it wont run without this because if we just write username, it will look for a variable named username in the current scope, 
// which does not exist.


user.welcomeMessage()
// user.username` = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "aadi"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "aadi"
//     console.log(this.username);
// }

// const chai =  () => {
//     let username = "aadi"
//     console.log(this);
// }


// chai()

// const addTwo = (num1, num2) => { // this is called explicit return, when we have more than one line of code in the function, we need to use the return keyword and the curly braces.
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2  // this is called implicit return, when we have only one line of code in the function, we can omit the return keyword and the curly braces.

// const addTwo = (num1, num2) => ( num1 + num2 ) // if we want to return an object, we need to wrap it in parentheses, otherwise it will be treated as a block of code and not an object.



// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()