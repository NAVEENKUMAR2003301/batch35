// // javaScript
// // scriptwriting 


// // variables 


// // var 
// // let 
// // const


// // var
// // declration   // intialization


// var a = 30

//     a = 50      // reuse    // reintialization

// var a = 70      //  reDeclration



    

// console.log(a);


// // let  


// // declration    // intialization

// let b = 40

//     b = 60        // reuse  // reIntialization

// // let b = 50        // reDeclration

// console.log(b);


// // const 

// // declration  // intialization 


// const c = 50

//     //   c = 60  reuse , reIntialization not accept

// // const c = 60 not accept reDeclration

// console.log(c);





// // printing Statement 


// // 1. console.log()

// console.log(100);


// let d = 50

// console.log(d);


// // 2. alert()

// // alert("hello")

// // 3. confirm()

// // confirm("did you know program!")

// // 4. prompt()/

// // prompt("what is your name :-")

// // 5. document.writeln()

// document.writeln("kjknj")



// example 

// ===============================
// JavaScript Basic Practice Questions
// ===============================

// Q1. Create a variable using var and store 100. Print it.

// Q2. Create a variable using let and store your age. Print it.

// Q3. Create a constant variable and store PI value (3.14). Print it.

// Q4. Create a variable called city and store your city name. Print it.

// Q5. Create a variable called course and store "JavaScript". Print it.

// Q6. Create two variables num1 = 10 and num2 = 20. Print both values.

// Q7. Re-initialize a let variable and print the updated value.

// Q8. Re-initialize a var variable and print the updated value.

// Q9. Print the message "Welcome to JavaScript" using console.log().

// Q10. Create a variable called studentName and print:
// "Student Name: Naveen"

// Q11. Create variables for employeeName and employeeSalary and print both.

// Q12. Display an alert box with the message:
// "Hello User"

// Q13. Ask the user for their name using prompt().

// Q14. Show a confirmation box asking:
// "Do you want to continue?"

// Q15. Display "Learning JavaScript" using document.writeln().

// Q16. Predict the output:
// var a = 10;
// a = 20;
// console.log(a);  // 20

// Q17. Predict the output:
// let b = 30;
// b = 40;
// console.log(b);  // 40

// Q18. Predict the output:
// const c = 50;
// console.log(c);  // 50

// Q19. Create variables for productName and productPrice.
// Print:
// Product: Laptop
// Price: 50000

// Q20. Real-Time Task:
// Store Employee Name, Employee ID, and Employee Salary
// using variables and print all details using console.log().





// var a = 50

// let b = a 

// const a = 50   // error

// console.log(a);




// i want print my name in console side 


console.log("name");


// i want to show good evening msg to user side like pop up stracture


// alert("good evening")


// i want to know user already complete program or not

// let userWish = confirm("did you complete program")

// console.log(userWish);


// i want to print username to ui side 

// let userName = prompt("what is your name : ")

// console.log(userName);





// console method

// 1. console.log()


console.log(100);


// 2. console.warn()

console.warn(100);


// 3. console.error()

console.error(100);


// 4. console.clear()

console.clear()







// DataTypes


// primitive datatype 

// 1. string - "hjbhkj"

let a = "123"

console.log(typeof(a));


// 2. number - 123

let b = 123

console.log(typeof(b));


// 3. boolean - true , false

let c = true

console.log(typeof(c));


// 4. undefined 

let d;

console.log(d);


// 5. null

// let e = prompt()

// console.log(e);


// non primitive datatype

// 1. array

// syntex - []


// example 

let fruit = ["apple","orange","banana","graphs","guava","cherry","pineApple","pumbkin","RC car"]

console.log(fruit);
console.log(fruit[0]);
console.log(fruit[2]);
console.log(fruit[4]);


console.log(fruit[fruit.length-1]);
console.log(fruit[fruit.length-2]);



// 2. object


// syntex - {}


let allThings = {
    fruitVal : ["apple","orange","banana","graphs","guava",   "cherry","pineApple"],
    vegVal   : "pumbkin",
    playThing: "Rc Car"
}


