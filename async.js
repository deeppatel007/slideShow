// const promiseA = new Promise((resolve, reject) => {
//     resolve(777);
//   });
//   // At this point, "promiseA" is already settled.
//   promiseA.then((val) => console.log("asynchronous logging has val:", val));
//   console.log("immediate logging");



// function timeout() {
//     return setTimeout(() => 'timeout done', 5000)
// }

async function timeout (){
    return new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve('timeout done')
    },5000)
})
}

console.log( timeout());


//   const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('foo');
//     }, 300);
    
//   });
  
//   promise1.then((value) => {
//     console.log(value);
//     // Expected output: "foo"
//   }).catch((err)=>{
//     console.log(err);
//   });
  
//   console.log(promise1);

// function fc(){
//     console.log("deep");
//     return 1;

// }
// async function asyncCall() {
//     console.log('calling');
//     const result = await fc();
//     console.log(result);
//     // Expected output: "resolved"
//   }
  


//   asyncCall();
//   console.log("data")


function f1(){
    setTimeout(()=>{
        console.log("f12000");
    },2000)
    
}
function f2(){
    setTimeout(()=>{
        console.log("f23000");
    },3000)
}

async function call(){
     await f1();
     await f2();

}
call()