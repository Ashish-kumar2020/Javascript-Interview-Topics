# 📚 Module 3 - Lexical Environment

---

# 📖 What is a Lexical Environment?

A **Lexical Environment** is a data structure that stores variables, function declarations, and a reference to its parent lexical environment.

It is created whenever an **Execution Context** is created.

Think of it as a **dictionary** that stores all identifiers available in the current scope.

---

# 🧠 Interview Answer

> A Lexical Environment is a data structure that stores variables, function declarations, and a reference to its parent lexical environment. It is created whenever an Execution Context is created and is used by JavaScript to resolve variables through the Scope Chain.

---

# 🏗️ Components of a Lexical Environment

Every Lexical Environment consists of **two components**.

```text
Lexical Environment
│
├── Environment Record
└── Outer Reference
```

---

# 1️⃣ Environment Record

The Environment Record stores everything declared inside the current scope.

It stores:

- Variables
- Function declarations
- Parameters

Example

```javascript
let a = 10;

const b = 20;

function greet() {}
```

Environment Record

```text
a → 10

b → 20

greet → function
```

Think of it as a **dictionary (key-value store)** for the current scope.

---

# 2️⃣ Outer Reference

Every Lexical Environment stores a reference to its **parent Lexical Environment**.

JavaScript uses this reference whenever it cannot find a variable in the current scope.

Example

```javascript
let x = 100;

function test() {

    let y = 200;
}
```

Visualization

```text
Global Lexical Environment

x → 100

↓

test() Lexical Environment

y → 200

↓

Outer Reference

↓

Global Lexical Environment
```

---

# 📦 When is a Lexical Environment created?

A new Lexical Environment is created **whenever a new Execution Context is created**.

Example

```javascript
function greet() {}

greet();
```

Execution

```text
Global Execution Context

↓

Global Lexical Environment

↓

greet()

↓

Function Execution Context

↓

Function Lexical Environment
```

---

# 💻 Example 1

```javascript
let a = 10;

function test() {

    let b = 20;

    console.log(a);
}

test();
```

Global Lexical Environment

```text
a → 10

test → function
```

---

Function Lexical Environment

```text
b → 20

Outer → Global
```

When JavaScript executes:

```javascript
console.log(a);
```

Current Lexical Environment

```text
b
```

`a` is not found.

↓

Follow **Outer Reference**

↓

Global Lexical Environment

```text
a → 10
```

Output

```text
10
```

---

# 💻 Example 2

```javascript
let a = 1;

function first() {

    let b = 2;

    function second() {

        let c = 3;

        console.log(a);
        console.log(b);
        console.log(c);
    }

    second();
}

first();
```

Visualization

```text
Global LE

a → 1

↓

first() LE

b → 2

↓

second() LE

c → 3
```

Variable Lookup

### `console.log(c)`

Current Scope

✅ Found

---

### `console.log(b)`

Current Scope

❌

↓

Parent

✅ Found

---

### `console.log(a)`

Current Scope

❌

↓

Parent

❌

↓

Global

✅ Found

---

# 🔄 Relationship with Execution Context

Remember:

Every Execution Context contains a Lexical Environment.

```text
Execution Context
│
├── Memory Component
├── Code Component
├── this Binding
└── Lexical Environment
```

Execution Context is the **workspace**.

Lexical Environment is the **storage section** inside that workspace.

---

# 🆚 Execution Context vs Lexical Environment

| Execution Context | Lexical Environment |
|-------------------|--------------------|
| Environment where code executes | Data structure inside the Execution Context |
| Contains Memory, Code, `this` and Lexical Environment | Stores variables, functions and Outer Reference |
| Created before executing code | Created whenever an Execution Context is created |

---

# 🆚 Lexical Environment vs Scope

Many developers confuse these two.

## Scope

Scope defines **where a variable can be accessed**.

Example

```javascript
{
    let x = 10;
}
```

`x` is accessible only inside the block.

This is **Scope**.

---

## Lexical Environment

Lexical Environment stores all variables and functions belonging to that scope.

Think of it like this:

```text
Scope

↓

Area where variable is accessible

----------------------------

Lexical Environment

↓

Stores the variables inside that area
```

---

# 📊 Visualization

```javascript
let x = 1;

function one() {

    let y = 2;

    function two() {

        let z = 3;
    }

    two();
}

one();
```

Visualization

```text
Global LE

x → 1

one → function

↓

Outer → null

----------------------------

one() LE

y → 2

two → function

↓

Outer → Global LE

----------------------------

two() LE

z → 3

↓

Outer → one() LE
```

Every Lexical Environment has exactly **one parent**.

---

# 🚨 Common Interview Mistakes

❌ Lexical Environment and Scope are the same.

✅ Correct

Scope defines **where** a variable can be accessed.

Lexical Environment stores the variables belonging to that scope.

---

❌ Execution Context and Lexical Environment are the same.

✅ Correct

Execution Context is the complete execution workspace.

Lexical Environment is only one component inside it.

---

❌ Outer Reference stores variables.

✅ Correct

Outer Reference only stores a reference to the parent Lexical Environment.

---

# 🎯 Most Asked Interview Questions

### 1. What is a Lexical Environment?

A data structure that stores variables, function declarations, and a reference to its parent Lexical Environment.

---

### 2. What are the components of a Lexical Environment?

- Environment Record
- Outer Reference

---

### 3. What is an Environment Record?

It stores all variables, function declarations, and parameters belonging to the current scope.

---

### 4. What is an Outer Reference?

A reference pointing to the parent Lexical Environment.

JavaScript follows this reference while resolving variables.

---

### 5. When is a Lexical Environment created?

Whenever an Execution Context is created.

---

### 6. Difference between Execution Context and Lexical Environment?

Execution Context is the workspace.

Lexical Environment is the storage section inside that workspace.

---

### 7. Difference between Scope and Lexical Environment?

Scope defines accessibility.

Lexical Environment stores variables and functions.

---

# ⭐ Quick Revision

```text
Lexical Environment

↓

Contains

├── Environment Record
└── Outer Reference

----------------------------------

Environment Record

↓

Variables

Functions

Parameters

----------------------------------

Outer Reference

↓

Points to Parent Lexical Environment

----------------------------------

Created Whenever

↓

Execution Context is Created
```

---

# 📝 Interview Cheat Sheet

- Lexical Environment = Data structure.
- Stores:
  - Variables
  - Function declarations
  - Parameters
  - Outer Reference
- Components:
  - Environment Record
  - Outer Reference
- Created whenever an Execution Context is created.
- Execution Context contains a Lexical Environment.
- Outer Reference points to the parent Lexical Environment.
- Used by JavaScript to resolve variables through the Scope Chain.

---

# ✅ Module Completion Checklist

- [x] Definition
- [x] Components
- [x] Environment Record
- [x] Outer Reference
- [x] Creation of Lexical Environment
- [x] Relationship with Execution Context
- [x] Scope vs Lexical Environment
- [x] Execution Context vs Lexical Environment
- [x] Examples
- [x] Interview Questions
- [x] Quick Revision