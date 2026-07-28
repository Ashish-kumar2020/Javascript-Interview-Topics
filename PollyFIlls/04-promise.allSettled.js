const promiseAllSettledPollyfill = (taskList) => {
  let res = [];
  let counter = 0;

  return new Promise((resolve) => {
    if (taskList.length === 0) {
      resolve([]);
      return;
    }

    taskList.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((val) => {
          res[index] = {
            status: "fulfilled",
            value: val,
          };
          counter = counter + 1;
          if (counter === taskList.length) {
            resolve(res);
          }
        })
        .catch((error) => {
          res[index] = {
            status: "rejected",
            reason: error,
          };
          counter = counter + 1;
          if (counter === taskList.length) {
            resolve(res);
          }
        });
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

promiseAllSettledPollyfill([p1,p2,p3]).then(console.log)