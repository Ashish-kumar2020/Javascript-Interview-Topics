# 📚 Module 1 - `var` vs `let` vs `const`

---

# 📖 What are `var`, `let`, and `const`?

`var`, `let`, and `const` are keywords used to declare variables in JavaScript.

The difference between them lies in:

- Scope
- Hoisting
- Redeclaration
- Reassignment
- Temporal Dead Zone
- Global Object Behavior

---

# 🧠 Interview Answer

> `var`, `let`, and `const` are all used to declare variables in JavaScript. `var` is function-scoped, whereas `let` and `const` are block-scoped. `var` can be both redeclared and reassigned. `let` can be reassigned but not redeclared within the same scope. `const` can neither be redeclared nor reassigned and must be initialized at the time of declaration. All three are hoisted, but `var` is initialized with `undefined`, while `let` and `const` remain uninitialized until execution reaches their declaration. The period before initialization is called the **Temporal Dead Zone (TDZ)**, and accessing them during this period throws a **ReferenceError**.

---

# 📊 Comparison Table

| Feature | `var` | `let` | `const` |
|----------|-------|--------|----------|
| Scope | Function | Block | Block |
| Redeclare | ✅ Yes | ❌ No | ❌ No |
| Reassign | ✅ Yes | ✅ Yes | ❌ No |
| Hoisted | ✅ Yes | ✅ Yes | ✅ Yes |
| Initialized During Memory Phase | `undefined` | ❌ Uninitialized | ❌ Uninitialized |
| TDZ | ❌ No | ✅ Yes | ✅ Yes |
| Must Initialize | ❌ No | ❌ No | ✅ Yes |
| Global `window` Property | ✅ Yes (Global `var`) | ❌ No | ❌ No |

---

# 🌍 Scope

## `var` → Function Scope

A variable declared with `var` is accessible throughout the function in which it is declared.

```javascript
function test() {
    if (true) {
        var a = 10;
    }

    console.log(a);
}

test();
```

Output

```text
10
```

---

## `let` & `const` → Block Scope

Variables declared with `let` and `const` are only accessible inside the block `{}` where they are declared.

```javascript
if (true) {
    let a = 10;
    const b = 20;
}

console.log(a);
console.log(b);
```

Output

```text
ReferenceError
ReferenceError
```

---

# 🔥 Hoisting

All three (`var`, `let`, and `const`) are hoisted.

### `var`

During the Memory Creation Phase:

```text
a → undefined
```

```javascript
console.log(a);

var a = 10;
```

Output

```text
undefined
```

---

### `let`

During the Memory Creation Phase:

```text
a → uninitialized
```

```javascript
console.log(a);

let a = 10;
```

Output

```text
ReferenceError
```

---

### `const`

```javascript
console.log(a);

const a = 10;
```

Output

```text
ReferenceError
```

---

# ⏳ Temporal Dead Zone (TDZ)

## Definition

The **Temporal Dead Zone (TDZ)** is the period from when a `let` or `const` variable is hoisted until it is initialized.

During this period, accessing the variable throws a **ReferenceError**.

Visualization

```text
Memory Creation
        │
        ▼
Variable Hoisted
        │
        ▼
──────── TDZ ────────
        │
        ▼
Declaration Executes
        │
        ▼
Variable Initialized
```

---

# 🚫 Why is `var` not inside TDZ?

`var` is initialized with `undefined` during the Memory Creation Phase.

```javascript
console.log(a);

var a = 10;
```

Output

```text
undefined
```

Because:

```text
Memory Phase

a → undefined
```

---

# 🔄 Redeclaration vs Reassignment

## `var`

```javascript
var a = 10;
var a = 20;

a = 30;
```

✅ Allowed

---

## `let`

```javascript
let a = 10;

let a = 20;
```

❌ SyntaxError

```javascript
let a = 10;

a = 20;
```

✅ Allowed

---

## `const`

```javascript
const a = 10;

const a = 20;
```

❌ SyntaxError

```javascript
const a = 10;

a = 20;
```

❌ TypeError

---

# ❗ Can `const` be declared without initialization?

No.

```javascript
const a;
```

Output

```text
SyntaxError: Missing initializer in const declaration
```

---

# 🪟 Why does `var` become a property of `window`?

