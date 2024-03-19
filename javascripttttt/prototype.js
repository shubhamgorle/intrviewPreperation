// "use strict"



console.log(a);
var a;
function person(name, energy) {
    var person = {};
    person.name = name;
    person.energy = energy;


    person.eat = function (energy) {
        console.log(this.name, 'is eating')
        this.energy += energy
    }


    person.sleep = function (energy) {
        console.log(this.name, 'is sleeping')
        this.energy += energy
    }


    person.code = function (energy) {
        console.log(this.name, 'is coding')
        this.energy -= energy
    }
    return person;
}
var sai = person("sai", 15)
var jay = person("jay", 12)


// console.log(sai) 
// // when we calling fuction person for every call indirectly we are calling
// // eat, sleep, code function every time unneccesarrily. which takes extra space & memory
// // which is not desirable at all.
// console.log(jay)

// sai.code(15)


// // to avoid this ------------------------------------------------>

// var personMethods = {
//     eat: function (energy) {
//         console.log(this.name, 'is eating')
//         this.energy += energy
//     },
//     sleep: function (energy) {
//         console.log(this.name, 'is sleeping')
//         this.energy += energy
//     },
//     code: function (energy) {
//         console.log(this.name, 'is coding')
//         this.energy -= energy
//     }
// }

// function person(name, energy) {
//     // var person = {};   instead of this we can create the person object like
//     var person = Object.create(personMethods)
//     // now we will not have unneccessary methods in every call
//     // but to access this javascript has inbuild term .ie prototype
//     person.name = name;
//     person.energy = energy;
//     //  person.eat=personMethods.eat
//     //  person.sleep=personMethods.sleep
//     //  person.code=personMethods.code
//     return person;
// }

// var sai = person("sai",15)
// var jay = person("jay",12)


// // to rewrite this -------------------------------------------------->



function Person(name, energy){
    // var person = Object.create(Person.prototype)
    this.name = name;
    this.energy = energy;
}
Person.prototype.eat = function (energy){
    console.log(this.name, 'is eating')
    this.energy += energy
}
Person.prototype.sleep = function (energy){
    console.log(this.name, 'is sleeping')
    this.energy += energy
}
Person.prototype.code = function (energy){
    console.log(this.name, 'is coding')
    this.energy -= energy
}
var sai = new Person("sai", 15)
var jay = new Person("jay", 12)
console.log(sai)
console.log(jay)



/// CALL, APPLY & BIND
// =>  

// var jethalal = {
//     wife:"Daya",
//     age:45,
//     place:"Mumbai"
// }
// var bide = {
//     wife:"madhvi",
//     age:40,
//     place:"Mumbai"
// }
// function PopatLal(a,b){
//     console.log(this.wife + " will cook food")
// console.log(a,b)
// }
// CALL
// PopatLal.call(jethalal)
//  APPLY
// PopatLal.apply(bide,["hellow", 29])
//  BIND
// var func = PopatLal.bind(bide,"hellow", 29);
// func()






// function rectangle(height,width){
//     this.width = width;
//     this.height=height
// }

// rectangle.prototype.area = function(){
//     return this.width + this.height
// }

// let box = new rectangle(5,10)
// console.log(box.area())

// same this we can build using classes.

// class rectangle{
//     constructor(height,width){
//         this.height = height
//         this.width = width
//     }
//     area(){
//         return this.height + this.width
//     }
// }

// let box = new rectangle(5,10)
// console.log(box.area());


// BIGINT
// var num = 2n**53n - 1n;
// console.log(num)
// console.log(num+2n)

// const fun1 = ()=>{
//     console.log("fun1 is starting")
//     fun2()
//     console.log('fun1 is ending')
// }

// const fun2 = ()=>{
//     setdelay(() => {
//         console.log("fun2 is starting")
//     }, 3000);
// }

// fun1()

