# 22 - Async Await

Async Await is used to handle promises.

It is just a syntactic sugar over promises.

Async function always returns a promise.

```js
async function getData() {

}
```

If a value is returned from async function, JavaScript automatically wraps it inside a promise.

Await keyword can only be used inside async function.

await waits for promise to be resolved.

When JavaScript sees await, execution of async function is suspended.

Once promise gets resolved, execution resumes from where it stopped.

Example:

```js
const data = await promise;
```

JavaScript does not block the main thread.

Only execution of that async function is paused.

Async Await makes promise handling easier and cleaner.

It removes the need for multiple .then() chains.

Error Handling

try {

}

catch(err) {

}

Use try catch block to handle errors.

Async Await and Promise both work together.