
let places = ["hyderabad", "vijayawada", "delhi", "vizag"];

var place = places.some  (function(ele) {
    return ele.startsWith("v");
});

console.log(place);

let marks = [77,85,89,55,65,35]
console.log(marks);

var pass = marks.every(function(mark){
    return mark>35
})
console.log("Has user cleared all the papers?: " + pass);

var someValue = marks.some(function(mark){
    return mark>35
})
console.log("Has user cleared any papers?: " + someValue);

console.log("length " + marks.length);

