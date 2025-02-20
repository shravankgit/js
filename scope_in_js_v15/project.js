
console.log("scope..........");


function testFirst() {
    console.log(y);
    var num = 67;
    // let y = 10;
    var x = y + 10
    console.log("printing test x " + x);
    console.log("printing test y " + y);
    
}

let y = 10;
const num = 67;
testFirst();

{
    console.log(num);
}




 
function test() {
    console.log(x);
    console.log(y);

}


{
    var x = 100
}
console.log(x);

test()





function test() {

    console.log(x);

}
var x = 110;
test





function test() {
    const y = 60

}

{
    let x = 90
}
test()