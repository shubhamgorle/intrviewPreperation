const apiEndpoints = [
    'https://dummyjson.com/products/1',
    'https://dummyjson.com/products/2',
    'https://dummyjson.com/products/3',
];

// async function fetchData(url){
// try {
//     var data = await fetch(url);
//     return await data.json();
// } catch (error) {
//      console.log(error)
// }
// }

// async function fetchAllAPis(apis){
//  try {
//     var allpromise =  apis.map((url)=>fetchData(url));
//     var allData = await Promise.all(allpromise)
//     return allData
//  } catch (error) {
//  }
// }


// fetchAllAPis(apiEndpoints)
// .then((res)=>console.log(res))
// .catch((err)=>console.log(err));

// var company = {
//     pay:(()=>console.log("pay salary to the employe"))
// }
// var employe = {
//     work:(()=>console.log("work for a company"))
// };
// company.__proto__ = employe;
// company.work()


// var jethalal = {
//     wife:"daya",
//     food:"jlwbi fafda",
//     state:"gujrat"
// }
// var bide = {
//     wife:"madhvi",
//     food:"pohe",
//     state:"maharashtra"
// }
// function popatlal(drink, c){
//     console.log(`${this.wife} will cook ${this.food} for popatlal, ${c}`)
// };
 
// let c = popatlal.bind(jethalal);
// c()




// function reactangle(width, height){
//     this.width = width;
//     this.height = height
// }

// reactangle.prototype.area = function(){
//     return this.width*this.height
// }

// let box1 = new reactangle(10,20);
// console.log(box1.area())

// class Rectangle{
//     constructor(width, height){
//     this.width = width;
//     this.height = height;
//     }
//     area(){
//         return this.width*this.height
//     };
// }
// let box2 = new Rectangle(20,20);
// console.log(box2.area())

// function makeapicall(){
//     console.log("api is called")
// }
// function debouncer(makeapicall, delay){
//  var debouncer;
//  return function (){
//      debouncer && clearTimeout(debouncer)
//     debouncer = setTimeout(() => {
//         makeapicall(this, arguments)
//      }, delay);
//  }
// }
// document.getElementById("botton").addEventListener("click", debouncer(makeapicall, 3000))
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
// function debouncer(makeApiCall, delay) {
//     var lastcall = 0;
//     return function() {
//           if(Date.now() - lastcall > delay){
//              lastcall = Date.now();
//              makeApiCall.call(this,arguments)
//           }
//     }
// }
// document.getElementById("botton").addEventListener("click", debouncer(makeApiCall, 1000));

// Sorting
var arr = [2,3,5,1,7,8,10];
arr.sort((a,b)=>b-a)
// console.log(arr)


var brr = [{
    name: "abhi",
    age: 23
}, {
    name: "zbhi",
    age: 21
}, {
    name: "abhi",
    age: 21
}, {
    name: "bbhi",
    age: 18
},]

brr.sort((a,b)=> a.age > b.age ? 1 : a.age < b.age ? -1 : a.name > b.name ? 1 : a.name < b.name ? -1 : 0 );
// console.log(brr)

var str = "shubham"; 
// console.log(str.split('').reverse().join(''));

var str = "i love coding in javascript";

 var str_arr = (str.split(" "));

 var max_str = "";
 str_arr.map((ele)=>{
    if(ele.length > max_str.length){
         max_str = ele
 }
})

console.log(max_str);


// var arr = [1,2,2,3,7,7,3,4,5];

function myFunction() {
    // Start the timer with label 'myFunctionTime'
    console.time('myFunctiontime');

    // Code to be measured
    var sum = 0;
    for (var i = 0; i < 1000000; i++) {
        sum += i;
    }

    // Stop the timer and log the elapsed time
    console.timeEnd('myFunctiontime');
}

// Call the function to measure its processing time
myFunction();


document.addEventListener('onload', function() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"][name="option"]');
    console.log(checkboxes)
    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
            // Uncheck all checkboxes except the one that was just checked
            checkboxes.forEach(function(cb) {
                if (cb !== checkbox) {
                    cb.checked = false;
                }
            });
        });
    });
});
function myfunc(){
    var checkYes = document.getElementById("yes");
    console.log(checkYes)
    var checkNo = document.getElementById("no");
    console.log(checkNo.checked)
}

var checkYes = document.querySelectorAll('.yes');
    console.log(checkYes)
document.addEventListener('DOMContentLoaded', (event) => {
    const checkboxes = document.querySelectorAll('.single-checkbox');
console.log(checkboxes)
    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener('change', function(){
            if (this.checked) {
                checkboxes.forEach((cb) => {
                    if (cb !== this) {
                        cb.checked = false;
                    }
                });
            }
        });
    });
});
