let s = "used";
console.log("log method",s);
console.info("log method",s)
console.warn("log method",s)
console.error("log method",s)
console.table(["xyz","abc","pqr"])
console.table({name:"mmt",age:25,place:"bangalore"})
console.assert(10>15,"condition false")
console.count("called")
console.count("called")
let x = +prompt("enter a number")
while(x!=10){
    console.log("enter 10");
    x = +prompt("enter a number")
    console.count("called")
}
console.timeEnd("loop time:")