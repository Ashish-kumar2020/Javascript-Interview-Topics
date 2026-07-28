
Promise.prototype.myFinally = function (callback) {
    return this.then(
        (value) => {
            callback();
            return value;
        },
        (error) => {
            callback();
            throw error;
        }
    );
};

Promise.resolve("Hello")
    .myFinally(() => {
        console.log("Cleanup");
    })
    .then(console.log);
