
function flattenArrayPollyFill(value,depth){
    if(!Array.isArray(value)){
        throw new TypeError("Pass an array");
    }
    if(depth === 0){
        return value;
    }

    let res = [];
    for(const ele of value){
       if(Array.isArray(ele)){
            const nested = flattenArrayPollyFill(ele,depth-1);
            res.push(...nested);
       }else{
        res.push(ele);
       }
    }
    return res;
}


const arr = [1, [2, 3], [4, [5, 6]]];

console.log(flattenArrayPollyFill(arr, 1));
// [1, 2, 3, 4, [5, 6]]

console.log(flattenArrayPollyFill(arr, 2));
// [1, 2, 3, 4, 5, 6]

console.log(flattenArrayPollyFill(arr, 0));
// [1, [2, 3], [4, [5, 6]]]