
// setTimeout(function(name){
//     alert("Hello"+ name)
// }, 3000,"xyz");
// console.log(x);
// console.log("hello");

// var x = setTimeout(test, 3000, "xyz");
// console.log(x);

// console.log("hello");

// function test(name) {
//     alert("Hello " + name);
// }

var counter = 1
var x= setTimeout(test, 3000, "xyz");
console.log(x);

console.log("hello")
function test(name) {

alert("called:"+counter)
counter++
if(counter>5){
    clearInterval(x)
}
}

