JavaScript Control Structures & Variable Scope – Notes

This document explains the core JavaScript concepts used in the control-structures.js file.

---

🧠 Concepts Covered

1. Global and Local Variables
 Global: Defined outside of functions, accessible anywhere.
 Local: Defined inside a function, only accessible within that function.

  var globalVar = "I am global"; // Accessible everywhere
  let localVar = "I am local";   // Only inside its function

2. Conditional Statements
 if, else if, else: Control the flow based on conditions.
 Logical operators:
   &&  (AND)
   || (OR)
   ! (NOT)

3. Loops
 for
 Used when the number of iterations is known.

    for (let i = 0; i < 5; i++) { ... }

 while
 Used when the number of iterations is unknown but depends on a condition.

    while (condition) { ... }

 do...while
 Similar to while, but always runs at least once.

    do { ... } while (condition);

4. Break & Continue
 break: Exits the loop entirely.
 continue: Skips the current iteration.

5. Switch Statement
 Cleaner alternative to multiple if...else if conditions. 

    switch(day) {
  case "Monday":
    ...
    break;
  default:
    ...
  }

