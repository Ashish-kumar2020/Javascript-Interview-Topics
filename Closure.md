# 10 - Closure

Closure is function along with its lexical scope , bundled together forms a closure

JavaScript has a lexcial scope environment. If a function needs to access a variable, it first goes to its local memory. When it does not find it there, it goes to the memory of its lexical parent. See Below code, Over here function y along with its lexical scope i.e. (function x) would be called a closure.

In above code, When y is returned, not only is the function returned but the entire closure (fun y + its lexical scope) is returned and put inside z. So when z is used somewhere else in program, it still remembers var a inside x()

Another Example

Thus In simple words, we can say:

A closure is a function that has access to its outer function scope even after the function has returned.

Meaning, A closure can remember and access variables and arguments reference of its outer function even after the function has returned.

Advantages of Closure

- Module Design Pattern
- Currying
- Function like once
- Memoization
- SetTimeout
- Iteration

Disadvantages of Closure

- Over Consumption of memory
- Memory Leak
- Freeze Browser

