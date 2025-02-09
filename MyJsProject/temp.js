var a = "this is text message";
var booleanvalue = true;
var test = 10 < 20;
console.log(test);

document.write("this is javascript bbuyye text message <br><br>");
document.write(11223344);
document.write("<h1>this is heading text</h1> <br>");

let sampleView = null;
console.log(sampleView);

/* 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Javascript Series</title>
</head>
<body>
    <h2>Welcome to Javascript shravan </h2>
    <h3>Welcome to Javascript shravan </h3>
</body>
<script src="project.js"></script>
</html> 
*/

let fruits = ["apple", "mango", 55, { Name: "mamatha" }];
console.log(fruits);

var a = "this is a text message";
var isBooleanTrue = true;
var isBooleanFalse = false;

var a = 30;
var b = 20;
document.write("result: ", a + b);

var game = "cricket";
var captain = "dhoni";
if (game == "cricket") {
    document.write("match captain is ", captain);
}

var x = 100;
var y = 50;
var z = 200;
if (x == y) {
    document.write("x is equal to y");
} else if (y < z) {
    document.write("blue colour");
} else if (z > x) {
    document.write("yellow colour");
} else {
    document.write("all wrong statement");
}

var x = 150;
var y = 50;
var z = 100;
if (x !== y && y < z) {
    document.write("The condition is true: x is not equal to y and y is less than z.");
} else {
    document.write("The condition is false: either x is equal to y or y is not less than z.");

    switch (true) {
        case 10 > 20:
            myanswer = "red color"
            break;
            case 20 > 30:
                myanswer = "green color"
                break;
                case 50 < 20:
                    myanswer = "black color"
                    break;
                    case 100 == 200:
                        myanswer = "orange color"
                        break;
                        default:
                            myanswer = "none of the above"
                            break
                            
       }
       
       document.write(myanswer)
       function goodStart(){
        document.write("hello world!")
        
       }
       
       goodStart();
       
       //Student result

let Name = promt("please enter your name");

let Name = promt("enter your marks");

switch(true){
    case Marks > 90 && Marks <= 100: 
    result = "Great you are the topper"
    break;
    case Markes > 65 && Marks <= 90:
         result = "Congratulations you got first class"
    break;
    case Marks >40 && Marks < 65:
         "result = you got Second class"
    break;
    case Marks >= 30 && Marks <= 40:
         result = "you got Third class"
    break;
    case Marks < 30:
         result = "Sorry you are the Failed , Better Luck Next Time"
    break;
    default:
        result = "Please enter your marks"
    break
    
}


let name = prompt("Please enter your name");
let marks = parseInt(prompt("Enter your marks"), 10);
let result;

switch (true) {
    case marks > 90 && marks <= 100:
        result = "Great, you are the topper!";
        break;
    case marks > 65 && marks <= 90:
        result = "Congratulations, you got first class!";
        break;
    case marks > 40 && marks <= 65:
        result = "You got second class.";
        break;
    case marks >= 30 && marks <= 40:
        result = "You got third class.";
        break;
    case marks < 30:
        result = "Sorry, you failed. Better luck next time.";
        break;
    default:
        result = "Please enter valid marks.";
        break;
}

document.write(name + " " + result);


document.write(result)

function goodStart() {
    console.log("hello World");
}

goodStart();



// Global scope
// Function scope
// Block scope


//  let collections = ["akash", 55, true, {name:"rakesh"}]

// push() = ("adds one or more elements to the end of an arrays and returns the new length.")

let sports = ["cricket", "footbal"]

sports.push("soker",56)

document.write(sports + "<br>")
document.write(sports. length + "<br>")



//  let collections = ["akash", 55, true, {name:"rakesh"}]
// pop() = ("removes the last element an array and returns that element.")

let books = ["maths", "physics", "chemistry"];

let someresult = books.pop()

document.write(books + "<br>")

document.write("deleted by pop method is" + someresult)



//  let collections = ["akash", 55, true, {name:"rakesh"}]

// shift () = ("removes the first element from an array and return that element.")

let states = ["delhi", "mumbai", "hyd"]

let newstates = states.shift()

document.write(states = "<br>");

document.write(states.length + "<br>")

document.write(newstates + "<br>")



//  let collections = ["akash", 55, true, {name:"rakesh"}]

// unshift() = ("adds one are more elements to the beginning of an array and returns the new length.")


let scores = [22, 44, 55, 66, "amar"];

scores. unshift("suresh", 33);

document.write(scores + "<br>")

document.write(scores. length)



//  let collections = ["akash", 55, true, {name:"rakesh"}]

// concat() = ("combines two or more arrays and retunes a new array.")

let scores = [22, 11, 44, 55];

let players = ["amar", "suresh", "mahesh",]

let newplayers = scores.concat(players)

document.write(newplayers);