

function curryingPollyFIll(fn){
    return function curried(...args){
        if(args.length >= fn.length){
            return fn(...args);
        }
        return function(...newArgs){
            return curried(...args, ...newArgs);
        }
    }

    
}

function add(a, b, c) {
    return a + b + c;
}

function multiply(a, b, c) {
    return a * b * c;
}

const curriedAdd = curryingPollyFIll(add);
const curriedMultiply = curryingPollyFIll(multiply);

console.log(curriedAdd(1)(2)(3));      // 6
console.log(curriedMultiply(2)(3)(4)); // 24