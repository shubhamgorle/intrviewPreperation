
// var url1 = "https://dummyjson.com/products/4"
// var url2 = "https://dummyjson.com/products/2"
// var url3 = "https://dummyjson.com/products/3"

// async function fetchdata(url){
//     // console.time("fetchdataTime");
//     try {
//         var res = await fetch(url);
//         var data = await res.json();
//         // console.timeEnd("fetchdataTime");
//         return data;
//     } catch (error) {
//         console.log(error)
//     }
// }

// var promise1 = fetchdata(url1)
// var promise2 = fetchdata(url2)
// var promise3 = fetchdata(url3)

// Promise.all([promise1, promise2, promise3])
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err))

// fetching multiple data at a time using fetch 

// const apiEndpoints = [
//     'https://dummyjson.com/products/1',
//     'https://dummyjson.com/products/2',
//     'https://dummyjson.com/products/3',
// ];

// // Function to fetch data from a single API endpoint using fetch
// const fetchData = async (url) => {
//     try {
//         const response = await fetch(url);
//         return await response.json();
//     } 
//     catch (error) {
//         console.error(error);
//     }
// };

// // Function to fetch data from multiple API endpoints concurrently
// const fetchMultipleApis = async (endpoints) => {
//     try {
//         var AllPromises = endpoints.map((url) => fetchData(url))
//         const results = await Promise.all(AllPromises);
//         return results;
//     } catch (error) {
//         console.error(error);
//     }
// };

// Usage: Fetch data from multiple APIs
// fetchMultipleApis(apiEndpoints)
//     .then(results => {
//         console.log(results);
//     })
//     .catch(error => {
//         console.error(error);
//     });





// 1. fetch data using async await ---------------------------------------------------------------------------->
// async function getData(){
//     try {
//         var data =  await fetch("https://dummyjson.com/products");
//         var res = await data.json();
//         console.log(res);
//     } catch (error) {
//         console.log(error)
//     }
// }

// 2. getData();    ---------------------------------------------------------------------------->

// fetch data using .then .cach
// fetch("https://dummyjson.com/products")
// .then((data)=>data.json())
// .then((res)=>console.log(res))
// .catch((err)=>console.log(err))


// 3.hoisting ---------------------------------------------------------------------------->

// console.log(a);
// var a = 10;
// console.log(a)


// 4 Promises ---------------------------------------------------------------------------->

// var mypromise = new Promise((resolve, reject)=>{
//     var isAuth = false;
//     if(isAuth){
//         resolve("true")
//     }else{
//         reject("false")
//     }
// })

// mypromise.then((res)=>{
//     console.log(res)
// })
// .catch((error)=>{
//     console.log("error")
// })

// fetching Data in promise 

// function fetchData() {
//     return new Promise((resolve, reject) => {
//         fetch("https://dummyjson.com/product")
//             .then((res) => {
//                 resolve(res.json())
//             })
//             .catch((err) => {
//                 reject(err)
//             })
//     })
// }
// fetchData()
//     .then((res) => {
//         console.log(res)
//     })
//     .catch((error) => {
//         console.log(error)
//     })



// 4 this in diffferen schenario's ---------------------------------------------------------------------------->

// var obj1 = {
//     name:"vicky",
//     fun:function(){
//         console.log(this)
//     }
// }
// obj1.fun()    
// ---> output---> Entire object

// var obj1 = {
//     name:"vicky",
//     fun:()=>{
//         console.log(this)
//     }
// }
// obj1.fun()    
// ---> output---> window object

// var obj1 = {
//     name: "shubham",
//     fun: function()  {
//         setTimeout(function () {
//             console.log(this)
//         },1000)
//     }
// }
// obj1.fun()    
// ---> output---> window object

// var obj1 = {
//     name: "shubham",
//     fun: function() {
//         setTimeout(()=> {
//             console.log(this)
//         }, 1000)
//     }
// }
// obj1.fun()
// obj1.fun() ---> output---> Entire object



// 5.    ---------------------------------------------------------------------------->
const one = false || {} || null;
const two = null || false || '';
const three = [] || 0 || true;

