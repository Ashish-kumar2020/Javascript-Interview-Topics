

function debounce(fn,wait){
    let timerId;
    return function(...args){
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            fn.apply(this,args)
        },wait);
    }
}

const search = debounce(function (query) {
    console.log(query);
}, 550);

search("react");
search("react hooks");
search("react hooks debounce");