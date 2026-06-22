# 24 - this Keyword

this keyword behaves differently in JavaScript depending upon how it is used.

## this in Global Space

At global level:

```js
console.log(this);
```

In browser:

this === window

## this inside a Function

Value depends upon strict mode.

Non strict mode:

this refers to global object.

Strict mode:

this is undefined.

## this inside Object Method

this refers to object itself.

```js
const obj = {
  x: 10,
  getX() {
    console.log(this.x);
  }
}
```

## this inside Arrow Function

Arrow functions do not have their own this.

They inherit this from lexical scope.

## this inside DOM

Reference to HTML element.

## call apply bind

Used to control value of this keyword.

Value of this depends on how function is called.