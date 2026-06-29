// // // javaScript
// // // scriptwriting 


// // // variables 


// // // var 
// // // let 
// // // const


// // // var
// // // declration   // intialization


// // var a = 30

// //     a = 50      // reuse    // reintialization

// // var a = 70      //  reDeclration



    

// // console.log(a);


// // // let  


// // // declration    // intialization

// // let b = 40

// //     b = 60        // reuse  // reIntialization

// // // let b = 50        // reDeclration

// // console.log(b);


// // // const 

// // // declration  // intialization 


// // const c = 50

// //     //   c = 60  reuse , reIntialization not accept

// // // const c = 60 not accept reDeclration

// // console.log(c);





// // // printing Statement 


// // // 1. console.log()

// // console.log(100);


// // let d = 50

// // console.log(d);


// // // 2. alert()

// // // alert("hello")

// // // 3. confirm()

// // // confirm("did you know program!")

// // // 4. prompt()/

// // // prompt("what is your name :-")

// // // 5. document.writeln()

// // document.writeln("kjknj")



// // example 

// // ===============================
// // JavaScript Basic Practice Questions
// // ===============================

// // Q1. Create a variable using var and store 100. Print it.

// // Q2. Create a variable using let and store your age. Print it.

// // Q3. Create a constant variable and store PI value (3.14). Print it.

// // Q4. Create a variable called city and store your city name. Print it.

// // Q5. Create a variable called course and store "JavaScript". Print it.

// // Q6. Create two variables num1 = 10 and num2 = 20. Print both values.

// // Q7. Re-initialize a let variable and print the updated value.

// // Q8. Re-initialize a var variable and print the updated value.

// // Q9. Print the message "Welcome to JavaScript" using console.log().

// // Q10. Create a variable called studentName and print:
// // "Student Name: Naveen"

// // Q11. Create variables for employeeName and employeeSalary and print both.

// // Q12. Display an alert box with the message:
// // "Hello User"

// // Q13. Ask the user for their name using prompt().

// // Q14. Show a confirmation box asking:
// // "Do you want to continue?"

// // Q15. Display "Learning JavaScript" using document.writeln().

// // Q16. Predict the output:
// // var a = 10;
// // a = 20;
// // console.log(a);  // 20

// // Q17. Predict the output:
// // let b = 30;
// // b = 40;
// // console.log(b);  // 40

// // Q18. Predict the output:
// // const c = 50;
// // console.log(c);  // 50

// // Q19. Create variables for productName and productPrice.
// // Print:
// // Product: Laptop
// // Price: 50000

// // Q20. Real-Time Task:
// // Store Employee Name, Employee ID, and Employee Salary
// // using variables and print all details using console.log().





// // var a = 50

// // let b = a 

// // const a = 50   // error

// // console.log(a);




// // i want print my name in console side 


// console.log("name");


// // i want to show good evening msg to user side like pop up stracture


// // alert("good evening")


// // i want to know user already complete program or not

// // let userWish = confirm("did you complete program")

// // console.log(userWish);


// // i want to print username to ui side 

// // let userName = prompt("what is your name : ")

// // console.log(userName);





// // console method

// // 1. console.log()


// console.log(100);


// // 2. console.warn()

// console.warn(100);


// // 3. console.error()

// console.error(100);


// // 4. console.clear()

// console.clear()







// // DataTypes


// // primitive datatype 

// // 1. string - "hjbhkj"

// let a = "123"

// console.log(typeof(a));


// // 2. number - 123

// let b = 123

// console.log(typeof(b));


// // 3. boolean - true , false

// let c = true

// console.log(typeof(c));


// // 4. undefined 

// let d;

// console.log(d);


// // 5. null

// // let e = prompt()

// // console.log(e);


// // non primitive datatype

// // 1. array

// // syntex - []


// // example 

// let fruit = ["apple","orange","banana","graphs","guava","cherry","pineApple","pumbkin","RC car"]

// console.log(fruit);
// console.log(fruit[0]);
// console.log(fruit[2]);
// console.log(fruit[4]);


