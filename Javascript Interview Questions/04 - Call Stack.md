# 📚 Module 4 - Call Stack

---

# 📖 What is Call Stack?

The **Call Stack** is a data structure used by the JavaScript engine to keep track of function calls and their Execution Contexts.

It follows the **LIFO (Last In, First Out)** principle.

Think of it as a stack of plates.

```text
Plate C   ← Removed First

Plate B

Plate A
```

The last plate placed on the stack is removed first.

The Call Stack behaves exactly the same way.

---

# 🧠 Interview Answer

> The Call Stack is a data structure used by the JavaScript engine to manage function calls and their Execution Contexts. Whenever a function is invoked, a new Function Execution Context is pushed onto the stack. When the function finishes execution, its Execution Context is popped off the stack. It follows the LIFO (Last In, First Out) principle.

---

# 🏗️ What does the Call Stack store?

The Call Stack stores **Execution Contexts**.

It stores:

- Global Execution Context (GEC)
- Function Execution Contexts (FEC)

It **does not** store:

- Variables
- Objects
- Arrays
- Functions themselves

Those are managed inside the corresponding Execution Context.

---

# 🔄 How does the Call Stack work?

Whenever a function is called:

1. Create a Function Execution Context.
2. Push it onto the Call Stack.
3. Execute the function.
4. Remove (Pop) the Function Execution Context after execution.

Visualization

```text
Function Call

↓

Push Function Execution Context

↓

Execute Function

↓

Pop Function Execution Context
```

---

# 📌 LIFO (Last In First Out)

Call Stack follows the **LIFO** principle.

The most recently added Execution Context is always executed first.

```text
Push A

↓

Push B

↓

Push C

↓

Pop C

↓

Pop B

↓

Pop A
```

---

# 💻 Example 1

```javascript
function one() {
    console.log("One");
}

one();
```

Initially

```text
Call Stack

↓

Global Execution Context
```

---

After calling `one()`

```text
Function Execution Context (one)

↓

Global Execution Context
```

Output

```text
One
```

After execution

```text
Global Execution Context
```

Program ends

```text
Empty Call Stack
```

---

# 💻 Example 2

```javascript
function one() {
    console.log("One");
}

function two() {
    one();
    console.log("Two");
}

two();
```

---

## Step 1

Program starts.

```text
Call Stack

↓

Global Execution Context
```

---

## Step 2

```javascript
two();
```

Push

```text
Function Execution Context (two)

↓

Global Execution Context
```

---

## Step 3

Inside `two()`

```javascript
one();
```

Push

```text
Function Execution Context (one)

↓

Function Execution Context (two)

↓

Global Execution Context
```

---

## Step 4

Execute

```javascript
console.log("One");
```

Output

```text
One
```

---

## Step 5

`one()` finishes.

Pop

```text
Function Execution Context (two)

↓

Global Execution Context
```

---

## Step 6

Continue inside `two()`

```javascript
console.log("Two");
```

Output

```text
Two
```

---

## Step 7

`two()` finishes.

Pop

```text
Global Execution Context
```

---

## Step 8

Program ends.

Pop Global Execution Context.

```text
Empty Call Stack
```

---

# 📊 Complete Visualization

```text
Program Starts

↓

Global Execution Context

↓

two()

↓

one()

↓

Pop one()

↓

Continue two()

↓

Pop two()

↓

Pop Global Execution Context

↓

Program Ends
```

---

# 💻 Example 3

```javascript
function first() {
    second();
}

function second() {
    third();
}

function third() {
    console.log("Hello");
}

first();
```

Call Stack

```text
Function Execution Context (third)

↓

Function Execution Context (second)

↓

Function Execution Context (first)

↓

Global Execution Context
```

Output

```text
Hello
```

Execution finishes

```text
Pop third()

↓

Pop second()

↓

Pop first()

↓

Pop Global Execution Context
```

---

# 🚨 Stack Overflow

One of the most common interview questions.

```javascript
function test() {
    test();
}

test();
```

Execution

```text
test()

↓

test()

↓

test()

↓

test()

↓

...
```

The Call Stack keeps growing.

Eventually JavaScript throws

```text
RangeError: Maximum call stack size exceeded
```

This is known as **Stack Overflow**.

---

# 🆚 Call Stack vs Execution Context