// var arr= [1,2,3,4,5];
// for(var i = 0; i<arr.length; i++){
//     setdelay(() => 
//         console.log(arr[i]), i*1000);
// }

// In the given code snippet, the issue is related to the scoping of the variable i inside 
// the setdelay callback function. The setdelay function is asynchronous, meaning that 
// the callback function will execute after the specified delay, while the loop continues executing immediately.
// By the time the first callback is executed, the loop has already completed, and the value of i has reached the value arr.length. 
// At this point, arr[i] is arr[arr.length], which is undefined since the last index of the array is arr.length - 1. Therefore, 
// you are seeing "undefined" being printed.

// To fix this issue, you can use a closure to capture the value of i for each iteration. One way to achieve 
// this is by using a separate function and passing the value of i as an argument. Here's an updated version
//  of your code that should work as expected:


///

// function myArray() {
//     this.length = 0;
// }
// push
// pop
// Map
// myArray.prototype.push = function (ele) {
//     this[this.length] = ele
//     this.length++;
//     return this.length;
// }

// myArray.prototype.pop = function () {
//     this.length--;
//     var ele = this[this.length];
//     delete this[this.length]
//     return ele;
// }
// var arr = new myArray();
// arr.push(10)
// arr.push(20)
// arr.push(30)
// arr.pop()

// myArray.prototype.map()
// var arrr = [2, 1, 3, 4, 5];
// arrr.forEach((e)=>console.log(e+10))



// // In javascript there are two major datatypes.
// // 1.primitive  ---> string, number, boolean, null, undefined, bigint, symbol
// // data is directly store in memory location where variable exist.
// // 2.reference  --->  array & object
// // data is stored in variable which is a pointer to allocation in memory where object is stored.
// let x = 20   
// let y = x;  
// // it is immutable because value of x is not changing by changing the value of y.
// console.log(x)
// console.log(y+1)

// let a1 = [1,2,3]
// // let a2 = a1; its mutable because by changing the value of a2, value of a1 is changing. to overcome it we can use spread operator.
// let a2 = [...a1]
// a2.pop();
// console.log(a1)
// console.log(a2)


// let obj1 = {
//     name:"Shubham",
//     age:22,
//     place:"nagpur"
// }
// // let obj2 = obj1; its mutable because by changing the value of obj2, value of obj1 is changing. to overcome it we can use spread operator.
// let obj2 = {...obj1}
// obj2.color = "brown"
// console.log(obj1)
// console.log(obj2)




// <-----------------------------------Closure--------------------------------->
// var name = "shubham"
// function fun1(){
//      name = "vicky"

//      function fun2(){
//         console.log('good morning', name)
//      }
//      name = "suraj"
//      return fun2
// }
// let c = fun1();
// c()

// function outer(){
//     var a=10;
//*     return function inner(b){
//         return a+b;
//     }
// }
//* var cdn =  outer();
//* console.log(cdn(10)) ;

// function outer(a){
//     return function inner(b){
//         return a+b
//     }
// }
// console.log(outer(10)(20))

// Debouncing

// If user click two times and request time of first request not complete yet then it will cancel the first request.

// const makeApiCall=()=>{
//     console.log("API call in progress");
// }
// const debouncer = (func,delay)=>{
//     ///Should remember if call is called.
//     let debouncing;
//     return function(){
//         debouncing && clearTimeout(debouncing)
//         debouncing =  setTimeout(() => 
//             func.apply(this,arguments)
//         , delay);
//     }
// }

// window.addEventListener('load',function(){
//     var btn = document.getElementById("click");
//     const fn = debouncer(makeApiCall,1000)
//     btn.addEventListener("click",fn)
//     // btn.addEventListener("click",debouncer(makeApiCall,1000))
// })

// Throtling


