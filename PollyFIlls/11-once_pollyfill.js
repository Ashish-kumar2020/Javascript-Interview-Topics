

function myOnce(fn){
    let isCalled = false;
    return function(...args){
        if(isCalled) return;
        isCalled = true;
        return fn.apply(this,args)
    }
}

function greet(name) {
    console.log(`Hello ${name}`);
}

const greetOnce = myOnce(greet);

greetOnce("Ashish");
greetOnce("Rahul");
greetOnce("John");