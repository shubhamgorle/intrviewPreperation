// 1.

// const obj = {};
// const key = "proto";
// obj[key]= 13;
// console.log(obj[key]); 


// 2. Find a bug and explain why there is an error in the code and how you would correct it
// let x = 5;
// function foo() {
//   console.log(x);
// }
// foo();
//  let x = 10;
//  we can update the value of variables which declared using let we cannot redeclare this variable with same name.


// so solve this, we have to remove let from line number 15
// let x = 5;
// function foo() {
//   console.log(x);
// }
// foo();
// x = 10;


// 3. Can you guess the output?

// var obj1 = {
//     address: "Mumbai,India",
//     getAddress: function () {
//         console.log(this.address);
//     }
// }

// var getAddress = obj1.getAddress();
// var obj2 = { name: "akshay" };
// obj2.getAddress();


// 4. Can you guess the output?
// function outer() {
//     function inner() {
//         console.log(x);
//     }
//     let x = 10;
//     inner();
//     console.log(x);
//     if (true) {
//         let x = 5;
//         console.log(x);
//     }
//     console.log(x);
// }
// outer();
// Explain how the hoisting works in this code, and why the output is what it is.


// 5. What would be the output of the following code snippet?
// let x = 0;
// function increment() {
//     x++;
//     console.log(x); 
//     if (x >= 3) {
//         let x = 0;
//         increment();   
//     }
//     else if(x==3){
//         console.log(x)
//     }
//     else if(x==0){
//        console.log(x) 
//     }
// }

// increment();

// let x = 0;
// function increment() {
//     x++;
//     console.log(x);
//     if (x < 3) {
//         x = 0;
//         increment();
//     }
// }
// increment();
// output---> 1,1,1........infinity


// 6. What would be the output of the following code snippet?
// const arr = [1, 2, 3];
// for (var i = 0; i < arr.length; i++) {
//     setTimeout(function () {
//         console.log(arr[i]);
//     }, i * 1000);
// }
// output---> undefined, undefined, undefined 
// In this snippet, var is used to declare i. Variables declared with var have function scope, not 
// block scope. So, by the time setTimeout executes its callback function, the loop has already 
// finished and i has the value of arr.length, which is out of bounds for the array arr. Hence, arr[i] results in undefined.

// var brr = [1, 2, 3];
// for (let i = 0; i < brr.length; i++) {
//     setTimeout(() => {
//         console.log(brr[i])
//     }, i * 1000)
// }
// output---> 1, 2, 3 
//  In this snippet, let is used to declare i. Variables declared with let have block scope,
//  meaning a new i is created for each iteration of the loop. This ensures that each setTimeout
//   callback captures the correct value of i for that iteration because each callback gets its 
//   own lexical environment with its own i. As a result, the output is 1, 2, 3, as expected.


// 7. What would be the output of the following code snippet?

// function sayHi() {
//     console.log(name);
//     console.log(age);
//     var name = 'Lydia';
//     let age = 21;
// }
// sayHi();

// 8. What would be the output of the following code snippet?

// for (var i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 1);
// }

// for (let i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 1);
// }

// 9. What would be the output of the following code snippet?

// const shape = {
//     radius: 10,
//     diameter() {
//     return this.radius * 2;
//     },
//     perimeter: () => 2 * Math.PI * this.radius,
//  };

//     console.log(shape.diameter());
//     console.log(shape.perimeter());


// 10. What would be the output of the following code snippet?

// class Chameleon {
//     static colorChange(newColor) {
//         this.newColor = newColor;
//         return this.newColor;
//     }
//     constructor({ newColor = 'green' } = {}) {
//         this.newColor = newColor;
//     }
// }

// const freddie = new Chameleon({ newColor: 'purple' });
// console.log(freddie.colorChange('orange'));

// we are getting error because colorChange is a static method and freddie is a instance of class Chameleon.
// static method not accessible with instace of class. To fix this, we should call the colorChange method on the class itself:

// console.log(Chameleon.colorChange('orange'));


// 11. what is the output

// let c = {
//     greeting: 'Hey!'
// };
// let d;
// d = c;
// c.greeting = 'Hello';
// console.log(d.greeting);
//  the variable d is assigned the reference to the object c.
//  Objects in JavaScript are assigned by reference, so "both c and d point to the same
//  object in memory" . When you change the property greeting of the object through the 
//  variable c, the change is reflected when accessing the same object through the variable d.

// function bark() {
// console.log('Woof!');
// }
// bark.animal = 'dog';
// output-> nothing
// In JavaScript, functions are first-class objects, which means you can treat them 
// like any other object. In this case, you are adding a property animal to the bark 
// function, and this is perfectly valid in JavaScript. Functions can have properties just 
// like any other object. So, the code will run without any errors, and you can access the 
// animal property as bark.animal. The function will still behave as expected, logging 'Woof!' when called.


// 12. What's the output?

// function getAge(...args) {
//     console.log(typeof args);
// }
// getAge(21);


// var a = 10;
// var b = a;
// a = a+10;
// console.log(a)
// console.log(b)   
// immutable


// var arr = [1,2,3];
// var brr = arr;
// brr.pop();
// console.log(arr)
// console.log(brr)
//   ---> mutable



// const object1 = {
//     a: 10,
//     b: 20,
//     c: function () {
//         console.log(this.a + this.b);
//     },
// };
// const func = object1.c;
// func();

// const object1 = {
//     a: 10,
//     b: 20,
//     c: function () {
//     console.log(this.a + this.b);
//     },
//     };
    
//     const func = object1.c.bind(object1);
//     func();


// const arr = [10, 12, 15, 21];
// for (var i = 0; i < arr.length; i++) {
// setTimeout(function() {
// console.log('The index of this number is: ' + i);
// }, 3000);
// }


// for (var i = 0; i < 3; i++) {
//     setTimeout(function() { alert(i); }, 1000 + i);
//   }


//   for(let i = 0; i <5; i++){
//           setTimeout(()=>{
//                   console.log(i);
//       },0)
//   } 


// let count = 0;
// (function immediate() {
// if (count === 0) {
// let count = 1;
// console.log(count); // What is logged?
// }
// console.log(count); // What is logged?
// })();



// Sorting
// var arr = [2,3,5,1,7,8,10];
// arr.sort((a,b)=>a-b)
// console.log(arr)

