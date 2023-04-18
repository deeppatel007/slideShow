let queue = [];

function execute(){
   let n = 2;
    while(n!=0){
        if(queue.length>0){
            console.log(queue[0]+' event excuted');
            queue.shift();
        }
        n--;
    }
    if(queue.length==0){
        clearInterval(throttel);
    }
}
function call(input){
    queue.push(input);
}
var throttel = setInterval(()=>{
    execute();
},2000)

call(1);
call(2);
call(3);
call(4);

setTimeout(()=>{
    call(5);
},3000)