// console.log(fruit[fruit.length-1]);
// console.log(fruit[fruit.length-2]);



// // 2. object


// // syntex - {}


// let allThings = {
//     fruitVal : ["apple","orange","banana","graphs","guava",   "cherry","pineApple"],
//     vegVal   : "pumbkin",
//     playThing: "Rc Car"
// }


// console.log(allThings);
// console.log(allThings.vegVal);
// console.log(allThings.playThing);
// console.log(allThings.fruitVal[2]);


// console.clear()

// // operators


// // 1. Arithmetic operator

// // Addition     + 

// console.log(3 + 5);

// // subraction    - 

// console.log(2-1);

// // multiplication  *

// console.log(4*4);


// // division      / 


// console.log(5/5);


// // modulus      %

// console.log(5 % 5);


// // Exponencial   **

// console.log(5**3); // 5^3 -- 5*5*5 = 25


// // Increament     ++ = +1

// // pre Inc = ++var

// // post Inc = var++

// // Decreament     -- = -1

// // pre Dec = --var

// // Post Dec= var--



// let a1 = 5

// a1--

// console.log(a1);

// // your searching element first find in variable side means that time you can calculate value side only varible yet.


// let a2 = 2     // null

//     a2 = ++a2


//     console.log(a2);
    


// let a3 = 1

//     a3 = a3--;

//     console.log(a3);










// // your searching element first find in value side means that time you can calculate  value side all value yet.



// let a4 = 3   // null

// let a5 = a4-- // a4 // 3

// console.log("a4 :",a4); // 2

// console.log("a5 :",a5); // 3



// let a6 = 5

// let a7 = --a6


// console.log("a6 :",a6); // 5   // --a6 = -1+5 = 4
// console.log("a7 :",a7); // 4   // --a6 = -1+5 = 4


    




// // 2. Assignment operator

// console.log("Assignment Operator");

// let b1 = 10

// let addition = 100

//     // b1 = b1 + addition

//     b1 **= addition

//     console.log(b1);
    


// // 3. Relational operator

// console.log("relational operator");

// // meaning      operator          example         result

// // lessThen       <                 5 < 3         false
// // greaterThen    >                 5 > 3         true
// // lessThenEq     <=                5 <= 5        true
// // GreaterThenEq  >=                12 >= 2       true
// // loosyTypeEq    ==                5 == "5"      true
// // loosyNotEq     !=                5 != "6"      true
// // strictlyTypeEq ===               5==="5"       false
// // strictlyNotEq  !==               5!=="5"       true

// // example :- 

// // 1. What is the output of `5 < 3`? // false

// // 2. What is the output of `10 > 2`? // true

// // 3. What is the output of `5 <= 5`? // true

// // 4. What is the output of `12 >= 20`? // false

// // 5. What is the output of `5 == "5"`? // true

// // 6. What is the difference between `==` and `===`? // value , value and types

// // 7. What is the output of `5 != "6"`? // true
 
// // 8. What is the output of `5 === "5"`? // false

// // 9. Which operator checks both value and data type? // strictly

// // 10. What is the output of `5 !== "5"`? // true

// // 11. What is the output of `7 >= 7`?  // true

// // 12. What is the output of `2 < 8`?   // true
 
// // 13. What is the output of `10 <= 5`?  // false

// // 14. Which operator is used for "Not Equal"? // loosy not , strictly not

// // 15. Which comparison returns `false`?  // not satisfied the condition that its return false.



// // 4. logical operator


// // AND  - &&

// // true && true && true = true 

// // false && true && true = false 

// // // OR   - ||

// // false || false || false = false 

// // false || false || true  = true

// // // NOT  - !

// // !(true) = false , !(false) = true



// // example :- 

// // 1. What is the output?
// console.log(5 > 3 && 10 > 5); // true && true = true

// // 2. What is the output?
// console.log(8 < 4 || 15 > 10); // false || true = true

// // 3. What is the output?
// console.log(!(20 > 10));  // !(true) = false

// // 4. What is the output?
// console.log(7 <= 7 && 9 != "9");  // true && false = false

