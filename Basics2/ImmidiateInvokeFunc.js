// Immediately Invoked Function Expressions (IIFE)

// why we need this?


// IIFE is a function that is executed immediately after it is defined. 
// It is a design pattern that is also known as a Self-Executing Anonymous Function and contains two major parts. 
// The first part is the anonymous function with lexical scope enclosed within the Grouping Operator (). 
// This prevents accessing variables within the IIFE idiom as well as polluting the global scope. 
// The second part creates the immediately invoked function expression () through which the JavaScript engine will directly interpret the function.


// lexical scope is a type of scope that is determined by the physical structure of the code. 
// In JavaScript, functions create their own scope, and variables defined within a function are not accessible outside of that function. 
// This is known as lexical scoping because the scope of a variable is determined by its position in the source code. 
// Variables defined in an outer scope are accessible to inner scopes, but variables defined in an inner scope are not accessible to outer scopes. 
// This allows for encapsulation and helps prevent naming conflicts between variables in different parts of the code.

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('aadi');



// iife prevents polluting the global scope because it creates a new scope for the variables defined within the function. This means
//  that any variables defined within the IIFE are not accessible outside of the function, 
// which helps to avoid naming conflicts and keeps the global scope clean. By using an IIFE, you can ensure that your code does not 
// interfere with other code that may be running on the same page or in the same environment, which can help to prevent bugs and 
// improve the overall stability of your application.    
