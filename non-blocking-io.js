'use strict';
const callToDatabase = (k, cb) => setTimeout(() => cb(k), Math.random() * 1000);

const print = input => {
    console.log(input);
}
for (var i = 0; i < 10; i++) {
    (k => {
        // some pseudo delay
        callToDatabase(k, print);
    })(i);
}