console.log(one);
console.log(two);
console.log(three);

// empty curly braces {} and empty array [] are the truthy values


// 6. prototype inheritance ---------------------------------------------------------------------------->

// var employe = {
//    name:"shubham",
//    work:function(){
//     console.log(`my name is ${this.name}`);
//    }
// }

// var company = {
//     nameOfCompany:"tcs",
//     pay:function(){
//         console.log(`my name is ${this.nameOfCompany}`)
//     }
// }
// employe.__proto__ = company
// employe.pay()
// employe object inherits methods any propertie of company object

// 7.call, apply and bind   ---------------------------------------------------------------------------->

// var jethalal = {
//     wife: "daya", 
//     age:40,
//     place:"mumbai"   
// }
// var bide = {
//     wife: "madhvi", 
//     age:40,
//     place:"mumbai"   
// }

// function popatLal(a,b){
//    console.log(`${this.wife} will cook food for popatlal`);
//    console.log(a, b);
// }

// popatLal.call(bide);
// Call is a function that helps you change the context of the invoking function.

// popatLal.apply(jethalal,[10, 20])


// var fun = popatLal.bind(jethalal,10, 20);
// fun()

// 8. prototype ---------------------------------------------------------------------------->

// function rectangle(width, height){
//  this.width = width
//  this.height = height
// }
// rectangle.prototype.area = function(){
//     return this.width*this.height
// }
// var box1 = new rectangle(10, 30);
// console.log(box1.area());

// if we wants to make multiple objects with same properties and methods

// function person(name, energy) {
//     var person = {};
//     person.name = name;
//     person.energy = energy;

//     person.eat = function () {
//         console.log(this.name)
//     }
//     person.code = function () {
//         console.log(this.energy)
//     }
//     return person
// }
// var per1 = person("shubham", 12)
// console.log(per1)
// per1.code()

// when we calling fuction person for every call indirectly we are calling
// eat, code function every time unneccesarrily. which takes extra space & memory
//  which is not desirable at all.


// ------> to avoid this

// var methods = {
//     eat: function () {
//         console.log(this.name)
//     },
//     code: function () {
//         console.log(this.energy)
//     }
// }

// function person(name, energy) {
//     var person = Object.create(methods);
//     person.name = name;
//     person.energy = energy;
//     return person
// }

// var obj = person("shubham", 12);
// console.log(obj)
// obj.eat()

// ------> to rewrite this

// function Person(name, energy){
//     this.name = name;
//     this.energy = energy;

//     Person.prototype.eat = function(){
//         console.log(this.name)
//     }
//     Person.prototype.code = function(){
//         console.log(this.energy)
//     }
// }

// var obj = new Person("shubham" , 12);
// console.log(obj)
// obj.eat();



// function rectangle (width, height){
//     this.width = width;
//     this.height = height;
// }
// rectangle.prototype.area = function(){
//     return this.width * this.height
// }

// var box = new rectangle(10,30);
// console.log(box.area())

// 9. clasees ---------------------------------------------------------------------------->
// class Rectangle {
//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//     }
//     area() {
//         return this.width * this.height
//     }
// }

// var box = new Rectangle(10,30);
// console.log(box);


// 10. BIGINT ---------------------------------------------------------------------------->
// var num = 2n**53n - 1n;
// console.log(num)
// console.log(num+2n)    

// 11 .---------------------------------------------------------------------------->
// const fun1 = ()=>{
//     console.log("fun1 is starting")
//     fun2()
//     console.log('fun1 is ending')
// }

// const fun2 = ()=>{
//     setTimeout(() => {
//         console.log("fun2 is starting")
//     }, 3000);
// }

// fun1()


// 12.---------------------------------------------------------------------------->

// var arr = [1, 2, 3, 4, 5];
// for (var i = 0; i < arr.length; i++) {
//     setTimeout((i) => {
//         console.log(arr[i])
//     }, i * 1000, i)
// }

// 13.---------------------------------------------------------------------------->
// var arr = [11,12,13,14,15];
// for (ele of arr){
//     console.log(ele)
// }  
//  output---> 11,12,13,14,15

