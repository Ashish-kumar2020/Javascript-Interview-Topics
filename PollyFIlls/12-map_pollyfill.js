function myMap(arrayLike, callback, thisArg) {

  if (arrayLike == null) {
    throw new TypeError("Cannot map over null or undefined");
  }

  if (typeof callback !== "function") {
    throw new TypeError("callback must be a function");
  }

  const obj = Object(arrayLike); // this is to convert array like object to object
  const len = obj.length >>> 0;
  const res = [];

  for (let i = 0; i < len; i++) {
    if (i in obj) {
      res[i] = callback.call(thisArg, obj[i], i, obj);
    }
  }

  return res;
}

// console.log(
//     myMap("abc", ch => ch.toUpperCase())
// );

// Array like object -> thisArgs

// const obj = {
//     0: "React",
//     1: "Redux",
//     length: 2
// };

// console.log(
//     myMap(obj, x => x.toUpperCase())
// );
const calculator = {
  multiplier: 10,
};

function multiply(num) {
  return num * this.multiplier;
}

const result = myMap(
  [1, 2, 3],
  multiply,
  calculator,
);

console.log(result);
