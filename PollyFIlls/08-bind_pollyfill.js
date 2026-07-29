// Bind PollyFill

const person1 = {
  name: "Ashish",
};
const person2 = {
  name: "Singh",
};

function greet(age, homeTown, state) {
  console.log(
    `My Name is ${this.name} and i am ${age} years old and i am from ${homeTown} - ${state}`,
  );
}

Function.prototype.myBind = function (thisArgs, ...values) {
  // console.log(thisArgs,this);
  if (typeof this !== "function") {
    throw new TypeError(`${this} is not callable`);
  }
  const orginalFn = this;
  thisArgs = thisArgs == null ? globalThis : Object(thisArgs);
  return function (...args) {
    const key = Symbol();
    thisArgs[key] = originalFn;
    const finalArgs = [...values, ...args];
    try {
      return thisArgs[key](...finalArgs);
    } finally {
      delete thisArgs[key];
    }
  };
};

const fn = greet.myBind(person1, 27, "Bijnore");
// console.log(greet.myBind(person1))
console.log(fn("UP"));
