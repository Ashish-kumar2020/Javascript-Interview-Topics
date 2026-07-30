

function myFilter(arrLike,callback,thisArg){
    if(arrLike == null){
        throw new Error("can not filter over null or undefined values");
    }
    if(typeof callback !== "function"){
        throw new TypeError(callback + " it must be a function.");
    }

    const obj = Object(arrLike);
    const len = obj.length >>> 0;
    const res = [];
    for(let i = 0;i < len;i++){
        if(i in obj){
            let val = callback.call(thisArg, obj[i], i, obj);
            if(val){
                res.push(obj[i])
            }
        }
    }
    return res;
}

function evenNum(num){
    return num % 2 == 0;
}

function numberGreater(num){
    return num > 3;
}

const arr = [1, 2, 3, 4, 5, 6];
const result = myFilter(arr,numberGreater);

console.log(result);