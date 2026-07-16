# 19 - Callback

There are 2 Parts of Callback:

1. Good Part of callback

Callback are super important while writing asynchronous code in JS

2. Bad Part of Callback

Using callback we can face issue:

- Callback Hell
- Inversion of control

Understanding of Bad part of callback is super important to learn Promise in next lecture.

JavaScript is synchronous, single threaded language.

It can Just do one thing at a time, it has just one call-stack and it can execute one thing at a time.

Whatever code we give to Javascript will be quickly executed by Javascript engine, it does not wait.

But what if we have to delay execution of any line, we could utilize callback.

How?

e-Commerce web app situation

Assume a scenario of e-Commerce web, where one user is placing order, he has added items like, shoes, pants and kurta in cart and now he is placing order.

So in backend the situation could look something like this.

Assumption, once order is created then only we can proceed to payment, so there is a dependency.

So How to manage this dependency.

Callback can come as rescue.

How?

To make it a bit complicated, what if after payment is done, you have to show Order summary by calling api.showOrderSummary() and now it has dependency on api.proceedToPayment()

Now my code should look something like this.

Now what if we have to update the wallet, now this will have a dependency over previous step.

This creates Callback Hell.

Callback Hell is also known as Pyramid of Doom.

Inversion of Control

When we pass a callback function into another function, we are giving control of our callback to another piece of code.

This is called inversion of control.

We lose control of our code.

This is one of the major issues with callbacks.

Promise was introduced to solve these problems.