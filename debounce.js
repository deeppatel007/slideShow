
let prev = "";
let execute;
function startExecuation(input){
    execute =  setTimeout(()=>{
        console.log("executed " + input);
    },1000);
}
function change(input){

    if(prev==""){
        prev = input;
        startExecuation(input);
    }
    else if(prev!=input){
        clearTimeout(execute);
        startExecuation(input);
    }
}


change("a");
change("b");
setTimeout(()=>{
    change("c");
},2000)




