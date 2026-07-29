

// Apply Method Pollyfill

const person1 = {
    name: "Ashish"
}
const person2 = {
    name: "Singh"
}

function greet(age,homeTown){
 console.log(`My Name is ${this.name} and i am ${age} years old and i am from ${homeTown}`);
}




Function.prototype.myApply = function (thisArgs,args)  {
    // Ensure myApply is invoked on a function
    if(typeof this !== "function"){
        throw new TypeError(`${this} is not callable`);
    }
    console.log("THIS VALUE = greet function:" , this)
    console.log("THISARGS - contains obj",thisArgs)
     // Handle null and undefined
    thisArgs = thisArgs == null ? globalThis : Object(thisArgs);
    // create a unique temporary property
    const fnSymbol = Symbol("fn");
    thisArgs[fnSymbol] = this;
    console.log("temporarly attached greet function to it",thisArgs)

    // invoke the function
    const result = thisArgs[fnSymbol](...args);

    // cleanup of temporary symbol
    delete thisArgs[fnSymbol];
    return result;
}

greet.myApply(person1,[26,"Bijnore"]);
// greet.myCall(person2,27)