// const makeApiCall=()=>{
//     console.log("API call in progress");
// }
// const throtller = (func,delay)=>{
//     ///Should remember if call is called.
//     let lastcall=0;
//     return function(){
//         if(Date.now() - lastcall > delay){
//             lastcall=Date.now();
//             func.apply(this,arguments)
//         }
//     }
// }

// window.addEventListener('load',function(){
//     var btn = document.getElementById("click");
//     btn.addEventListener("click",throtller(makeApiCall,1000))
//     // btn.addEventListener("click",debouncer(makeApiCall,1000))
// })

///   Togler

// function toggler(){
//     var arr = arguments;
//     let index= -1;
//     return function(){
//         index = index + 1;
//         if(index >= arr.length){
//             index = 0;
//         }
//         return arr
//     }
// }


// const toggle = toggler( 'on', 'off' );
// const toggle = toggler( 1,2,3 );
// console.log(toggle())
// console.log(toggle())
// console.log(toggle())
// console.log(toggle())


// const print = (i)=>{
//   setTimeout((i) => {
//     console.log(i,crr[i])
// }, i*1000,i);
// }

// var crr = [1,2,3]
// for(var i = 0; i<crr.length; i++){
//     // setTimeout((i) => {
//     //     console.log(i,crr[i])
//     // }, i*1000,i);
//     print(i)
// }



///------------------------------------------------------>


// Destructuring
// array and object destructuring

// var person = {
//     name: "masai",
//     id: '000',
//     location: "INDIA"
// }
// // before es6
// const name=person.name 
// // after es6
// const {name,id} = person  --->   destructuring
// console.log(name)


// function getData(){
//     return person
// }

// const {name,id} = getData();
// console.log(name,id)

// Array destruturing

// const arr = ['masai','india','bangluru'];


// before es6
// const name = arr[0];
// const country = arr[1];
// const city = arr[2];
// console.log(name)
// console.log(country)
// console.log(city)

// after ES6

// const [name,country,city] = arr;   --->   destructuring
// console.log(name)
// console.log(country)
// console.log(city)

// <--------------------default values------------------>

// before ES6
// function allSubjects(maths,english,science){

// return maths+english+science
// }

// let total = allSubjects(50,60);
// console.log(total) --->NaN
// to avoid this before ES6

// function allSubjects(maths,english,science){
// maths =  maths || 0
// english =  english || 0
// science =  science || 0
// return maths+english+science
// }

// let total = allSubjects(50,60);
// console.log(total)  ---> output is 110


// AFTER ES6

// function allSubjects(maths,english,science=0){
//      return maths+english+science
// } 

//     let total = allSubjects(50,60);
//     console.log(total)  ---> output is 110

// Template literals are string literals that allow you to embed expressions
//  and values within strings.
// Template literals are enclosed by the back-tick ( ``) or grave accent
// character instead of double or single quotes

// before ES6

// let fname = 'masai';
// let lname = 'school'
// // let str = fname+' '+lname

// // after ES6
// let str = `${fname} ${lname}`
// console.log(str)
// document.querySelector("#input_form").addEventListener("submit",handleSubmit)    
//   async function handleSubmit(e){
//     e.preventDefault()
//     var fname = document.getElementById("fname").value
//     var lname = document.getElementById("lname").value
//     console.log(fname,lname)
// }


// if(navigator.onLine){
//     console.log("online")
// }else{
//     console.log("offline")
// }



// const makeApiCal = () => {
//     console.log("Api call Running")
// }

// // const debouncer = (makeApiCal, timeout) => {
// //     var debouncing;
// //     return function () {
// //         debouncing && clearTimeout(debouncing)
// //         debouncing = setTimeout(() => {
// //             makeApiCal.apply(this, arguments)
// //         }, timeout);
// //     }
// // }

// window.addEventListener("load", function () {
//     var btn = document.getElementById("click");
//      btn.addEventListener("click", debouncer(makeApiCal, 3000))
// })

// form validation code

