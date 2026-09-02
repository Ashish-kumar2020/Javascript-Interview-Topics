function throttle(fn,limit){
    let executionTime = 0;
    return function(...args){
        let currTime = Date.now();
        if(currTime - executionTime > limit){
            executionTime = currTime;
            fn.apply(this,args);
        }
    }
}

const test = throttle(() => {
    console.log("Executed at : ",Date.now());
},1000);

setInterval(() => {
    test();
},100)