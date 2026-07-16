# 8 - The Scope Chain, Lexical Environment

Scope - Where you can find a specific variable or function in the code

Whenever a Execution Context is created a Lexical Environment is also created.

Lexical Environment - it is the local memory along with the lexical environment of its parent memory.

Below is the example to understand Lexical scope

With the above diagram we can conclude that

c() has access to its local memory along with its parent which is a() and also has access to its parent which is GEC

a() has access to its local memory along with its parent which is GEC and also has access to its parent which is null

GEC has access to its own memory address along with its parent which is null

So when we try to find out any value js first search for the value in its local memory and if it does not find the value then it searches the value in its parent memory address

and if it does not find then it goes for its parent and so on and at last if it does not find the value it returns null(value is not present in the memory)