// // 5. What is the output?
// console.log(5 === "5" || 12 >= 12); // false || true = true

// console.clear();


// // 5. ternary operator


// // condition ? statement1 : statement2


// 5 < 7 ? console.log("condition true") : console.log("condition false");



// // concatination  +

// let d1 = "iron"
// let d2 = "man"

// // ironman

// console.log(d1+d2);

// // Template string

// let e1 = "spider"
// let e2 = "man"

// console.log(`${e1}${e2}`);


// // ternary operator

// let userName = false

// let pwd      = true 


// userName == pwd ? console.log("allow the home page") : console.log("your username and pwd wrong");


// console.clear();


// // Type Casting 

// // 1. implicit Type Casting 


// console.log(typeof(45 + "hello"));


// // string 
// // string anything is string


// console.log(typeof("hello" + "hello"));
// console.log(typeof("hello" + 45));
// console.log(typeof("hello" + true));
// console.log(typeof("hello" + undefined));
// console.log(typeof("hello" + null));

// console.log(typeof("hello" + [1,2]));
// console.log(typeof("hello" + {k:5}));


// console.log("number implicit type casting");


// // number 


// console.log(typeof(123 + "hello"));
// console.log(typeof(123 + 123));
// console.log(typeof(123 + true));
// console.log(typeof(123 + undefined));
// console.log(typeof(123 + null));

// console.log(typeof(123 + [3,4]));
// console.log(typeof(123 + {h:6}));


// // boolean 


// console.log("boolean implicit type casting");


// console.log(typeof(true + "hello"));
// console.log(typeof(true + 123));
// console.log(typeof(true + true));
// console.log(typeof(true + undefined));
// console.log(typeof(true + null));

// console.log(typeof(true + [1,2]));
// console.log(typeof(true + {k:6}));











// // 2. Explicit Type Casting

// // constractor

// // Number()


// console.log(typeof(11 + Number("11")))

// console.log(Number());
// console.log(Number(""));
// console.log(Number("123"));
// console.log(Number("abc"));
// console.log(Number(true));
// console.log(Number(-123));
// console.log(Number(undefined));
// console.log(Number(null));

// console.log(Number([1,2,3]));
// console.log(Number({h:5}));



// // Boolean()


// console.log(Boolean());
// console.log(Boolean(""));
// console.log(Boolean("123"));
// console.log(Boolean("abc"));
// console.log(Boolean(true));
// console.log(Boolean(-20));

// console.log(Boolean(undefined));
// console.log(Boolean(null));


// console.log(Boolean([]) );
// console.log(Boolean({l:5}) );

// console.clear();



// // Flow Control statement 



// // 1. conditional statement 

// // 1. if statement

// // syntex :-  

// // if(condition){
// //     statement
// // }

// // flow :-  condition = true , allow statement


// // example :- 


// if(5===50){
//     console.log("hello");
    
// }

// console.log("hi");


// // 2. if - else statement 


// // syntex :- 

// // if(condition){
// //     statement
// // }else{
// //     statement
// // }

// // flow :-  condition = true, if inside allow. condition = false , else inside allow


// // example :- 


// if(5===5){
//     console.log("1");
    
// }else{
//     console.log("wrong");
    
// }


// // else if statement 


// let time = 25

// if(time>=1 && time <= 6){
//     console.log("good Morning");
    
// }else if(time >= 7 && time <= 12){
//     console.log("morning");
    
// }else if(time >= 13 && time <= 15){
//     console.log("good afternoon");
    
// }else if(time >= 16 && time <= 18){
//     console.log("Good evening");
    
// }else if(time >= 19 && time <= 24){
//     console.log("Good night");
    
// }else{
//     console.log("time invalid");
    
// }



// // nested if statement


// // // police selection application 



// // // if(age>=18){
// // //     if(height >= 155){
// // //         if(weight >= 55){
// // //             console.log("Your are eligible");
            
// // //         } e1se {
// // //             console.log("weight is not eligible");
            
// // //         }
// // //     }else{
// // //         console.log("height is not eligible");
        
// // //     }
// // // }else{
// // //     console.log("age is not eligible");
    
