# 25 - Currying

Currying is a technique of transforming a function that takes multiple arguments into sequence of functions.

Example

```js
function multiply(a) {
  return function(b) {
    return a * b;
  };
}
```

Usage

```js
multiply(2)(3)
```

Output

```js
6
```

Advantages of Currying

- Code Reusability
- Function Composition
- Avoid Repetition
- Better Functional Programming

Currying can be implemented using closures.

Closures help remember outer variable values.

Currying is one of the major use cases of closures.