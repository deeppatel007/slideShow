
// let x = 5;
// try {
//   x = y + 1;  
// }
// catch(err) {
//  console.log(err)
// }
// finally{
//     console.log("finally called")
// }

x = "abc"
try {
    if(x.trim() == "") throw "empty";
    if(isNaN(x)) throw "not a number";
    x = Number(x);
    if(x < 5) throw "too low";
    if(x > 10) throw "too high";
  }
  catch(err) {
   console.log(err)
  }

  try {
    decodeURI("%%%"); 
  }
  catch(err) {
  console.log(err)
  }

  // refrance error if variable not declered 
  // type error is variable while performing string operations to integer re initilizing value of const etc.
  // syntex error bracket start but not end like that error.
  //URI error url is not proper like "%%%" .