/*
    Promise.race -> returns a promise that gets settles first 
    It doesn't matter whether the first Promise is fulfilled or rejected.
    It returns a single value

*/

const promseRacePollyFill = (taskList) => {
  return new Promise((resolve, reject) => {
    if (taskList.length === 0) {
      return;
    }

    taskList.forEach((promise) => {
      Promise
        .resolve(promise)
        .then(resolve,reject)
        
    });
  });
};

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("P1")
    }, 2000);
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("P2")
    }, 3000);
})

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("P3")
    }, 1000);
})

promseRacePollyFill([p1,p2,p3]).then(console.log)