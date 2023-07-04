
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
var num = 2n**53n - 1n;
console.log(num)
console.log(num+2n)
