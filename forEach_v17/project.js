var salaries = [50000,45000,40000,35000];

salaries.forEach((salary,index,arr)=>{
    console.log(salary);
    console.log(index);
    
    
})




var salaries = [50000,45000,40000,35000];
console.log(salaries);
salaries.forEach((salary,index,arr)=>{
    let increment = salary/10;
    salaries[index] = salary+increment;
})
console.log(salaries);
