# 12 - Closure Interview Questions

1 - What is Closure in Javascript?

Ans: A function along with reference to its outer environment together forms a closure.

Or in other words, A Closure is a combination of a function and its lexical scope bundled together.

2 - Will the below code still forms a closure?

Yes, because inner function forms a closure with its outer environment so sequence doesn't matter.

Q3: Changing var to let, will it make any difference?

Ans: It will still behave the same way.

Q4: Will inner function have the access to outer function argument?

Ans: Inner function will now form closure and will have access to both a and str.

Q5: In below code, will inner form closure with outest?

Ans: Yes, inner will have access to all its outer environment.

Q6: Output of below code and explaination?

Ans: Still the same output, the inner function will have reference to inner a, so conflicting name won't matter here.

If it wouldn't have find a inside outer function then it would have went more outer to find a and thus have printed 100.

So, it try to resolve variable in scope chain and if a wouldn't have been found it would have given reference error.

Q7: Advantage of Closure?

Q8: Discuss more on Data hiding and encapsulation?

- Module Design Pattern
- Currying
- Memoize
- Data hiding and encapsulation
- setTimeouts etc.

Q9: Disadvantage of closure?

Ans: Overconsumption of memory when using closure as everytime as those closed over variables are not garbage collected till program expires.

So when creating many closures, more memory is accumulated and this can create memory leaks if not handled.

Garbage collector : Program in JS engine or browser that frees up unused memory.

In highlevel languages like C++ or JAVA, garbage collection is left to the programmer, but in JS engine its done implicitly.

