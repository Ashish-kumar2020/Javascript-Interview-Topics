# 📚 Module 2 - Execution Context

---

# 📖 What is an Execution Context?

An **Execution Context** is the environment in which JavaScript code is executed.

It contains everything JavaScript needs to execute the code, such as:

- Variables
- Function declarations
- The value of `this`
- Information about the current execution

Think of it as the **workspace** created by the JavaScript engine before executing your code.

---

# 🧠 Interview Answer

> An Execution Context is the environment where JavaScript code is executed. It contains all the information required to execute the code, including variables, function declarations, the value of `this`, and the current execution state. JavaScript creates an Execution Context before executing any code.

---

# 🌍 Types of Execution Context

There are **three** types of Execution Context.

## 1️⃣ Global Execution Context (GEC)

- Created before a single line of JavaScript executes.
- Created **only once** during the lifetime of a program.
- Acts as the root execution context.

---

## 2️⃣ Function Execution Context (FEC)

Created whenever a function is invoked.

```javascript
function greet() {
    console.log("Hello");
}

greet();
```

Execution Flow

```text
Global Execution Context
        │
        ▼
Function Execution Context
```

Once the function finishes executing:

```text
Function Execution Context
        │
        ▼
Destroyed

Control returns to

Global Execution Context
```

---

## 3️⃣ Eval Execution Context (EEC)

Created only when JavaScript executes the `eval()` function.

```javascript
eval("console.log('Hello')");
```

⚠️ Rarely used in modern JavaScript.

---

# 🧩 What does an Execution Context contain?

Every Execution Context contains **three** components.

```text
Execution Context
│
├── Memory Component
├── Code Component
└── this Binding
```

---

## 1️⃣ Memory Component

Stores:

- Variables
- Function declarations

---

## 2️⃣ Code Component

Responsible for executing JavaScript code line by line.

---

## 3️⃣ `this` Binding

Stores the value of the `this` keyword for the current execution context.

---

# ⚙️ Two Phases of Execution Context

Every Execution Context executes in **two phases**.

```text
Execution Context

↓

Memory Creation Phase

↓

Execution Phase
```

---

# 🧠 Phase 1 - Memory Creation Phase

Before executing any code, JavaScript scans the entire file.

Example

```javascript
var a = 10;

var b = 20;

function add() {}
```

Memory after scanning:

```text
a → undefined

b → undefined

add → function
```

### Important

No JavaScript code executes during this phase.

Only memory allocation happens.

---

# 🚀 Phase 2 - Execution Phase

JavaScript now starts executing code line by line.

```javascript
var a = 10;
```

Memory

```text
a → undefined
```

Execution

```text
a → 10
```

Now

```javascript
console.log(a);
```

Output

```text
10
```

---

# 💻 Complete Example

```javascript
var a = 10;

function greet() {
    console.log("Hello");
}

console.log(a);

greet();
```

---

## Step 1

Global Execution Context is created.

---

## Step 2

Memory Creation Phase

```text
a → undefined

greet → function
```

---

## Step 3

Execution Phase

### Line 1

```javascript
var a = 10;
```

Memory changes

```text
a → 10
```

---

### Line 2

Nothing happens.

The function is already stored in memory.

---

### Line 3

```javascript
console.log(a);
```

Output

```text
10
```

---

### Line 4

```javascript
greet();
```

A new **Function Execution Context** is created.

---

### Memory Phase (Inside `greet()`)

Nothing to allocate.

---

### Execution Phase

```javascript
console.log("Hello");
```

Output

```text
Hello
```

---

Function finishes.

Function Execution Context is destroyed.

Control returns to the Global Execution Context.

---

# 📊 Visualization

```text
Program Starts

↓

Create Global Execution Context

↓

Memory Creation Phase

↓

Execution Phase

↓

Function Called

↓

Create Function Execution Context

↓

Memory Creation Phase

↓

Execution Phase

↓

Destroy Function Execution Context

↓

Back to Global Execution Context

↓

Program Ends
```

