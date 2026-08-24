function memoize(func) {
    const memoObj = {};

    return function (...args) {
        const key = JSON.stringify(args);

        if (key in memoObj) {
            console.log("From Cache");
            return memoObj[key];
        }

        const result = func(...args);
        memoObj[key] = result;

        return result;
    };
}

const expensive = (n) => {
    console.log("Calculating...");
    return n * n;
};

const fastSquare = memoize(expensive);

console.log(fastSquare(10)); // Calculating... 100
console.log(fastSquare(10)); // From Cache 100
console.log(fastSquare(20)); // Calculating... 400
console.log(fastSquare(10)); // From Cache 100