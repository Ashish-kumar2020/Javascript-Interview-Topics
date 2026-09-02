

function memoize(fnc){
    const memoObj = {};

    return function(...args){
        const key = JSON.stringify(args)
        if(key in memoObj){
            console.log("From Cache");
            return memoObj[key];
        }
        const result = fnc(...args);
        memoObj[key] = result;
        return result; 
    }   
}