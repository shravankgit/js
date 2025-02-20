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
let x = 2
console.time("loop time:")
while(x!=2){
    console.log("enter 10");
    x = 3
    console.count("called")
}
console.timeEnd("loop time:")