console.log(allThings);
console.log(allThings.vegVal);
console.log(allThings.playThing);
console.log(allThings.fruitVal[2]);


console.clear()

// operators


// 1. Arithmetic operator

// Addition     + 

console.log(3 + 5);

// subraction    - 

console.log(2-1);

// multiplication  *

console.log(4*4);


// division      / 


console.log(5/5);


// modulus      %

console.log(5 % 5);


// Exponencial   **

console.log(5**3); // 5^3 -- 5*5*5 = 25


// Increament     ++ = +1

// pre Inc = ++var

// post Inc = var++

// Decreament     -- = -1

// pre Dec = --var

// Post Dec= var--



let a1 = 5

a1--

console.log(a1);

// your searching element first find in variable side means that time you can calculate value side only varible yet.


let a2 = 2     // null

    a2 = ++a2


    console.log(a2);
    


let a3 = 1

    a3 = a3--;

    console.log(a3);










// your searching element first find in value side means that time you can calculate  value side all value yet.



let a4 = 3   // null

let a5 = a4-- // a4 // 3

console.log("a4 :",a4); // 2

console.log("a5 :",a5); // 3



let a6 = 5

let a7 = --a6


console.log("a6 :",a6); // 5   // --a6 = -1+5 = 4
console.log("a7 :",a7); // 4   // --a6 = -1+5 = 4


    




// 2. Assignment operator

console.log("Assignment Operator");

let b1 = 10

let addition = 100

    // b1 = b1 + addition

    b1 **= addition

    console.log(b1);
    


// 3. Relational operator

console.log("relational operator");

// meaning      operator          example         result

// lessThen       <                 5 < 3         false
// greaterThen    >                 5 > 3         true
// lessThenEq     <=                5 <= 5        true
// GreaterThenEq  >=                12 >= 2       true
// loosyTypeEq    ==                5 == "5"      true
// loosyNotEq     !=                5 != "6"      true
// strictlyTypeEq ===               5==="5"       false
// strictlyNotEq  !==               5!=="5"       true

// example :- 

// 1. What is the output of `5 < 3`? // false

// 2. What is the output of `10 > 2`? // true

// 3. What is the output of `5 <= 5`? // true

// 4. What is the output of `12 >= 20`? // false

// 5. What is the output of `5 == "5"`? // true

// 6. What is the difference between `==` and `===`? // value , value and types

// 7. What is the output of `5 != "6"`? // true
 
// 8. What is the output of `5 === "5"`? // false

// 9. Which operator checks both value and data type? // strictly

// 10. What is the output of `5 !== "5"`? // true

// 11. What is the output of `7 >= 7`?  // true

// 12. What is the output of `2 < 8`?   // true
 
// 13. What is the output of `10 <= 5`?  // false

// 14. Which operator is used for "Not Equal"? // loosy not , strictly not

// 15. Which comparison returns `false`?  // not satisfied the condition that its return false.



// 4. logical operator


// AND  - &&

// true && true && true = true 

// false && true && true = false 

// // OR   - ||

// false || false || false = false 

// false || false || true  = true

// // NOT  - !

// !(true) = false , !(false) = true



// example :- 

// 1. What is the output?
console.log(5 > 3 && 10 > 5); // true && true = true

// 2. What is the output?
console.log(8 < 4 || 15 > 10); // false || true = true

// 3. What is the output?
console.log(!(20 > 10));  // !(true) = false

// 4. What is the output?
console.log(7 <= 7 && 9 != "9");  // true && false = false

// 5. What is the output?
console.log(5 === "5" || 12 >= 12); // false || true = true

console.clear();


// 5. ternary operator


// condition ? statement1 : statement2


5 < 7 ? console.log("condition true") : console.log("condition false");



// concatination  +

let d1 = "iron"
let d2 = "man"

// ironman

console.log(d1+d2);

// Template string

let e1 = "spider"
let e2 = "man"

console.log(`${e1}${e2}`);


// ternary operator

let userName = false

let pwd      = true 


userName == pwd ? console.log("allow the home page") : console.log("your username and pwd wrong");









// 3. function

// 4. date