// CONSTANTS (naming is unclear)
const MAX = 10; // What is MAX for?
const url = "http://example.com/api"; // URL naming could be better

// VARIABLES (not descriptive, mixed-case naming)
let x = 5; // x? What does this represent?
var UserData = {}; // Mixed-case naming, `var` is outdated

// FUNCTION (does too much, unclear naming)
function DoStuff(a, b) {
  let result = a * b; // Multiplies a and b
  if (a > b) {
    result += b; // Add b if a > b
  } else {
    result -= a; // Subtract a otherwise
  }
  console.log("Result is: " + result); // Debugging logs left in
  fetch(url, {
    method: "POST",
    body: JSON.stringify({
      num: result,
      timestamp: new Date().toISOString(), // Unnecessary computation here
    }),
  })
    .then((r) => r.json())
    .then((data) => {
      console.log(data); // No error handling, debugging logs
      UserData = data; // Global mutation
    });
}

// FUNCTION (inconsistent style, unclear intent)
function calc() {
  let s = 0; // Why `s`? What does it mean?
  for (let i = 1; i <= MAX; i++) {
    s += i; // Adding numbers
  }
  console.log("Sum:", s);
  return s;
}

// FUNCTION (unclear purpose, side effects, mixed logic)
function update() {
  let a = parseInt(prompt("Enter number 1"));
  let b = parseInt(prompt("Enter number 2"));
  console.log("Before doing stuff: ", a, b);
  DoStuff(a, b); // Calls the other unclear function
  console.log("User data updated: ", UserData); // Side effect from DoStuff
}

// CODE FLOW (lack of modularity, mixed concerns)
function Main() {
  console.log("Starting...");
  calc(); // Summing numbers
  let choice = confirm("Do you want to update?");
  if (choice) {
    update(); // Starts update process
  }
  console.log("Done!");
}

// INLINE CODE (not reusable, unclear logic)
for (let i = 0; i < 5; i++) {
  console.log("Loop value: ", i);
}

// REDUNDANT CODE (duplicate functionality)
function redundantFn() {
  let total = 0;
  for (let i = 1; i <= 5; i++) {
    total += i; // Similar to `calc()`
  }
  return total;
}
// heheheehee
Main();