// var arr = [11,12,13,14,15];
// for (ele in arr){
//     console.log(ele)
// }   
// output---> 0,1,2,3,4

// var arr = [11,12,13,14,15];
// for (ele in arr){
//     console.log(arr[ele])
// }  
//  output---> 11,12,13,14,15

// var obj = {
//     name: "shubham",
//     age: 40
// }
// for(var key in obj){
//     console.log(key, obj[key])
// }   
// output---> name shubham
// age 40

// ---------------------------------------------------------------------------->
// function checkEle(...args){
// console.log(args) ---> output ---> [10,20]
// }
// checkEle(10,20)  


// closure---------------------------------------------------------------------------->
// a closure gives you access to an outer function's scope from an inner function
// var val = "suraj";
// function outer(){
//     val = "shubham";
//    function inner(){
//         console.log(val)
//     }
//     val = "Vicky"
//     return inner()
// }
// var c2 = outer();
// c2()


// debouncing ---> function is call after specific period of inactivity---------------------------------------------------------------------------->

// function makeApiCall (){
//     console.log("API call in progress");
// }
// function debouncer(makeApiCall, delay){
//    var debouncing;
//    return function(){
//     debouncing && clearTimeout(debouncing);
//     debouncing = setTimeout(()=>{
//     makeApiCall.call(this,arguments);
//     },delay)
//    }
// }

// document.getElementById("botton").addEventListener("click", debouncer(makeApiCall, 3000));


// Throtling---------------------------------------------------------------------------->
// if event is coninuously firing then it call the function continusoly after fixed interval i.e delay
// function makeApiCall() {
//     console.log("API call in progress");
// }



// destructuring ---------------------------------------------------------------------------->
// object destructuring

// var obj = {
//     name:"shubham",
//     age:23,
//     city:"nagpur"
// }
// var{name,age, city} = obj
// console.log(name, age, city)

// array destructuring
// var arr = ["vicky", "nagpur", 21];
// var [name, city, age, ] = arr
// console.log(name, city, age)

// var arr = [{
//     name: "shubham",
//     age: 23,
//     city: "nagpur"
// },{
//     name: "vicky",
//     age: 21,
//     city: "mumbai"
// }]

// var [{name, age, city}] = arr
// console.log(name,age,city)



// ---------------------------------------------------------------------------->
//User online or offline

// if(navigator.onLine){
//     console.log("Yes")
// }
// else{
//     console.log("No")
// }

// ---------------------------------------------------------------------------->
// Sorting
// var arr = [2,3,5,1,7,8,10];
// arr.sort((a,b)=>a-b)
// console.log(arr)

// var brr = [{
//     name: "abhi",
//     age: 23
// }, {
//     name: "dbhi",
//     age: 21
// }, {
//     name: "dbhi",
//     age: 19
// }, {
//     name: "bbhi",
//     age: 18
// },]

// brr.sort((a,b)=>a.name > b.name ? 1 : a.name < b.name ? -1 : a.age > b.age ? 1: a.age < b.age ? -1 : 0)
// console.log(brr)


// brr.sort((a,b)=>a.age-b.age)
// console.log(brr)

// brr.sort((a,b)=>a.age > b.age ? 1 : a.age < b.age ? -1 : 0);
// console.log(brr)

// brr.sort((a,b)=>a.name>b.name?1:a.name<b.name?-1:0);
// console.log(brr)

// brr.sort((a,b)=> a.name>b.name ? 1: a.age < b.age ? -1 :0)
// console.log(brr)



// <-------------------------------------------basic DSA javascript------------------------------------------->

// 1. reverse the string ---------------------------------------------------------------------------->

// // simple way 
// var str = "shubham"; 
// var rev = "";
// for(var i = str.length - 1; i >= 0; i--){
//     rev += str[i]
// }
// console.log(rev)

// convert string to array
// var str = "shubham"; 
// var arr = str.split("");
// console.log(arr)

// convert string to array

// var str1 = arr.join("");
// console.log(str1)

// var str = "shubham";
// var rev = str.split("").reverse().join("");
// console.log(rev)

// find the logest word  in the sentence---------------------------------------------------------------------------->

