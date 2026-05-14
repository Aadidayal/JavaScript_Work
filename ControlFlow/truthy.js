// Arrays are TRUTHY even if empty! [] evaluates to true in if condition
const userEmail = []

if (userEmail) {
    // This executes even when array is EMPTY - this is a common mistake!
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values - these convert to false in boolean context
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values - these convert to true in boolean context (IMPORTANT: [] and {} are truthy!)
// "0", 'false', " ", [], {}, function(){}

// CORRECT WAY: Check array length instead of just the array itself
// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

// Objects are also TRUTHY even when empty! Use Object.keys() to check if really empty
const emptyObj = {}

// Object.keys() returns array of keys, .length tells how many properties exist
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): returns right value if left is null or undefined ONLY
// Different from || because ?? ignores other falsy values like 0, false, ""

let val1;
// val1 = 5 ?? 10            // Returns 5 (5 is not null/undefined)
// val1 = null ?? 10         // Returns 10 (null is nullish)
// val1 = undefined ?? 15    // Returns 15 (undefined is nullish)
// Chains multiple ?? - uses first non-nullish value
val1 = null ?? 10 ?? 20     // Returns 10 (first non-nullish value found)



console.log(val1);

// Ternary Operator - shorthand for if-else statement
// Syntax: condition ? executeIfTrue : executeIfFalse

const iceTeaPrice = 100
// If price <= 80 then log "less than 80", otherwise log "more than 80"
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")