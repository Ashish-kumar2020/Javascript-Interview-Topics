function myReduce(arrLike, callback, initialValue) {
    if (arrLike == null) {
        throw new TypeError("Array.prototype.reduce called on null or undefined");
    }

    if (typeof callback !== "function") {
        throw new TypeError(callback + " is not a function");
    }

    const obj = Object(arrLike);
    const len = obj.length >>> 0;

    let acc;
    let startIdx = 0;

    // No initial value provided
    if (initialValue === undefined) {

        // Find first existing element (skip holes)
        while (startIdx < len && !(startIdx in obj)) {
            startIdx++;
        }

        // Array is empty or contains only holes
        if (startIdx >= len) {
            throw new TypeError(
                "Reduce of empty array with no initial value"
            );
        }

        acc = obj[startIdx];
        startIdx++;

    } else {
        acc = initialValue;
    }

    for (let i = startIdx; i < len; i++) {
        if (i in obj) {
            acc = callback(acc, obj[i], i, obj);
        }
    }

    return acc;
}

function sum(acc, curr, index, array) {
    console.log(
        "acc:", acc,
        "curr:", curr,
        "index:", index,
        "array:", array
    );

    return acc + curr;
}

console.log(
    myReduce([1,2,3,4], sum, 0)
);