// var str = "i love coding in javascript";

// var arr = str.split(" ");
// console.log(arr)
// var ref = "";
// for(word of arr){
//     if(word.length > ref.length){
//         ref = word;
//     }
// }
// console.log(ref)



// write the function to remove duplicate element in the array---------------------------------------------------------------------------->
// var arr = [1,2,2,3,7,7,3,4,5];
// arr.sort();
// for(var i = 1; i < arr.length; i++){
//     if(arr[i] === arr[i-1]){
//        arr.splice(i,1)
//     }
// }
// console.log(arr)


// var brr = [];
// for(var i = 0; i < arr.length; i++) {
//     if(brr.indexOf(arr[i]) == -1){
//         brr.push(arr[i]);
//     }
// }
// console.log(brr)

// function RemoveDuplicates(arr){
// // convert the array to a Set which allow only unique values
// // convert set back to an array
// var newarr = new Set(arr)
// console.log(newarr)
// var finalarr = [...newarr]
// console.log(finalarr)
// return finalarr;
// // OR
// // return [...new Set(arr)]
// }
// console.log(RemoveDuplicates(arr))



// ----------------------------------------------------------------------------------------------------->



// ----------------------------------------------------------------------------------------------------->

// write the function that check two strings are anagram or not

// var str1 = "silent";
// var str2 = "listen";

// function isAnagram(str1, str2) {
//       var s1 = str1.split("").sort().join("");
//       var s2 = str2.split("").sort().join("");
//       return s1===s2
// }
// console.log(isAnagram(str1, str2))

// ----------------------------------------------------------------------------------------------------->

// difference between array.splice and array.slice

// 1. array.splice()   --->
// At position 2, add 2 elements:

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 0, "Lemon", "Kiwi");
// console.log(fruits)

// At position 2, remove 2 items:    --> use to delete item from cart 
// const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
// fruits.splice(2, 2);
// console.log(fruits)

// 2.array.slice()   ---> use in Add to cart
// Array.slice() returns selected array elements as a new array:

// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(1, 3);
// console.log(citrus)
// output--->  ['Orange', 'Lemon'];

// ----------------------------------------------------------------------------------->
// Higher order functions

// function higherOrderFunction(callback) {
//     console.log("Inside higherOrderFunction");
//     callback();
//   }

//   function callbackFunction() {
//     console.log("Inside callbackFunction");
//   }

//   // Pass callbackFunction as an argument to higherOrderFunction
//   higherOrderFunction(callbackFunction);


//   function higherOrderFunction(callback) {
//     // Perform some operations
//     console.log("Inside higherOrderFunction");
//     // Call the callback function
//     callback();
//   }

//   function callbackFunction() {
//     console.log("Inside callbackFunction");
//   }

//   // Pass callbackFunction as an argument to higherOrderFunction
//   higherOrderFunction(callbackFunction);

function handlechange(){
    document.getElementById("showrange").textContent = document.getElementById("range").value
}
const handleClick = (e)=>{
    e.preventDefault();
    var value = document.getElementById("range").value;
    console.log(value)
}
document.getElementById("botton").addEventListener("click", handleClick);







function vicky() {
    console.time("time")
    // Code to be measured
    var sum = 0;
    for (var i = 0; i < 1000000; i++) {
        sum += i;
    }
    console.timeEnd("time")

    // Stop the timer and log the elapsed time
}
vicky();



// arr_url = [
//     "https://dummyjson.com/products/1",
//     "https://dummyjson.com/products/2",
//     "https://dummyjson.com/products/3",
//     "https://dummyjson.com/products/4",
//     "https://dummyjson.com/products/5",
// ]

// async function fetchData(url){
//    try {
//      var res = await fetch(url);
//      var data = await res.json()
//      return data;
//    } catch (error) {
//      console.log(error)
//    }
// }

// async function fetchMultipleApi(urls){
//   var response = urls.map((url)=>fetchData(url));
//   var allPromises = await Promise.all(response);
//   return allPromises
// }
// fetchMultipleApi(arr_url)
// .then((res)=>console.log(res))
// .catch((err)=>console.log(err))


    