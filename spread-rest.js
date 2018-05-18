var params = [ "hello", true, 7 ]
var other = [ 1, 2, ...params ] // [ 1, 2, "hello", true, 7 ] 

function f (x, y, ...a) { 
    return (x + y) * a.length 
}