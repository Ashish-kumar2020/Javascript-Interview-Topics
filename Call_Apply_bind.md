# 26 - Call Apply Bind

These methods are used for function borrowing.

They help us control value of this keyword.

## call()

Invokes function immediately.

Arguments passed individually.

```js
fn.call(obj, arg1, arg2);
```

## apply()

Invokes function immediately.

Arguments passed as array.

```js
fn.apply(obj, [arg1, arg2]);
```

## bind()

Does not invoke function immediately.

Returns a new function.

```js
const newFn = fn.bind(obj);
```

Later

```js
newFn();
```

Difference

call()

- Immediate execution
- Arguments individually

apply()

- Immediate execution
- Arguments as array

bind()

- Returns new function
- Executes later

Function Borrowing

One object can borrow methods of another object using call apply bind.

These methods are used extensively in JavaScript interviews.