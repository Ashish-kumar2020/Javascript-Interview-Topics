class MyPromise {
  constructor(executor) {
    this.status = "pending";
    this.value = null;
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];

    const resolve = (value) => {
      if (this.status === "pending") {
        this.status = "fulfilled";
        this.value = value;

        this.onFulfilledCallbacks.forEach((fn) => fn(value));
      }
    };

    const reject = (value) => {
      if (this.status === "pending") {
        this.status = "rejected";
        this.value = value;

        this.onRejectedCallbacks.forEach((fn) => fn(value));
      }
    };

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(onFulfilled, onRejected) {
    return new MyPromise((resolve, reject) => {
      if (this.status === "pending") {
        this.onFulfilledCallbacks.push(() => {
          try {
            const result = onFulfilled(this.value);
            resolve(result);
          } catch (error) {
            reject(error);
          }
        });

        this.onRejectedCallbacks.push(() => {
          try {
            const result = onRejected(this.value);
            resolve(result);
          } catch (error) {
            reject(error);
          }
        });
      }

      if (this.status === "fulfilled") {
        try {
          const result = onFulfilled(this.value);
          resolve(result);
        } catch (error) {
          reject(error);
        }
      }

      if (this.status === "rejected") {
        try {
          const result = onRejected(this.value);
          resolve(result);
        } catch (error) {
          reject(error);
        }
      }
    });
  }
}


const p1 = new MyPromise((resolve, reject) => {
    setTimeout(() => resolve('resolved first one'), 1000);
})

p1.then((res) => {
    console.log(res);
    return new MyPromise(resolve => {
        setTimeout(() => resolve('resolved second one'), 1000);
    });
}).then(res => {
    console.log(res);
});