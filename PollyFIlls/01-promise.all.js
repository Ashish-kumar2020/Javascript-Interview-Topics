/*
    Promise.all -> takes an array of promises and return a single promise
    the returned promise:
        1 - fulfills when all Promises fulfill
        2 - rejects immediately if any Promise rejects

*/


const promiseAllPollyfill = (taskList) => {
    let res = [];
    let completedPromise = 0;

    return new Promise((resolve, reject) => {
        if (taskList.length === 0) {
            resolve([]);
            return;
        }

        taskList.forEach((promise, index) => {
            Promise.resolve(promise)
                .then((val) => {
                    res[index] = val;
                    completedPromise++;

                    if (completedPromise === taskList.length) {
                        resolve(res);
                    }
                })
                .catch(reject);
        });
    });
};

promiseAllPollyfill([
    Promise.resolve(1),
    2,
//    Promise.reject("Something went wrong"),
    true
]).then((val) => console.log(val));