# 14 - Callback Functions in JS ft. Event Listeners

## Callback Functions

Functions are first class citizens ie. take a function A and pass it to another function B.

Here, A is a callback function.

So basically I am giving access to function B to call function A.

This callback function gives us the access to whole Asynchronous world in Synchronous world.

JS is a synchronous and single threaded language.

But due to callbacks, we can do async things in JS.

In the call stack, first x and y are present.

After code execution, they go away and stack is empty.

Then after 5 seconds (from beginning) anonymous suddenly appear up in stack ie. setTimeout

All 3 functions are executed through call stack.

If any operation blocks the call stack, its called blocking the main thread.

## Event Listener

Lets implement a increment counter button.

Say if x() takes 30 sec to run, then JS has to wait for it to finish as it has only 1 call stack/1 main thread.

Never block main thread.

Always use async for functions that take time eg. setTimeout

We will create a button in html and attach event to it.

Using global variable (not good as anyone can change it)

Use closures for data abstraction

## Garbage Collection and removeEventListeners

Event listeners are heavy as they form closures.

So even when call stack is empty, EventListener won't free up memory allocated to count as it doesn't know when it may need count again.

So we remove event listeners when we don't need them (garbage collected)

onClick, onHover, onScroll all in a page can slow it down heavily.