// document.getElementById("form").addEventListener("submit",submitform);
// function submitform(event){
//     event.preventDefault()
//    var name = document.getElementById("password").value
//    var lname = document.getElementById("cpassword").value
//    if(name != lname){
//     alert("password don't match")
//    }
//    else{
// alert("Registration Successfylly Completed")
//    }
// }

// var obj = {
//     name:"shubham",
//     data:function(){  
//        setTimeout(function(){
//        console.log("this")
//        }, 1000);
//     }
// }
// obj.data() 
// console.log("10")



// let mypromise = new Promise((resolve, reject)=>{
//     let isauth = false;
//     if(isauth){
//         setTimeout(()=>{
//           resolve("operation is completed")
//         },1000)
//     }
//     else{
//         reject("operation is failed")
//     }
// })

// mypromise.then((data)=>{
//   console.log(data)
// }).catch((e)=>{
// console.log(e)
// })

// function outer(a){
//     return function inner(b){
//         return a + b;
//     }
// }
// console.log(outer(10)(20))



// const makeapi = ()=>{
//     console.log("api is called")
// }

// const throtling = (time, maqkeapi)=>{
//   let throtler = 0;
//   return function(){
//    if(Date.now() - throtler > time){
//     throtler = date.now();
//     makeapi.apply(this, arguments)
//    }
//   }
// }


// let arrayOfObjects = [
//     { name: 'John', age: 30 },
//     { name: 'Jane', age: 25 },
//     { name: 'Bob', age: 35 }
// ];

// // Sort by name in ascending order
// arrayOfObjects.sort((a, b) => b.name.localeCompare(a.name));

// console.log(arrayOfObjects);

// function rec(w,h){
// this.width = w;
// this.height = h;

// }

// rec.prototype.area = function(){
//     return this.width*this.height;
// }

// let re = new rec(1,2);
// console.log(re.area())


// function rectangle(height,width){
//     this.width = width;
//     this.height=height
// }

// rectangle.prototype.area = function(){
//     return this.width + this.height
// }

// let box = new rectangle(5,10)
// console.log(box.area())

// same this we can build using classes.

// class rectangle{
//     constructor(height,width){
//         this.height = height
//         this.width = width
//     }
//     area(){
//         return this.height + this.width
//     }
// }

// let box = new rectangle(5,10)
// console.log(box.area());

// class rectangle {
//     constructor(height,width){
//        this.width = width
//        this.height = height
//     }
//     area(){
//         return this.width*this.height
//     }
// }
// let box1 = new rectangle(10,20);
// console.log(box1.area())

// function exampleFunction() {
//     let x = 100;
//     let y = 300;

//     // Some code here
//     console.log(x+y)

//     // Execution will pause here

//     // More code here

//     let z = x + y;
//     console.log(z);
//   }

//   exampleFunction();


//   reverse string 


// eassy way
// let str = "pratik";
// let rev = "";
// for(let i = str.length-1; i>=0; i--){
//     rev += str[i];
// }
// console.log(rev);


// // convert string to array 
// var s = "shubham";
// var arr = s.split("");
// console.log(arr)


// // convert array to string 
// var arr = [1,2,3,4,5]
// var s = arr.join("")
// console.log(s)
// console.log(typeof(s))



// shortcut way 
// const reverseString = (str)=>{
//         return str.split("").reverse().join("")
// split the string into array of character
// reverse the order of element in array
// join character back togather into the string
// }

// let rev = reverseString("shubham");
// console.log(rev)

// var arr = [1,2,3,4,5];
// var brr = arr.reverse();
// console.log(brr) 

// let str = "vicky";
// let b = str.split("")  
// console.log(b)
//  output ---> [ 'v', 'i', 'c', 'k', 'y' ]


// find the logest word  in the sentence

