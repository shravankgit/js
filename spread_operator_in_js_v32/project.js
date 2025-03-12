// spread operator(...)->takes an iterable and expands or seperate each Element 
// var arr = [78,89,90,67]
// console.log(arr);
// console.log(...arr);

// var arr2 = [2,4,...arr]
// console.log(arr2);


var arr1 = [1, 2, 3, 4]
var arr2 = [5, 6, 7, 8]
var arr3 = [...arr1, ...arr2,]
console.log(arr3);

function add(a, b) {
    console.log(a + b );

}
add(...arr1)