Global variables declared with `var` become properties of the browser's `window` object.

```javascript
var a = 10;

console.log(window.a);
```

Output

```text
10
```

---

`let` and `const` are stored in the **Global Lexical Environment**, not on `window`.

```javascript
let b = 20;
const c = 30;

console.log(window.b);
console.log(window.c);
```

Output

```text
undefined
undefined
```

---

# 🧊 Is `const` Immutable?

❌ No.

`const` makes the **reference immutable**, **not the object**.

---

### Allowed

```javascript
const user = {
    name: "Ashu"
};

user.name = "John";
```

Reason:

The object reference doesn't change.

---

### Not Allowed

```javascript
const user = {
    name: "Ashu"
};

user = {
    name: "John"
};
```

Output

```text
TypeError: Assignment to constant variable.
```

Reason:

The variable is pointing to a new object (reference changes).

---

# 🚫 Illegal Shadowing

Illegal shadowing occurs when a declaration violates JavaScript's scoping rules.

```javascript
let a = 10;

{
    var a = 20;
}
```

Output

```text
SyntaxError: Identifier 'a' has already been declared
```

---

# 🚨 Common JavaScript Errors

| Error | Cause |
|--------|-------|
| **ReferenceError** | Variable doesn't exist or is in TDZ |
| **TypeError** | Invalid operation (e.g., reassigning `const`) |
| **SyntaxError** | Invalid JavaScript syntax (e.g., redeclaring `let`, declaring `const` without initialization) |

---

# 🚨 Common Interview Mistakes

❌ "`let` is not hoisted."

✅ Correct:

> `let` is hoisted but remains **uninitialized** until its declaration executes.

---

❌ "`const` makes objects immutable."

✅ Correct:

> `const` makes the **reference immutable**, not the object.

---

❌ "`var` is global."

✅ Correct:

> `var` is **function-scoped**. Only a **global `var`** becomes a property of `window`.

---

# 🎯 Most Asked Interview Follow-up Questions

### 1. If `let` and `const` are hoisted, why do they throw `ReferenceError`?

Because they remain **uninitialized** until execution reaches their declaration.

---

### 2. What is TDZ?

The period between hoisting and initialization of `let` and `const`.

---

### 3. Why can we modify a `const` object?

Because `const` prevents changing the reference, not the object's properties.

---

### 4. Why doesn't `var` have a TDZ?

Because `var` is initialized with `undefined` during the Memory Creation Phase.

---

### 5. Why are `let` and `const` not properties of `window`?

Because they are stored in the **Global Lexical Environment**, not on the global object.

---

### 6. What is Block Scope?

Variables declared with `let` and `const` are only accessible inside the block `{}` where they are declared.

---

### 7. What is Function Scope?

Variables declared with `var` are accessible throughout the function where they are declared.

---

# ⭐ Quick Revision

```text
var
│
├── Function Scope
├── Redeclare ✅
├── Reassign ✅
├── Hoisted
├── Initialized → undefined
├── No TDZ
└── Global var → window property

----------------------------------------

let
│
├── Block Scope
├── Redeclare ❌
├── Reassign ✅
├── Hoisted
├── TDZ
└── Not a window property

----------------------------------------

const
│
├── Block Scope
├── Redeclare ❌
├── Reassign ❌
├── Must Initialize
├── TDZ
├── Reference Immutable
└── Not a window property
```

---

# 📝 Interview Cheat Sheet

- `var` → Function Scope
- `let` / `const` → Block Scope
- All three are hoisted.
- `var` → `undefined`
- `let` / `const` → TDZ
- `const` protects the **reference**, not the object.
- Global `var` → `window`
- Global `let` / `const` → Global Lexical Environment
- `ReferenceError` → TDZ / variable not found
- `TypeError` → Invalid operation (e.g., reassigning `const`)
- `SyntaxError` → Invalid syntax (e.g., redeclaration, `const` without initialization)

---

# ✅ Module Completion Checklist

- [x] `var` vs `let` vs `const`
- [x] Scope
- [x] Hoisting
- [x] Temporal Dead Zone
- [x] Redeclaration
- [x] Reassignment
- [x] `window` Object
- [x] `const` Objects
- [x] Illegal Shadowing
- [x] Interview Follow-up Questions