// var str = "i love coding in javascript";
// let arr = str.split(" ");
// console.log(arr);
// let ref = "";
// for(let word of arr){
//     if(word.length > ref.length){
//         ref = word
//     }
// }
// console.log(ref)
// let ref = "";
// for(let i = 0; i < arr.length; i++){
//    if(arr[i].length > ref.length){
//     ref = arr[i];
//    }
// }
// console.log(ref.length)

// let arr = [1,2,3,4,5];
// let str5 = "bhushan"
// for(let i of str5){
//     console.log(i)
// }

// write the function to remove duplicate element in the array
// var arr = [1,2,2,3,7,7,3,4,5];

// function RemoveDuplicates(arr){
//       const uniqueElement = [];
//       for(let i = 0; i<arr.length; i++){
//          if(uniqueElement.indexOf(arr[i]) === -1){
//              uniqueElement.push(arr[i]);
//          }
//       }
//       return uniqueElement;
// }
// OR 
// function RemoveDuplicates(arr){
// convert the array to a Set which allow only unique values
// convert set back to an array
// let newarr = new Set(arr)
// let finalarr = [...newarr]
// return finalarr;
// return [...new Set(arr)]
// }
// console.log(RemoveDuplicates(arr))

// var arr = [1,2,3,4,5];
//  arr.sort();
//  for(let i = 1; i<arr.length; i++){
//     if(arr[i] - arr[i-1] == 0){
//      delete arr[i+1];
//     }
//  }
//  console.log(arr)

// sorting 
// console.log(arr.sort())
// var brr = [{
//     name:"shubham",
//     age:23
// },{
//     name:"vicky",
//     age:21
// },{
//     name:"yash",
//     age:22
// },{
//     name:"vansh",
//     age:18
// },]
// brr.sort((a,b)=>a.name > b.name ? 1: a.age < b.age ? -1 : 0)
// brr.sort((a,b)=>(a.age-b.age))
// console.log(brr)


// write the function that check two strings are anagram or not

// let str1 = "silent";
// let str2 = "listen";
//  function CheckAnagram(s1,s2){
//    let str1 = s1.split("").sort().join();
//    let str2 = s2.split("").sort().join();
//    return str1 === str2;
//  }
//  console.log(CheckAnagram(str1,str2));

// traverse the array  by using different type of loops
// 1.Simple for loop
// var arr = [1, 2, 3, 4, 5];
// var n = arr.length;
// for(let i = 0; i< n; i++){
//     console.log(arr[i]);
// }

// for of loop 
// for(let i of arr){
//     console.log(i);
// }

// Using while loop
// let i = 0;
// while(i < n){
//     console.log(arr[i]);
//     i++;
// }

// suing do-while loop
// {
//     let i = 0;
//     do{
//         console.log(arr[i]);
//         i++;
//     }while (i < n);
// }

// print the vviwels present in the string

let s = "aeioubcd";
let count = 0;
// for(let i = 0; i<s.length; i++){
//    if(s[i] == 'a' || s[i] == 'e' ||  s[i] == 'i' || s[i] == 'o' || s[i] == 'u'){
//     count++;
//    }
// }
// console.log(count);

// let vowels = ['a','e','i','o','u'];

// for(let i of s){
//     if(vowels.indexOf(i) != -1){
//       count++;
//     }
// }
// console.log(count)


// for(let i of s){
//         if(vowels.includes(i)){
//             count++;
//         }
//     }

    // console.log(count)


    // var a = "abchbstshoessssbghds";
    // if(a.includes('shoes')){
    //     console.log("shoes")
    // }
    // else{
    //     console.log("not")
    // }

    const mypromise1 = new Promise((resolve,reject)=>{
       setTimeout(() => {
          if(true){
            resolve("yes");
          }
          else{
            reject("no");
          }
       }, 1000);
    })

    // mypromise1.then((res)=>{
    //    console.log(res)
    // },(err)=>{
    //      console.log(err)
    // })
    // mypromise1.then(res=>console.log(res))
    // .catch((err)=>console.log(err))