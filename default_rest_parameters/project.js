function product (num1,num2=1){
    console.log(num1,num2,num1*num2);
    
}
product(8,5)


function product (num1=5,num2=1){
    console.log("num1 =",num1,"num2 =",num2,num1,"*",num2,"=",num1*num2)
    
}
product(8,8);


function product(num1=5,num2=1,...rest){
    
    var result = num1*num2;
    
    for(num of rest){
        result = result*num
    }
    console.log(result);
}



function product(num1=5,num2=1,...rest){
    console.log(arguments. length);
    console.log(arguments[2]);
}
product(7,8,2,9,10)