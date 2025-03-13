
var arr = [7, 90,8, 876567, 56765, 6876, 4323452];

var max = arr.reduce(function (acc, ele) {
    if (acc > ele) {
        return acc;
    } else {
        return ele;
    }
}, arr[0]);

/* 

90

90 -- 8

90


*/

console.log("maxx " +  max);




var arr = [7, 90,8];

var sum = arr.reduce((ac,ele)=>ac+ele, 0)
console.log(sum);
