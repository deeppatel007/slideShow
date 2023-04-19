
function query(){
 console.log('abc');
  }



const debounce = (func) => {
   let execute;
    return function() {
       clearTimeout(execute);
       execute = setTimeout(() => {
           func.apply();
       }, 1000)
     }
}

const optimization = debounce(query)
optimization()
optimization()
optimization()

setTimeout(()=>{
  optimization()
},2000)