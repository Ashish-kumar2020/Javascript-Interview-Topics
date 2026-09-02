/*
1. Promise + Async/Await

* Create and consume promises
* Convert .then() code to async/await
* Error handling with try/catch

*/

// function fetchUser() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({
//         name: "Ashu",
//         role: "Frontend Developer",
//       });
//     }, 2000);
//   });
// }

function fetchUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Error : No User Found");
    }, 2000);
  });
}

// const user = fetchUser()
// user.then((value) => {
//     console.log(value)
// })

async function getUser() {
    try {
        const data = await fetchUser();
        return data;
    } catch (error) {
        console.log("Error : ",error)
    }
}
const data = await getUser();
console.log(data)
