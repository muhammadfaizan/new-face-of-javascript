var foo = {one: 1, two: 2};

// bar.[[prototype]] = foo
var bar = Object.create(foo);

bar.three = 3;

bar.one; // 1
bar.two; // 2
bar.three; // 3