'use strict';
const callToDatabase = (k, cb) => setTimeout(() => cb(k), Math.random() * 1000);

const print = input => {
    console.timeEnd('process '+ input);
}
for (var i = 0; i < 10; i++) {
    (k => {
        // some pseudo delay
        console.time('process '+ k)
        callToDatabase(k, print);
    })(i);
}
