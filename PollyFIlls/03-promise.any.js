const promiseAnyPollyfill = (taskList) => {
  let counter = 0;
  let res = [];
  return new Promise((resolve, reject) => {
    if (taskList.length === 0) {
      reject(new AggregateError([], "All promises were rejected"));
      return;
    }
    taskList.forEach((promise, index) => {
      Promise.resolve(promise)
        .then(resolve)
        .catch((error) => {
          res[index] = error;
          counter = counter + 1;
          if (counter === taskList.length) {
            reject(new AggregateError(res));
          }
        });
    });
  });
};

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("P1")
    }, 2000);
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("P2")
    }, 3000);
})

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("P3")
    }, 1000);
})

promiseAnyPollyfill([p1,p2,p3]).then(console.log)