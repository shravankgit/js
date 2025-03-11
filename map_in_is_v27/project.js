// var birthyear = [2000, 2001, 2006, 2010, 2020]

// var ages = birthyear.map(function (ele, index, arr) { 
//     let age = 2021 - ele
//     return age;
// })
// console.table(birthyear);
// console.table("ages");

var birthyear = [2000, 2001, 2006, 2010, 2020]

var ages = birthyear.map(ageFind)
function ageFind (ele, index, arr) { 
    console.log(ele);
    console.log(index);
    console.log(arr);
    let age = 2021 - ele
    return age;
}

console.table(birthyear);
console.table("ages");