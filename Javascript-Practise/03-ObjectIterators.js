// Topic: Object.keys(), Object.values(), Object.entries()

// Exercise 1 — Object.keys() - Use Object.keys() to get all the keys from user and log them.


const user = {
  name: "Ashu",
  role: "Frontend Developer",
  experience: 2,
};

const keys = Object.keys(user);
// console.log(keys);

// Next — Object.values() : Using the same user object, get all the values and log them.

const values = Object.values(user);
// console.log(values);

// Next — Object.entries(). - Using the same user object, get the key-value pairs.

const entries = Object.entries(user);
// console.log(entries)

for(let [key,value] of Object.entries(user)){
    console.log(key," : ",value)
}