function deepCopyPollyfill(value, seen = new WeakMap()) {
  if (value === null || typeof value !== "object") {
    return value;
  }
  if(seen.has(value)){
    return seen.get(value)
  }
  let newData;
  if (value instanceof Date) {
    return new Date(value.getTime());
  } 
  newData = Array.isArray(value) ? [] : {};
  seen.set(value,newData)

  for (const key in value) {
    if (Object.hasOwn(value, key)) {
      newData[key] = deepCopyPollyfill(value[key],seen);
    }
  }
  return newData;
}



const obj = {
  name: "Ashu",
  age: 26,

  skills: ["React", "JavaScript"],

  address: {
    city: "Delhi",
    location: {
      pin: 110001
    }
  },

  createdAt: new Date("2020-01-01")
};

obj.self = obj;

const cloned = deepCopyPollyfill(obj);

cloned.skills.push("TypeScript");
cloned.address.location.pin = 123456;
cloned.createdAt.setFullYear(2025);

console.log("Original:", obj);
console.log("Clone:", cloned);

console.log(obj.skills);
// ["React", "JavaScript"]

console.log(obj.address.location.pin);
// 110001

console.log(obj.createdAt.getFullYear());
// 2020

console.log(cloned.self === cloned);
// true
