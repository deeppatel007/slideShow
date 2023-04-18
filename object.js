// const target = { a: 1, b: 2 };
// const source = { b: 4, c: 5 };

// const data = Object.assign(target, source);

// console.log(target);
// console.log(data)

// console.log("////")
// const obj = {
//     prop: 42
//   };
  
//   Object.freeze(obj);
  
//   obj.prop = 33;
//   obj.newData = 55
//   console.log(obj);


//   console.log("////")

//   const obj1 = {
//     prop: 42
//   };

//   Object.seal(obj1);
//   obj1.prop = 10
//   console.log(obj1);
//   obj1.newData = 1111;
//   delete obj1.prop
//   console.log(obj1)


//   console.log("/////")

//   const obj2 = {
//     prop: 42
//   };
// obj2.newData = 45;
//   console.log(obj2);
//   Object.preventExtensions(obj2);
//   obj2.prop = 12;
//   console.log(obj2);
//   obj2.final = true;
//   console.log(obj2);
//   delete obj2.prop
//   console.log(obj2);

//   console.log("////")

//   console.log(Object.keys(obj2));


//   //need to discuss  prototype 
  

//   let subject = {
//     topic: "javascript",
//     about: function () {
//       console.log("JS is amazing");
//     },
//   }; //base class
//   let course = {
//     __proto__: subject,
//     instructor: "professor",
//   }; //inherited from subject
//   let department = {
//     __proto__: course,
//     dept_name: "IT",
//   }; //inhserited from course
//   let student = {
//     __proto__: department,
//     id: 1,
//   }; // inherited from department
//   console.log(student.dept_name);
//   student.about()


// const name = {
//   first: "deep",
//   second: "patel",
//   yourName: function(city, state){
//      console.log(this.first +','+ this.second+','+ city + ','+ state);
//   }
// }

// name.yourName()

// const name2 = {
//   first: "a",
//   second: "b",
// }
// name.yourName.call(name2,"ahmedabad","gujarat")


// name.yourName.apply(name2,["mehsana","gujarat"]);

// let bindFun = name.yourName.bind(name2,"patan","gujarat");
// bindFun()


var data = {
  b : 10
}

var add = (a)=>{
  console.log(this.b);
  console.log(a + this.b);
}
add.call(data, 10)



