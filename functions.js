
// // first class function function is treated as variable 
// const sum = (a, b) => {
//     return (a  + b);
// }
// console.log(sum(10,20));

// // higher order functions : A higher order function is a function that takes one or more functions as arguments, or returns a function as its result.

// function b(){
//     console.log("b is called")
// }

// function a(fun){
//     console.log("higher order function")
//     fun();
//     return function c(){
//         console.log("returned");
//         return "inner function call"
//     };
// }
// console.log(a(b)())

// // closer we can acces variable declare in outer function 
// function makeFunc() {
//     const name = "deep";
//     function displayName() {
//       console.log(name);
//     }
//     return displayName;
//   }
  
//   const myFunc = makeFunc();
//   myFunc();


//   function add(x) {
//     return function (y) {
//       return x + y;
//     };
//   }
//   const fir = add(10);
//   console.log(fir(20));

// we can't initiate arrow function before it declaration but we can 
// initate normal function before initilizatoin  
// add(1,2);
// // sum(2,3);
// function add(a,b){
//   console.log(a+b);
// }

// const sum = (a,b) =>{
//   console.log(a+b);
// }

// function abc(){
//   console.log(arguments);
// }
// abc(1,2,3)

// const xyz = ()=>{
//   console.log(arguments);
// }
// xyz(1,2,3);

// In a traditional function, its internal this value is dynamic, it depends on how the function is invoked
// arrow functions don’t have their own this binding. If we access this in the arrow function it will return the this of the closest non-arrow parent function.
// const data = {
//   name: "deep",

//   getName: function(){
//     console.log(this.name);
//   } 

// }

// data.getName()

// const newData = {
//   name: "new",
//   getName: ()=>{
//     console.log(this.name);
//   }
// }
// newData.getName()

// duplicate argument name not allowed in arrow function




// . In other words, a closure gives you access to an outer function's scope from an inner function. 
// function makeFunc() {
//   const name = "Deep";
//   function displayName() {
//     console.log(name);
//   }
//   return displayName;
// }

// const myFunc = makeFunc();
// myFunc();

// if (Math.random() > 0.5) {
//   let x = 1;
// } else {
//   let x = 2;
// }

// console.log(x);

// if (Math.random() > 0.5) {
//   var y = 1;
// } else {
//   var y = 2;
// }
// console.log(y);