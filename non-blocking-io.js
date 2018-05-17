'use strict';
const callToDatabase = (k) => setTimeout(() => console.log(k), Math.random() * 1000);

for (var i = 0; i < 10; i++) {
    (k => {
        // some pseudo call to database
        callToDatabase(k);
    })(i);
}