// // // }



// // let age1 =     prompt("enter your age?")
// // let weight1 = prompt("enter your weight ? kg")
// // let height1 = prompt("enter your height ? cm")


// // if (age1 >= 18){
// //     if(weight1 >= 55){
// //         if(height1 >= 155){
// //             alert("congradulation your selected");
            
// //         }else{
// //             alert("height is not eligibe");
// //         }
        
// //     }else{
// //         alert("weight is not eligible");
        
// //     }
// // }else{
// //     alert("age is not eligible");
    
// // }



// // switch statement 


// // switch(condition){
// //     case value : statement ; break
// //     case value : statement ; break
// //     case value : statement ; break
// //     case value : statement ; break
// //     case value : statement ; break
// // }



// // let trafficLight = "n"

// // switch(trafficLight){
// //     case "red" : console.log("stop the vechile");break;
// //     case "yellow" : console.log("start the vechile"); break;
// //     case "green"  : console.log("go vechile");break

// //     default : console.log("have nice day");
    
    
    
    
// // }

















// // 2. looping statement


// // 1. for loop 

// // for(intialization ; condition ; iteration){

// // statement

// // }


// for(let a = 1 ; a <= 3 ; a++){
//     console.log(a); // 1 2 3
    
// }


// // a=1    ;  1 <= 3 = true ; 1++ = 2
// // a=2    ;  2 <= 3 = true ; 2++ = 3
// // a=3    ;  3 <= 3 = true ; 3++ = 4
// // a=4    ;  4 <= 3 = false.


// // 2. while loop 


// // syntex :- 

// // intialization 

// // while(condition){
// //     statement 

// //     iteration 
// // }


// // examle :- 


// let val = 4

// while(val >= 10){
//     console.log("while loop : ",val);

//     val--
    
// }


// //val =  4  , 4 >= 0 = true , (4) , 4-- = 3,
// // val = 3  , 3 >= 0 = true , (3) , 3-- = 2,
// // val = 2  , 2 >= 0 = true , (2) , 2-- = 1,
// // val = 1  , 1 >= 0 = true , (1) , 1-- = 0,
// // val = 0  , 0 >= 0 = true , (0) , 0-- = -1
// // val = -1 . -1 > = 0 = false.

// // 3. do while loop 


// // syntex :- 

// // intialization 

// // do{
// //     statement 

// //     iteration 
// // }

// // while(condtion)



// // example :- 


// let val1 = 4 // 3 // 2 // 1 // 0 

// do{
//     console.log("do while :- ",val1); // 4 3 2 1 0 

//     val1--  // 4-- = 3  // 3-- = 2 // 2-- = 1  // 1-- = 0 // 0-- = -1
    
// }

// while(val1 >= 0 ) // -1 >= 0 false.


// // 4. for of loop - [array , string , function]


// let str = "javascript"
// let array = ["apple","samsung","black berry","xiomi"]


// // syntex 

// // for(let a of str ){
// //     statement
    
// // }


// // example 

// for(let a of str){
//     console.log(a);
    
// }


// for(let b of array){
//     console.log(b);
    
// }



// // 5. for in loop - object


// // syntex 


// // for(let c in variable){
// //     statement 
// // }


// let obj = {
//     name1 : "a",
//     age   : 18,
//     department : "ece",
//     percentage : 90,
//     cgpa       : 9
// }



// for(let c in obj){
//     console.log(c,obj[c]);
    
// }


// console.clear();



// // function 


// // syntex 


// // function one(parameter){
// //     // statement
// //     // return
// //     // yeild
// // }


// // one(argument)



// // example :- 


// function one(){

//     console.log("hello");

//     if(true){
//         console.log("hello");
        
//     }

//     for(let a = 1 ; a <= 6 ; a++){
//         console.log(a);
        
//     }
    
// }


// one()



// // repeation 


// function form(name,department,cgpa){
//     console.log("name",name);
//     console.log("department",department);
//     console.log("cgpa",cgpa);
    
// }

// form("kamal","ECE",9)
// form("praveen","ECE",8)


// // outside data also we can access

