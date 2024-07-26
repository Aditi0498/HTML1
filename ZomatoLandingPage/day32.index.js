console.log("Hello World");
 var age = 20;
 var name = "Aditi"
  console.log("My age is",age);
 console.log("My name is", name);
 console.log("My name is",name,"and my age is",age)

 console.log("Objects:")
 var obj1 = {
    name: "Aditi",
    age: 20,
    isAdult: true,
    company:"DT"
}

 console.log(obj1.isAdult)
 console.log(obj1)
 console.log(obj1.company)


 console.log("Arrays:")
 var arr1 = ["Aditi", 20, true, "DT" ];
 console.log(arr1)
 console.log(arr1[3])
 console.log(arr1[2])

 //js hosting
 abc = 123;
 abc += 2;

 var abc;
 console.log(abc);


 //NULL
 var demoForNull = null;
 console.log(demoForNull);

 //UNDEFINED
 var demoForUndefined;
 console.log(demoForUndefined);

 var data = "rOhaN KiNnAl"
 console.log(data);
 console.log(data.toLowerCase());
 console.log(data.toUpperCase());
 console.log(data.length);

 var rk1 = 12;
 console.log("before update" , rk1);
 var rk1 = 25;
 console.log("after update" , rk1);

//  const vk = 12;
//  console.log("before update" , vk);
//  const vk = 25;
//  console.log("after update" , vk);

console.log("Day 34 JS Strings and Object Manipulations");

//slice
console.log( "slice:" , data.slice(2,7));

var sentence = "Javascript is really  amazing";
console.log("before change:", sentence);
 
var sentence = sentence.replace("Javascript","Aditi");
console.log("after change:", sentence);
console.log(sentence.includes("amazing"));
console.log(sentence.includes("rk"));

var name = "Colin Bridgerton";
console.log(name.split("i"));

//js operators
//=, +, -, *, /, %
// a+b=a || a+=b
// a-b=a || a-=b

// a*b=b || b*=a

// Increment ++ (a=a+1)
// a++
//Post increment n Pre increment
// a++         n     ++a

//Decremnet -- (a=a-1)
// a--
//Post decrement n Pre decrement
// a--       n     --a/


var a = 123;
console.log(++a);
console.log(a);
 console.log(a++);
 console.log(a);

 // comparison operators
 // ==, ===, !, !=, !==, >, <, >=, <=

 var xyz1 = 123;
 var xyz2 ="123";

console.log("== :", xyz1==xyz2);
console.log("=== :", xyz1===xyz2);

let ourObject = {
       name : "Aditi",
       age : 20
}

console.log(ourObject);
console.log("keys:" ,Object.keys(ourObject));
console.log("values:" ,Object.values(ourObject));
console.log("entries:" ,Object.entries(ourObject));

ourObject.age = 21;
ourObject.gender = "female";
console.log(ourObject);


console.log("Day 35 JS Functions & Array Methodologies");

//1.Named Functions:-
// function addOne(){

//}
// calling:- addOne()

// 2.Anonymous Functions:-
// var abc= function (){

//}
// calling:- abc()

// 2.Arrow Functions:-
// var xyz = () => {

//}
// calling:- xyz()

// example:-
// var obj {
//  name: "aditi",
//  abc :() => {   / abc: function () {}

//     }    
//}

//Array
var ourArray = [1, 2, 6, 5, 3, 4]
 
//1. Map
var ArrMap = ourArray.map((Data)=>{
       return Data +10;
})
console.log(ArrMap);

//2.Filter
var ArrFilter = ourArray.filter((Data)=>{
       return Data<4
})
console.log(ArrFilter);

//var ArrFilter = ourArray.filter((Data)=> Data<4)

//var ArrFilter = ourArray.filter((Data)=>{
//   if(Data < 4){
//       return Data;
//    } 
//})

//3. Find
var result = ourArray.find((Data)=> Data<4);
console.log(result);

var result = ourArray.find((Data)=> Data>4);
console.log(result);

// 4. Reduce
var TotalPrice = ourArray.reduce((Accumulator,CurrentValue)=>{
       return Accumulator + CurrentValue;
}, 0);
console.log(TotalPrice);
// Accumulator will be something 0 and current value means it will iterate and sum all values


console.log("Day 36 Promises, Async-Await, Try-Catch, setTimeOut in JS");


const eKart = [
       {
              price: 100,
              quantity:2,
       },
       {
              price: 400,
              quantity:1,
       },
       {
              price: 250,
              quantity:3,
       },
       {
              price: 100,
              quantity:1,
       }
]

const totalMrp = eKart.reduce((accumulator, currentValue)=> {
               return accumulator+currentValue.price * currentValue.quantity
}, 0);
console.log("Total MRP : ", totalMrp)

//Promises
// It is an object that returns a value that we hope to recieve in the future but not immediately
// Pending Stage
// FullFill/Resolved
// Rejected
 
// Syntax: var myPromise = new Promise ((res, rej)=>{})

       //PROMISES
       var myPromise = new Promise ((res,rej)=>{
              setTimeout(function(){
              res("Success");
                },5000)    //due to delay of 5sec we'll get rej bloock instead of res
  
          


              rej("Error Occured :-(")
       })

       myPromise.then((data)=>{
              console.log(data)
              })
       .catch((err)=> {
              console.log(err)
       })

     setTimeout(function(){
       console.log("Hello Aditi :-)")
     },2000)

 const getMyPromise = async () =>{
       try{
              const getResult = await myPromise;
              console.log(getResult);
            }catch(err){
              console.log(err)

            }
 }
    