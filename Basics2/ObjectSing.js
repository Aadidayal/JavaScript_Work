// const tinderUser = new Object()  // singleton---> only one object can be created, we can not create multiple objects
const tinderUser = {} // object literal---> no singleton, can create multiple objects

tinderUser.id = "123abc"
tinderUser.name = "aadi"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "aadi",
            lastname: "dayal"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

// Destructuring objects- > it is a special syntax that allows us to extract values from objects and assign them to variables
//  in a more concise and readable way.
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "aadi"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// JASOn format is a way to represent data in a structured format. It is a lightweight data-interchange format that is easy
//  for humans to read and write, and easy for machines to parse and generate. JSON stands for JavaScript Object Notation, 
// and it is based on a subset of the JavaScript programming language. JSON is commonly used for transmitting data between a
//  server and a web application, as well as for storing data in files or databases. JSON data is represented as key-value pairs,
//  where the keys are strings and the values can be of any data type, including objects and arrays.


//object form 
// {
//     "name": "aadi",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// array form 
[
    {},
    {},
    {}
]
