# 9 - Let, Const and Var

These are ways to declare variable in javascript

let and const variable are also hoisted, its just they are in temporal dead zone

Temporal Dead Zone - It is the phenomena since when the let and const variable was hoisted till it gets initialised with some value the time between them is known as Temporal Dead Zone.

So if we try to access the variable inside the Temporal dead zone it will give us reference error.

Not defined error - so let say we want to search a value in our code and that value is not present in our code then it will error as not defined

Note : const variable should be initialised at the time when they are declared else they will give error

Order of use of these three variable declaration

const >> let >> var

When to use which variable declaration :

const : when we that the value is not going to change in whole code

let : always try to use this

var : avoid using this

How to avoid TDZ?

Variable Shadowing:

In JavaScript, variable shadowing occurs when a variable with the same name as a variable in a higher scope is declared in a lower scope.

It's a common practice but can lead to confusion if not used carefully because the inner variable will "shadow" the outer variable.

In first example, let a inside the if block shadows the outer let a, and they are two separate variables despite having the same name.

Illegal Shadowing:

This occurs when trying to shadow a variable using var within the same scope where that variable is already defined using let or const.

To avoid temporal dead zone always try to declare all the constant values at the top of the code

In second example, var b = "Bye"; is illegal shadowing because b is already declared using let in the same scope.

Hoisting:

In JavaScript, hoisting is a behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase.

However, only the declarations are hoisted, not the initializations or assignments.

In third example, console.log(a); will result in undefined because the variable a is hoisted to the top but not initialized until later in the code (var a = 10;).

Temporal Dead Zone (TDZ):

TDZ is a specific behavior related to variables declared using let and const. It refers to the period between the start of the block scope and the actual declaration of the variable.

During the TDZ, accessing the variable will result in a ReferenceError.

In fourth example, trying to log a, b, and c before their respective declarations will result in ReferenceError because they are in the TDZ until they are declared.