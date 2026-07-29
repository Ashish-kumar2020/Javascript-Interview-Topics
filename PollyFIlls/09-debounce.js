

function debounce (fn,delay){
    let timerId;
    return function(...args){
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            fn(...args)
        },delay)
    }
};

// Generic Debounce
function debounceGeneric(fn, delay) {
    let timerId;

    return function (...args) {
        clearTimeout(timerId);

        timerId = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    };
}