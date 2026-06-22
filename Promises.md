# 21 - Creating a Promise, Chaining & Error Handling

Promise States

1. Pending
2. Fulfilled
3. Rejected

A Promise object can be:

Pending

Fulfilled

Rejected

Promise Objects are immutable.

Once fulfilled or rejected, state cannot be changed.

Promise Chaining

.then()

.then()

.then()

.catch()

This helps us avoid callback hell.

Error handling becomes easier.

Instead of nesting callbacks deeply, we chain promises.

This improves code readability and maintainability.

Promise objects store result values which can be accessed later.

Using .catch() we can catch errors from any previous promise in the chain.