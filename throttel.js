
function excute(){
    console.log("function called");
}

function throttle(fun){
    let flag = true;

  return function(){  
    if(flag){
         fun();
         flag = false;
         setTimeout(()=>{
            flag = true;
         },1000);
    }
}
}

const callFun = throttle(excute);

callFun()
callFun()
callFun()

setTimeout(()=>{
    callFun();
},2000)

