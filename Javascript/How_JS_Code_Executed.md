# 2 - How JavaScript Code is Executed

Below is the code snippet for which we will see how javascript code is executed

## 1. Global Execution Context Creation

When this piece of code is run, JavaScript creates a Global Execution Context.

The execution context is responsible for managing the code that is currently being executed.

There are two main phases within this context:

### Memory Creation Phase (Creation Phase / Hoisting Phase)

In this phase, the JavaScript engine sets up memory space for variables, functions, and objects.

Variables and Objects are initially assigned a placeholder value of undefined.

Function declarations are fully hoisted, meaning the entire function definition (code) is stored in memory.

For the given code:

n is set to undefined.

The function square is stored in memory with its complete code.

result is also set to undefined.

## 2. Function Execution Context Creation

When the function square(n) is invoked, a new Function Execution Context is created specifically for this function call.

This context is created within the Global Execution Context and includes its own Memory Creation and Code Execution phases.

### Code Execution Phase (Execution Phase)

In this phase, the JavaScript engine assigns actual values to the variables and executes the code line by line.

First line:

var n = 2;

Here, the value 2 is assigned to n.

Second line:

The function square(num) is defined.

Since it's a declaration, it was already stored in memory during the Memory Creation Phase, so no action is taken here.

Third line:

var result = square(n);

This line triggers the invocation of the square function.

## 3. Returning to the Global Execution Context

### Memory Creation Phase (Inside Function)

The parameter num is set to undefined initially.

Local variables and function declarations within the square function (if any) would also be hoisted and set to undefined.

### Code Execution Phase (Inside Function)

The parameter num is assigned the value passed in the function call, which is 2.

The function executes the code:

return num * num;

resulting in 4.

The result 4 is returned to the calling context.

Once the function execution is completed, its execution context is popped off the call stack, and control returns to the Global Execution Context.

The returned value 4 is then assigned to the variable result.

## Note: Call Stack

The Call Stack manages the order of execution contexts.

When the program starts, the Global Execution Context is pushed onto the stack.

When a function is invoked, a new execution context is pushed onto the stack.

Once the function completes execution, its context is popped off the stack, and control returns to the previous context.

