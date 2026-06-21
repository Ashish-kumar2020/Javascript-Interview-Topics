**Hoisting & Scope — Interview Notes**

**1. var Hoisting**

When JS executes code, it creates an Execution Context in two phases:

- **Memory Creation Phase (a.k.a. Creation Phase):** JS scans the code and allocates memory for every var and function declaration before running anything. var variables are initialized to undefined. Function declarations are stored with their entire function body.
- **Code Execution Phase:** JS runs the code line by line, and actual assignments happen here.

```js
console.log(a); // undefined
var a = 5;
console.log(a); // 5
```

a doesn't throw a ReferenceError because it already exists in memory (as undefined) before line 1 runs — it just hasn't been assigned yet.

**2. let / const Hoisting and the Temporal Dead Zone (TDZ)**

let and const are also hoisted — but unlike var, they are NOT initialized to undefined. Instead, they're placed in a special uninitialized state called the Temporal Dead Zone (TDZ).

- TDZ = the time between when a let/const variable is hoisted (start of its scope) and when its declaration line actually executes and assigns it a value.
- Accessing the variable during this window throws a ReferenceError, not a value of undefined.

```js
console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 5;
```

**3. Function Declaration vs Function Expression Hoisting**

```js
foo(); // "Function Declaration"

function foo() {
  console.log("Function Declaration");
}

var foo = function () {
  console.log("Function Expression");
};

foo(); // "Function Expression"
```

**Why the first call prints "Function Declaration":** During the memory creation phase, both function foo(){} and var foo exist in the same scope.

- The function declaration is hoisted with its full body.
- The var foo hoisting step only initializes an identifier to undefined if it doesn't already have a value. Since foo is already a function, var foo's hoisting does not overwrite it.

So after the memory phase, foo → the function declaration.

**Why the second call prints "Function Expression":** During the execution phase, the line var foo = function () {...} runs between the two foo() calls. This assignment overwrites the previous value of foo. So:

- 1st call → sees the hoisted function declaration.
- 2nd call → sees the reassigned function expression (because the assignment line has already executed by then).

**4. var vs let Block Scoping**

```js
function outer() {
  var x = 10;
  if (true) {
    var x = 20;
    let y = 30;
    console.log(x, y); // 20 30
  }
  console.log(x); // 20
  console.log(y); // ReferenceError: y is not defined
}
outer();
```

- var is function-scoped (or global-scoped if outside any function). It does not create a new scope inside {} blocks like if. So var x inside the if is the same x declared in outer() — reassigning it, not creating a new variable.
- let/const are block-scoped — they only exist within the nearest enclosing {}. y ceases to exist outside the if block, hence the ReferenceError.

**Important correction on terminology:** "Lexical scope" does NOT mean "look bottom to top." It means scope is determined by where the code is physically written. Variable lookup works via the scope chain: JS looks in the current scope first, and if not found, walks outward to the enclosing (parent) scope, continuing up to the global scope. It's inner → outer, not "bottom to top" within a single block.

**5. Closures + var in Loops (Classic setTimeout Problem)**

```js
function counter() {
  for (var i = 0; i < 3; i++) {
    setTimeout(function () {
      console.log(i);
    }, 1000);
  }
}
counter();
// Prints: 3 3 3
```

**Why it prints 3 3 3 (the precise mechanism):**

- var i is function-scoped, so there's only ONE i for the entire loop — not a new one per iteration.
- A closure captures a reference to the variable itself, NOT a snapshot/copy of its value at the time of the call. (This is the key concept interviewers listen for — closures = reference, not value-copy.)
- setTimeout callbacks go into the macrotask queue and only run after the call stack is empty — meaning the entire for loop finishes running synchronously first.
- By the time the loop finishes, i has already been incremented to 3 (since the loop exits when i < 3 becomes false, i.e., i === 3).
- All three callbacks then run, each looking up the same shared i, which is now 3. Hence 3 3 3.

**Fix 1 — Using let:**

```js
function counter() {
  for (let i = 0; i < 3; i++) {
    setTimeout(function () {
      console.log(i);
    }, 1000);
  }
}
// Prints: 0 1 2
```

**Why this works:** The JS spec gives let in a for loop special behavior — it creates a new binding of i for each iteration (effectively a fresh lexical environment per loop pass, with the value copied forward). So each setTimeout callback closes over its own distinct i, not a shared one.

**Fix 2 — Using var + a wrapper function (forcing new scope manually):**

```js
function counter() {
  for (var i = 0; i < 3; i++) {
    (function (i) {
      setTimeout(function () {
        console.log(i);
      }, 1000);
    })(i); // IIFE
  }
}
// Prints: 0 1 2
```

**Why this works:** Every function call creates a new execution context with its own parameters. By passing i as an argument into the IIFE, each call gets its own independent copy of i (as a parameter), and the inner setTimeout closure captures that parameter — not the outer loop's shared i.

**Key Terminology Checklist (use these exact phrases in interviews)**

- "Memory creation phase" and "code execution phase" — not just "hoisting happens."
- "Function declarations are hoisted with their body; var declarations are hoisted as undefined only if not already defined."
- "TDZ — the time between hoisting and initialization where access throws a ReferenceError."
- "Closures capture variables by reference, not by value snapshot."
- "Scope chain lookup goes inner to outer, determined lexically by where code is written."
- "let creates a new per-iteration binding in for loops; var does not — it's function-scoped."