| Call Stack | Execution Context |
|------------|-------------------|
| Data structure | Workspace |
| Stores Execution Contexts | Stores variables, functions, `this`, etc. |
| Pushes and pops contexts | Executes JavaScript code |

Think of it like:

```text
Call Stack

↓

File Cabinet

------------------------

Execution Context

↓

File inside the cabinet
```

---

# 🔗 Relationship with Execution Context

Whenever a function is invoked

```text
Function Call

↓

Create Function Execution Context

↓

Push onto Call Stack

↓

Execute Function

↓

Pop from Call Stack
```

The Call Stack manages **Execution Contexts**.

---

# 💻 Complete Flow Example

```javascript
function one() {
    console.log("One");
}

function two() {
    one();
    console.log("Two");
}

console.log("Start");

two();

console.log("End");
```

---

## Step 1

Program starts.

```text
Call Stack

↓

Global Execution Context
```

---

## Step 2

```javascript
console.log("Start");
```

Output

```text
Start
```

---

## Step 3

```javascript
two();
```

Push

```text
Function Execution Context (two)

↓

Global Execution Context
```

---

## Step 4

```javascript
one();
```

Push

```text
Function Execution Context (one)

↓

Function Execution Context (two)

↓

Global Execution Context
```

---

## Step 5

```javascript
console.log("One");
```

Output

```text
One
```

Pop `one()`

```text
Function Execution Context (two)

↓

Global Execution Context
```

---

## Step 6

```javascript
console.log("Two");
```

Output

```text
Two
```

Pop `two()`

```text
Global Execution Context
```

---

## Step 7

```javascript
console.log("End");
```

Output

```text
End
```

Program finishes.

Pop Global Execution Context.

```text
Empty Call Stack
```

---

## Final Output

```text
Start

One

Two

End
```

---

# 🚨 Common Interview Mistakes

❌ Call Stack stores variables.

✅ Correct

Call Stack stores **Execution Contexts**.

---

❌ A new Global Execution Context is created every time a function runs.

✅ Correct

Only one Global Execution Context exists.

Each function invocation creates a new Function Execution Context.

---

❌ Call Stack executes functions randomly.

✅ Correct

Functions execute according to the **LIFO** principle.

---

# 🎯 Most Asked Interview Questions

### 1. What is a Call Stack?

A data structure used by JavaScript to manage function calls and Execution Contexts.

---

### 2. What does the Call Stack store?

- Global Execution Context
- Function Execution Contexts

---

### 3. Why does the Call Stack follow LIFO?

Because the last function called is the first one to finish execution and be removed.

---

### 4. What happens when a function is called?

- Function Execution Context is created.
- It is pushed onto the Call Stack.
- Function executes.
- Execution Context is popped after completion.

---

### 5. What is Stack Overflow?

It occurs when too many Function Execution Contexts are pushed onto the Call Stack (usually because of infinite recursion), exceeding its maximum size.

---

### 6. Difference between Call Stack and Execution Context?

Call Stack manages Execution Contexts.

Execution Context is the environment where JavaScript executes code.

---

# ⭐ Quick Revision

```text
Call Stack

↓

Stores

├── Global Execution Context
└── Function Execution Contexts

----------------------------------

Function Called

↓

Create Function Execution Context

↓

Push to Call Stack

↓

Execute Function

↓

Pop Function Execution Context

----------------------------------

Follows

↓

LIFO

(Last In First Out)

----------------------------------

Infinite Recursion

↓

Stack Overflow

↓

RangeError
```

---

# 📝 Interview Cheat Sheet

- Call Stack = Data structure.
- Stores Execution Contexts.
- Follows LIFO.
- One Global Execution Context.
- Every function call creates a Function Execution Context.
- Function Execution Context is pushed when the function starts.
- Function Execution Context is popped when the function returns.
- Infinite recursion → Stack Overflow.
- Error:

```text
RangeError: Maximum call stack size exceeded
```

---

# ✅ Module Completion Checklist

- [x] Definition
- [x] LIFO
- [x] What Call Stack stores
- [x] Function Call Flow
- [x] Push & Pop
- [x] Relationship with Execution Context
- [x] Stack Overflow
- [x] Examples
- [x] Interview Questions
- [x] Quick Revision