// let randomObj={
//     name1 : "john",
//     role  : "SAP"
// }


// function accessOutside(){
//     console.log(randomObj.name1);
    
// }


// accessOutside()



// // return()


// function one1(){
//     return("hello");
    
// }

// let b11 = one1()


// function one2(){
//     console.log(b11);
    
// }

// one2()



// // salary with bonus 


// function salary(monthly){
//     return monthly
// }

// let record = salary(50000)

// console.log(record);

// function bonus(extra){
//     console.log(record + extra);
    
// }

// bonus(10000)


// // Types of function 





// function scopeCheck(){
//     if(true){
//         var on1 = "function Or global scope"
//         let on2 = "Block scope"
//         const  two ="block scope1" 
//         console.log(on2);
//         console.log(two);
//     }

    
    
    
// }

// scopeCheck()
// console.clear();


// // Hoisting

// console.log(a22);

// var a22 = "global scope"



// // console.log(a23);
// // let a23 = "block scope"


// // console.log(a24);

// // const a24 = "block scope-1"


// // Named function 
// named("named function")

// function named(parameter){
//     console.log(parameter);
    
// }



// // annoynmous function 

// var annoynmous = function (parameter){
    
//     console.log(parameter);
    
    
// }

// annoynmous("Annoynmous function")

// console.log(abc);
// var abc = "hi"



// // arrow function
// arrow("Arrow function")

// var arrow = (parameter)=>{

//     console.log(parameter);
    

// }



// // IIFE - self invoke function

// syntex 

// (function(paremeter){
//     // statement
//     // return
//     // yeild
// })(argument)



// example

// (function(product,price){
//     alert(`now sales going on , ${product} only for ${price}`)
// })("shirt",500)



//  Higher order function and callback function


function function1(){
    console.log("higher order function");
    
}

function function2(){
    console.log("callback function");
    
}

function1(function2())



// example 


let add = function(callback , a, b){  // callback = sub , a = 20 , b = 40 . 

    console.log(a+b);    // 20 + 40 = 60 .

    
    callback(200,200)    // sub(200,200)
    
}


let sub = (c,d)=>{  // c = 200 , d = 200

    console.log(c-d); // 200 - 200 = 0
    

}



add(sub,20,40)

// -20 , 400 ,/ 60,0 ,/ 420. 


// Generator function


// syntex :


function* gen(){
    yield "10% cashback"
    yield "20% cashback"
    yield "50% cashback"
    yield "70% cashback"
    yield "10% cashback"
    yield "try again next time"
}

let genVal = gen()

// console.log(genVal.next().value);
// console.log(genVal.next());
// console.log(genVal.next());
// console.log(genVal.next());
// console.log(genVal.next());
// console.log(genVal.next());


// if(genVal.next().done){
//     console.log("value fully done");
    
// }



for(let a of genVal){
    console.log(a);
    
}


// curring stracture 

function a(a){
    return function (b){
        return function (c){

            console.log(a+b+c);
            

        }
    }
}


a(10)(20)(30)

// uncurring stracture

function a1(a,b,c){

    console.log(a+b+c);
    
}

a1(10,20,30)



// // Arrow function 


// let arrow1 = (parameter)=>{

//     console.log("hi");
    

// }

// arrow1()


// let array2 = ["PUBG","COD","NFS"]

// array2.forEach((parameter)=>{
//     console.log(parameter);
    
// })





console.clear();




// DataStracture 

// ES 6 edition 

// ECMA SCRIPT

// 2015


// Spread opreator

// array spread opearator - [...]


let arr1 = [1,2,3,4]
let arr2 = [5,6,7,8]


let TotalArr = [...arr1,...arr2,9]

console.log(TotalArr);



// object spread opearator - {...}

let obj1 = {
    name11 : "a",
    role1  : "trainee",
    salary1: 50000
}
let obj2 = {
    name1 : "b",
    role  : "employee",
    salary: 70000
}


let totalEmployee = {...obj1,...obj2}

console.log(totalEmployee);



// Rest operator - function - (...)


