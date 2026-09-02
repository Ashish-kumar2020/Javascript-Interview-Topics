/*
Promise Combinators

We’ll practice:

1. Promise.all()
2. Promise.race()
3. Promise.allSettled()
4. Promise.any()

*/

// ----------- Promise.all() ------------------

function getUser() {
  // returns a Promise resolving with "User Data"
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("User Data");
    }, 2000);
  });
}

function getProducts() {
  // returns a Promise resolving with "Products Data"
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Product Data");
    }, 1000);
  });
}

function getOrders() {
  // returns a Promise resolving with "Orders Data"
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Order Data");
    }, 3000);
  });
}

// Promise.all([getUser(), getProducts(),getOrders()]).then((value) => {
//     console.log(value)
// });

// ---------------------------- Promise.race() ------------------------

function getUser2() {
  // returns a Promise resolving with "User Data"
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("User Data");
    }, 2000);
  });
}

function getProducts2() {
  // returns a Promise resolving with "Products Data"
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Error while fetching Product data");
    }, 1000);
  });
}

function getOrders2() {
  // returns a Promise resolving with "Orders Data"
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Order Data");
    }, 3000);
  });
}

// Promise.race([getUser2(),getProducts2(),getOrders2()]).then((value) => console.log(value)).catch((error) => console.log("Error : ",error));

// --------------- Promise.allsettled() ----------------------

function getUser3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Cannot fetch User data");
    }, 3000);
  });
}

function getProducts3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Can not fetched Products data");
    }, 1000);
  });
}

function getOrder3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Can not get Order");
    }, 2000);
  });
}

// Promise.allSettled([getUser3(), getProducts3(), getOrder3()])
//   .then((value) => console.log(value))
//

// ----------------------- Promise.any() ---------------------------
function getUser4() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Cannot fetch User data");
    }, 3000);
  });
}

function getProducts4() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Can not fetched Products data");
    }, 1000);
  });
}

function getOrder4() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(" Order");
    }, 4000);
  });
}

Promise.any([getUser4(), getProducts4(), getOrder4()])
  .then((value) => console.log(value))
  .catch((error) => {
    console.log("Error : ", error);
  });