---

# 🔥 Deep Dive Example

## Walk me through exactly what happens inside the JavaScript engine.

```javascript
console.log(a);

foo();

var a = 10;

function foo() {
    console.log("Hello");
}
```

---

## Step 1

Create Global Execution Context.

---

## Step 2

Memory Creation Phase

```text
a → undefined

foo → function
```

No JavaScript code executes.

---

## Step 3

Execution Phase

### Line 1

```javascript
console.log(a);
```

Output

```text
undefined
```

---

### Line 2

```javascript
foo();
```

Creates a **Function Execution Context**

---

### Memory Phase

Nothing to allocate.

---

### Execution Phase

```javascript
console.log("Hello");
```

Output

```text
Hello
```

---

Destroy Function Execution Context.

Return to Global Execution Context.

---

### Line 3

```javascript
var a = 10;
```

Memory changes

```text
a → 10
```

No output.

---

Program finishes.

Destroy Global Execution Context.

---

## Final Output

```text
undefined

Hello
```

---

# 🚨 Common Interview Mistakes

❌ During the Memory Creation Phase, JavaScript executes code.

✅ Correct:

Memory Creation Phase only allocates memory.

No code executes.

---

❌ Global Execution Context is created every time a function runs.

✅ Correct:

Global Execution Context is created only **once**.

Each function invocation creates a new **Function Execution Context**.

---

❌ Functions are created during the Execution Phase.

✅ Correct:

Functions are stored in memory during the **Memory Creation Phase**.

---

# 🎯 Most Asked Interview Questions

### 1. What is an Execution Context?

Environment where JavaScript executes code.

---

### 2. What are the types of Execution Context?

- Global Execution Context
- Function Execution Context
- Eval Execution Context

---

### 3. What are the two phases of an Execution Context?

- Memory Creation Phase
- Execution Phase

---

### 4. What happens during the Memory Creation Phase?

- Variables are allocated memory.
- `var` variables are initialized with `undefined`.
- Function declarations are stored completely.
- No code executes.

---

### 5. What happens during the Execution Phase?

- Code executes line by line.
- Variables receive their assigned values.
- Functions are invoked.
- Function Execution Contexts are created and destroyed.

---

### 6. How many Global Execution Contexts exist?

Only **one** during the lifetime of the program.

---

### 7. When is a Function Execution Context created?

Whenever a function is invoked.

---

# ⭐ Quick Revision

```text
Execution Context

↓

Contains

├── Memory Component
├── Code Component
└── this Binding

----------------------------------

Memory Phase

↓

Variables → undefined (var)

Functions → Stored

No Code Executes

----------------------------------

Execution Phase

↓

Line-by-line execution

↓

Variable assignments

↓

Function calls

↓

New Function Execution Context

↓

Destroyed after completion
```

---

# 📝 Interview Cheat Sheet

- Execution Context = Workspace where JavaScript executes code.
- Types:
  - Global Execution Context
  - Function Execution Context
  - Eval Execution Context
- Two Phases:
  - Memory Creation Phase
  - Execution Phase
- Memory Phase:
  - Allocates memory.
  - Stores function declarations.
  - Initializes `var` with `undefined`.
  - Does **not** execute code.
- Execution Phase:
  - Executes code line by line.
  - Creates Function Execution Contexts on function invocation.
  - Destroys Function Execution Context after function returns.
- Only **one Global Execution Context** exists.
- Every function call creates a **new Function Execution Context**.

---

# ✅ Module Completion Checklist

- [x] Definition
- [x] Types of Execution Context
- [x] Components
- [x] Memory Creation Phase
- [x] Execution Phase
- [x] Function Execution Context
- [x] Global Execution Context
- [x] Walkthrough Example
- [x] Interview Questions
- [x] Quick Revision