# 23 - Promise APIs

There are four major Promise APIs.

1. Promise.all()
2. Promise.allSettled()
3. Promise.race()
4. Promise.any()

## Promise.all()

Takes array of promises.

Returns result only when all promises are successful.

If any promise fails, Promise.all() immediately fails.

## Promise.allSettled()

Waits for all promises to settle.

It does not matter whether promise succeeds or fails.

Returns status of every promise.

## Promise.race()

Returns result of first settled promise.

It may be fulfilled or rejected.

Whichever promise settles first wins the race.

## Promise.any()

Returns first successful promise.

Ignores rejected promises.

If all promises fail, it returns AggregateError.

Promise APIs are useful when working with multiple promises together.