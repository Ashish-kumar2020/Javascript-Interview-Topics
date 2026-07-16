# 20 - Creating a Promise, Chaining & Error Handling

Promise is an object representing eventual completion or failure of an asynchronous operation.

Creating a Promise

new Promise()

Promise constructor takes a callback function.

The callback function takes two arguments:

- resolve
- reject

resolve() -> Promise fulfilled

reject() -> Promise rejected

Promise Chaining

Instead of:

callback(
  function() {
    callback(
      function() {
      }
    )
  }
)

We can use:

.then()
.then()
.then()

Error Handling

.catch()

catch handles errors occurring in promise chain.

Promise chaining improves readability.

It avoids callback hell.

Promises are immutable.

Once resolved or rejected, state cannot be changed.