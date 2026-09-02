// Various ways to create an object in javascript

// using object literals
let user = {
    name: "Ashish",
    age: 25
}

// using object constructor method
let userDetails = new Object();
userDetails.name = "Ashish";
userDetails.age = 26;

// using Object.create()
let animal = {
    name: "Animal"
}

let cat = Object.create(animal);
cat.name = "Whiskers";
console.log(cat.name)

// using Object.assign();

let user2 = {
    name: "user2",
    age: 399
}

let details = Object.assign({},user2);
console.log(details);