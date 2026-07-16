# 15 - Asynchronous JavaScript & EVENT LOOP from scratch

Browser has JS Engine which has Call Stack which has Global execution context, local execution context etc.

## WebAPIs

None of the below are part of Javascript!

These are extra superpowers that browser has.

Browser gives access to JS callstack to use these powers.

But browser has many other superpowers - Local storage space, Timer, place to enter URL, Bluetooth access, Geolocation access and so on.

Now JS needs some way to connect the callstack with all these superpowers.

This is done using Web APIs.

setTimeout(), DOM APIs, fetch(), localstorage, console (yes, even console.log is not JS!!), location and so many more.

setTimeout() : Timer function

DOM APIs : eg.Document.xxxx ; Used to access HTML DOM tree. (Document Object Manipulation)

fetch() : Used to make connection with external servers eg. Netflix servers etc.

We get all these inside call stack through global object ie. window

Use window keyword like :

window.setTimeout()

window.localstorage

window.console.log()

to log something inside console.

As window is global obj, and all the above functions are present in global object, we don't explicity write window but it is implied.

## Event Loops and Callback Queue

Q: How after 5 secs timer is console?

First a GEC is created and put inside call stack.

console.log("Start");

this calls the console web api (through window) which in turn actually modifies values in console.

setTimeout(function cb() {

this calls the setTimeout web api which gives access to timer feature.

It stores the callback cb() and starts timer.

console.log("Callback");

}, 5000);

console.log("End");

calls console api and logs in console window.

After this GEC pops from call stack.

While all this is happening, the timer is constantly ticking.

After it becomes 0, the callback cb() has to run.

Now we need this cb to go into call stack.

Only then will it be executed.

For this we need event loop and Callback queue.

cb() cannot simply directly go to callstack to be execeuted.

It goes through the callback queue when timer expires.

Q: Another example to understand Eventloop & Callback Queue.

Event loop keep checking the callback queue, and see if it has any element to puts it into call stack.

It is like a gate keeper.

Once cb() is in callback queue, eventloop pushes it to callstack to run.

Console API is used and log printed.

Q: Need of callback queue?

Ans: Suppose user clciks button x6 times.

So 6 cb() are put inside callback queue.

Event loop sees if call stack is empty/has space and whether callback queue is not empty(6 elements here).

Elements of callback queue popped off, put in callstack, executed and then popped off from call stack.

Behaviour of fetch (Microtask Queue?)

Eventloop has just one job to keep checking callback queue and if found something push it to call stack and delete from callback queue.

Callback flow

What enters the Microtask Queue ?

All the callback functions that come through promises go in microtask Queue.