function restOpe(a,b,c,...d){
  console.log(a,b,c,d[0]);
  console.log(d);
  
  
}


restOpe(1,2,3,4,5,6,7,8,9)



// Destracture

// array


let arr3 = [1,2,3,4]

let s1 = arr3[0]
let s2 = arr3[1]
let s3 = arr3[2]
let s4 = arr3[3]

console.log(s1 + s1 + s4);


let [d1,d2,d3,d4] = arr3

console.log(d1 + d2 + d3);


let arr4 = [1,2,[3,4,[5,6,[7]]]]

let f1 = arr4[0]
let f2 = arr4[1]
let f3 = arr4[2][0]
let f4 = arr4[2][1]
let f5 = arr4[2][2][0]
let f6 = arr4[2][2][1]
let f7 = arr4[2][2][2][0]

console.log(f1,f7,f5);


let [g1,g2,[g3,g4,[g5,g6,[g7]]]] = arr4

console.log(g1,g7,g5);


// obj destracture 

let obj3 = {
    name1 : "john",
    role  : "sap",
    salary : 50000
}

let h1 = obj3.name1
let h2 = obj3.role
let h3 = obj3.salary

console.log(h1 , h2 , h3);

let {name1 , role , salary} = obj3

console.log(name1 , role , salary);






// example 


function storage(a,...b){
    console.log(a);
    console.log(b);

    let [a1,b1,c1,d1,e1,f1,g1,i1] = b

    console.log(d1 + i1);
    
    
    
}

storage(1,2,3,4,5,6,7,8,9)




// Array advance concept

let array1 = [1,2,3,4,"hello",true , undefined , null , [1,2,3],{
    l:7
}]

console.log(array1);
console.log(array1[0]);
console.log(array1[array1.length-1]);


// homogenious 
// hetrogenious
// flexible 


// Array manipulation method

// if adding method we are use mean that time we can add multiple value

// if remove method we are use mean that time we can remove only one value


// 1. pop()  - array of last value remove purpose
let arr5 = [1,2,3,4]

arr5.pop()

console.log(arr5);


// 2. push() - array of last value adding method

arr5.push(4,5,6,7,8)

console.log(arr5);


// 3. shift() - array first value remove method

arr5.shift()
console.log(arr5);


// 4. unshift() - array first value add method


arr5.unshift(0,1)

console.log(arr5);


// 5. splice () - startingIndex , Removing Count  , adding value

let arr6 = [1,2,3,40,50,60,7,8]

arr6.splice(3 , 3 , 4,5,6)

console.log(arr6);


//  Array merge method 


// concat()

let ab = [1,2,3,4,5]
let ac  = [6,7,8,9,10]


let newArr = ab.concat(ac)

console.log(newArr);


// slice()


let ad = [1,2,3,50,60,70,8,9,10]

let sliceVal1 = ad.slice(3,6) // sI , EI + 1


console.log(sliceVal1);


// flat() 

let nested = [1,2,3,[4,5,[6,7,[8]]]]

console.log(nested.flat(Infinity));


// Fill()

let d21 =  [1,2,3,4] // 1,2,3,"four"

d21.fill("four",3,4) // "value" , sI , EI + 1

console.log(d21);

// includes()

let arr7 = [565,88,22,6787,34,2,7]

console.log(arr7.includes(2));

// indexOf()

let arr8 = [1,2,3,4,2,3,2,1]

// console.log(arr8.indexOf(2,2)); // value , fromIndex
console.log(arr8.indexOf(2)); // 1
console.log(arr8.indexOf(2,2)); // 4
console.log(arr8.indexOf(2,5)); // 6


// lastIndexOf

// console.log(arr8.lastIndexOf(2,4));
console.log(arr8.lastIndexOf(2)); // 6
console.log(arr8.lastIndexOf(2,5)); // 4
console.log(arr8.lastIndexOf(2,3)); // 1


// sort

let arr9 = [3,45,1000,2,8,6] // 1000 = 1.000 , 1.000 < 2 = true

console.log(arr9.sort());


// reverse 

let arr10 = [1,2,3,4,5,6,2]

console.log(arr10.reverse());










