
// setTimeout(function(name){
//     alert("Hello"+ name)
// }, 3000,"xyz");
// console.log(x);
// console.log("hello");

var x = setTimeout(test, 3000, "xyz");
console.log(x);

console.log("hello");

function test(name) {
    alert("Hello " + name);
}