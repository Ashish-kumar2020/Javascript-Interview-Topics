# 31 - Prototype & Prototypal Inheritance

JavaScript is a prototype based language.

Every object has access to another object through prototype chain.

Example

```js
let arr = [1, 2, 3];
```

arr has access to Array methods because of prototype.

Examples

```js
arr.push()
arr.pop()
arr.map()
```

These methods are available through Array Prototype.

## Prototype Chain

When JavaScript tries to access a property:

1. Check current object
2. Check prototype
3. Check prototype's prototype
4. Continue until null

## Prototypal Inheritance

Objects inherit properties and methods from other objects through prototype chain.

Example

```js
const parent = {
  name: "Parent"
};

const child = Object.create(parent);
```

child can access properties of parent.

This mechanism is called Prototypal Inheritance.

## Advantages

- Code Reusability
- Memory Efficiency
- Shared Methods

Everything in JavaScript ultimately derives from Object Prototype.

Prototype chain ends at null.