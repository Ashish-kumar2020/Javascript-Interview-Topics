

function myForEach(arrLike,callback,thisArgs){

    if(arrLike == null){
        throw new Error("can not filter over null or undefined values");
    }
    if(typeof callback !== "function"){
        throw new TypeError(callback + " it must be a function.");
    }

    const obj = Object(arrLike);
    let len = obj.length >>> 0;

    for(let i = 0;i<len;i++){
        if(i in obj){
            callback.call(thisArgs,obj[i],i,obj)
        }
    }
   
}

function printDetails(value, index, array) {
    console.log(
        "value:", value,
        "index:", index,
        "array:", array
    );
}

myForEach([10, 20, 30], printDetails);