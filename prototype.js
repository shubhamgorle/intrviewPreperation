"use strict"


let a = 10;
console.log(a);
// function person (name,energy){

//     var person = {};
//     person.name = name;
//     person.energy = energy;


//     person.eat  = function(energy){
//         console.log(this.name,'is eating')
//         this.energy += energy
//     }


//     person.sleep = function(energy){
//         console.log(this.name,'is sleeping')
//         this.energy += energy
//     }


//     person.code = function(energy){
//         console.log(this.name,'is coding')
//         this.energy -= energy
//     }
//     return person;
// }
// var sai = person("sai",15)
// var jay = person("jay",12)

// console.log(sai) 
// when we calling fuction person for every call indirectly we are calling
// eat, sleep, code function every time unneccesarrily. which takes extra space & memory
// which is not desirable at all.
// console.log(jay)

// sai.code(15)


// to avoid this ------------------------------------------------>

var personMethods = {
    eat: function (energy) {
        console.log(this.name, 'is eating')
        this.energy += energy
    },
    sleep: function (energy) {
        console.log(this.name, 'is sleeping')
        this.energy += energy
    },
    code: function (energy) {
        console.log(this.name, 'is coding')
        this.energy -= energy
    }
}

function person(name, energy) {
    // var person = {};   instead of this we can create the person object like
    var person = Object.create(personMethods)
    // now we will not have unneccessary methods in every call
// but to access this javascropt has inbuild term .ie prototype
    person.name = name;
    person.energy = energy;
    //  person.eat=personMethods.eat
    //  person.sleep=personMethods.sleep
    //  person.code=personMethods.code
    return person;
}

// var sai = person("sai",15)
// var jay = person("jay",12)


// to rewrite this -------------------------------------------------->



// function Person(name, energy) {
//     // var person = Object.create(Person.prototype)
//     ths.name = name;
//     this.energy = energy;
//     // return person;
// }
// Person.prototype.eat = function (energy) {
//     console.log(this.name, 'is eating')
//     this.energy += energy
// }
// Person.prototype.sleep = function (energy) {
//     console.log(this.name, 'is sleeping')
//     this.energy += energy
// }
// Person.prototype.code = function (energy) {
//     console.log(this.name, 'is coding')
//     this.energy -= energy
// }
// var sai = new Person("sai",15)
// var jay = new Person("jay",12)
// console.log(sai)
// console.log(jay)



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






// function Rectangle(height,width){
//     this.width = width;
//     this.height=height
// }

// Rectangle.prototype.area = function(){
//     return this.width + this.height
// }

// let box = new Rectangle(5,10)
// console.log(box.area())

// same this we can build using classes.

// class Rectangle{
//     constructor(height,width){
//         this.height = height
//         this.width = width
//     }
//     area(){
//         return this.height + this.width
//     }
// }

// let box = new Rectangle(5,10)
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
//     setTimeout(() => {
//         console.log("fun2 is starting")
//     }, 3000);
// }

// fun1()

// var arr= [1,2,3,4,5];
// for(var i = 0; i<arr.length; i++){
//     setTimeout(() => 
//         console.log(arr[i]), i*1000);
// }

// In the given code snippet, the issue is related to the scoping of the variable i inside 
// the setTimeout callback function. The setTimeout function is asynchronous, meaning that 
// the callback function will execute after the specified delay, while the loop continues executing immediately.
// By the time the first callback is executed, the loop has already completed, and the value of i has reached the value arr.length. 
// At this point, arr[i] is arr[arr.length], which is undefined since the last index of the array is arr.length - 1. Therefore, 
// you are seeing "undefined" being printed.

// To fix this issue, you can use a closure to capture the value of i for each iteration. One way to achieve 
// this is by using a separate function and passing the value of i as an argument. Here's an updated version
//  of your code that should work as expected:


///