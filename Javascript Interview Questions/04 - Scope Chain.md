# 📚 Module 5 - Scope Chain

---

# 📖 What is Scope Chain?

The **Scope Chain** is the mechanism JavaScript uses to resolve variables.

If a variable is not found in the current scope, JavaScript searches in the parent scope, then the grandparent scope, and continues until the global scope. If the variable is still not found, it throws a **ReferenceError**.

Think of it as JavaScript asking:

> "If I can't find the variable here, let me ask my parent."

---

# 🧠 Interview Answer

> The Scope Chain is the process JavaScript uses to resolve variables. It first searches for the variable in the current lexical environment. If it isn't found, JavaScript follows the Outer Reference to the parent lexical environment. This continues until the global scope. If the variable is still not found, JavaScript throws a ReferenceError.

---

# 🏗️ How does Scope Chain work?

JavaScript always searches in this order:

```text
Current Scope

↓

Parent Scope

↓

Grandparent Scope

↓

Global Scope

↓

null

↓

ReferenceError
```

JavaScript **never searches randomly**.

It only follows the **Outer Reference**.

---

# 💻 Example 1

```javascript
let a = 10;

function test() {
    console.log(a);
}

test();
```

Visualization

```text
Global Scope

a → 10

↓

test()

(no variables)

↓

Outer Reference

↓

Global Scope
```

Execution

```javascript
console.log(a);
```

JavaScript checks:

Current Scope

```text
❌ a not found
```

↓

Parent Scope

```text
✅ a = 10
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
Global Scope

a

↓

first()

b

↓

second()

c
```

---

### Searching for `c`

Current Scope

```text
✅ Found
```

Output

```text
3
```

---

### Searching for `b`

Current Scope

```text
❌ Not Found
```

↓

Parent Scope

```text
✅ Found
```

Output

```text
2
```

---

### Searching for `a`

Current Scope

```text
❌ Not Found
```

↓

Parent Scope

```text
❌ Not Found
```

↓

Global Scope

```text
✅ Found
```

Output

```text
1
```

---

# 💻 Example 3

```javascript
let a = 10;

function one() {

    function two() {
        console.log(x);
    }

    two();
}

one();
```

Searching for `x`

```text
Current Scope

↓

Parent Scope

↓

Global Scope

↓

null
```

Output

```text
ReferenceError: x is not defined
```

---

# 🔍 Variable Resolution Process

Whenever JavaScript encounters a variable:

```javascript
console.log(user);
```

It follows these steps:

1. Search in the current lexical environment.
2. If not found, follow the Outer Reference.
3. Search in the parent lexical environment.
4. Continue until the global scope.
5. If still not found, throw a `ReferenceError`.

---

# 🌑 Shadowing

If the variable exists in the current scope, JavaScript **stops searching immediately**.

Example

```javascript
let a = 10;

function test() {

    let a = 20;

    console.log(a);
}

test();
```

Searching

```text
Current Scope

a → 20
```

Found.

JavaScript **never** goes to the global scope.

Output

```text
20
```

This is called **Shadowing**.

---

# 💻 Another Example

```javascript
let a = 10;

function first() {

    let b = 20;

    function second() {

        let a = 30;

        console.log(a);
        console.log(b);
    }

    second();
}

first();
```

Searching for `a`

```text
Current Scope

a → 30
```

Found.

Searching stops.

---

Searching for `b`

```text
Current Scope

❌

↓

Parent Scope

b → 20
```

Found.

Output

```text
30
20
```

---

# 🆚 Scope vs Scope Chain

## Scope

Scope defines **where a variable is accessible**.

Example

```javascript
{
    let x = 10;
}
```

`x` is accessible only inside this block.

This is **Scope**.

---

## Scope Chain

Scope Chain defines **how JavaScript finds variables**.

Example

```javascript
function test() {
    console.log(a);
}
```

JavaScript searches

```text
Current Scope

↓

Parent Scope

↓

Global Scope
```

