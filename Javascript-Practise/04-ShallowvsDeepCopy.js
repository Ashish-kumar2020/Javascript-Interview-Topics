// Shallow Copy vs Deep Copy


// ----------------------- Shallow Copy ----------------------
const user = {
  name: "Ashu",
  address: {
    city: "Delhi",
    country: "India",
  },
};

const newUser = {...user};
newUser.name = "Singh";
// newUser.address.city = "Mumbai";

// console.log(user,newUser)

// ---------------------- Deep Copy ---------------------------
const otherUser = structuredClone(user);
otherUser.address.city = "Mumbai";
console.log(user);
console.log(otherUser)