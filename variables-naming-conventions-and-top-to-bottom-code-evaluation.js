/*

Objective:
In this activity, you will reinforce the skill of creating and using variables
while practicing best practices in variable naming conventions through a hands-on,
interactive coding challenge.

The code snippet below may include:
  - Ambiguous or incorrect variable names.
  - Missing variables that need to be created.
  - Scenarios that require the use of clear and descriptive variable names.

You will:
  - Identify Issues: Review the provided code and identify any variable names that:
  - Are unclear or too vague (e.g., a, b, c).
  - Do not follow best practices (e.g., camelCase, descriptive naming).
  - Refactor the Code: Rename the variables and rewrite the program using descriptive names that clearly convey the variable's purpose.
  - Enhance the Program: Add at least two additional variables to improve the program’s functionality or clarity.

Things to reflect on:
  - Why is it important to use meaningful variable names?
  - What are the common pitfalls to avoid when naming variables?
  - How do clear variable names benefit team collaboration?
  
*/

/*let a = "Alice"; 
// the variable name "a" is too vague and non-descriptive
 let b = 5;
 // the variable name 'b' is too vague and non-descriptive
let c = 20;
// the variable name 'c' is too vague and non-descriptive
let d = a + " bought " + b + " items for $" + c + ".";
// the variable 'd' is also too vague and non descriptive 

console.log(d);

Below is the enhanced program with two new variables
*/

let day = "Friday";
let customerName = "Alice";
let numofItems = 5;
let price = 20;
let store = "TJ Maxx";

let storeSales = "On " + day + ", " + customerName + " bought " + numofItems + " items from " + store + " for $" + price + ".";

console.log(storeSales);