This is the **Scope Chain**.

---

# 🆚 Lexical Environment vs Scope Chain

| Lexical Environment | Scope Chain |
|---------------------|-------------|
| Stores variables, functions and Outer Reference | Uses the Outer Reference to resolve variables |
| Data Structure | Variable lookup mechanism |
| Created with every Execution Context | Used whenever a variable is accessed |

---

# 🔗 Relationship with Lexical Environment

Every Lexical Environment contains:

```text
Environment Record

+

Outer Reference
```

The Scope Chain works because of the **Outer Reference**.

Visualization

```text
Lexical Environment

↓

Outer Reference

↓

Parent Lexical Environment

↓

Scope Chain
```

---

# 💻 Example

```javascript
let x = 100;

function one() {

    let y = 200;

    function two() {

        let z = 300;

        console.log(x);
        console.log(y);
        console.log(z);
    }

    two();
}

one();
```

Visualization

```text
Global LE

x

↓

one() LE

y

↓

two() LE

z
```

Variable Resolution

```text
z

↓

Current Scope

---------------------

y

↓

Parent Scope

---------------------

x

↓

Global Scope
```

---

# 🚨 Common Interview Mistakes

❌ Scope and Scope Chain are the same.

✅ Correct

Scope tells **where** a variable is accessible.

Scope Chain tells **how** JavaScript finds that variable.

---

❌ JavaScript searches every function.

✅ Correct

JavaScript only searches along the **Scope Chain**.

---

❌ Scope Chain searches randomly.

✅ Correct

It always follows:

Current Scope

↓

Parent Scope

↓

Global Scope

---

❌ Scope Chain works without Lexical Environment.

✅ Correct

Scope Chain depends on the **Outer Reference** stored inside the Lexical Environment.

---

# 🎯 Most Asked Interview Questions

### 1. What is Scope Chain?

The process JavaScript uses to resolve variables.

---

### 2. How does JavaScript resolve a variable?

- Search current scope.
- Follow Outer Reference.
- Search parent scope.
- Continue until global scope.
- Throw `ReferenceError` if not found.

---

### 3. What happens if a variable is not found?

JavaScript throws

```text
ReferenceError: variable is not defined
```

---

### 4. Difference between Scope and Scope Chain?

Scope

↓

Accessibility of variables.

Scope Chain

↓

Variable lookup mechanism.

---

### 5. Difference between Lexical Environment and Scope Chain?

Lexical Environment stores variables and Outer Reference.

Scope Chain uses those Outer References to resolve variables.

---

### 6. Why does Shadowing work?

Because JavaScript always checks the current scope first.

If the variable is found, it stops searching.

---

# ⭐ Quick Revision

```text
Variable Lookup

↓

Current Scope

↓

Parent Scope

↓

Grandparent Scope

↓

Global Scope

↓

null

↓

ReferenceError

----------------------------------

Scope

↓

Where variable is accessible

----------------------------------

Scope Chain

↓

How JavaScript finds variables

----------------------------------

Lexical Environment

↓

Stores variables

+

Outer Reference

↓

Used by Scope Chain
```

---

# 📝 Interview Cheat Sheet

- Scope Chain = Variable lookup mechanism.
- JavaScript searches:
  - Current Scope
  - Parent Scope
  - Global Scope
- Uses the **Outer Reference** from the Lexical Environment.
- Stops searching as soon as the variable is found.
- If the variable isn't found anywhere → `ReferenceError`.
- Scope ≠ Scope Chain.
- Lexical Environment stores data.
- Scope Chain uses that data.

---

# ✅ Module Completion Checklist

- [x] Definition
- [x] Variable Resolution
- [x] Scope Chain Flow
- [x] Relationship with Lexical Environment
- [x] Shadowing
- [x] Scope vs Scope Chain
- [x] Lexical Environment vs Scope Chain
- [x] Examples
- [x] Interview Questions
- [x] Quick Revision