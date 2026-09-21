// based on the how we store and retrive data efficiently data types are of 2 types :--
//  (1.) Primitive (non refrence data types):-
//         there are of seven types :- String, Number, Boolean, null, undefined,Symbol,BigInt

// (2.) Non Primitive (reference data type):-- Array, Objects, Functions

/*js is a dynamically typed language bcz (no explicit types) you didnot 
  declare a data type when you create a variable */

  const str1="123"
  const str2="123"
   
  console.log(str1===str2)
  //but by using Symbol
   
  const random1=Symbol(12345)
  const random2=Symbol(12345)

  console.log(random1===random2)
  //console.log(typeof random1) -> symbol

  let temperature=undefined //null  
  console.log(typeof temperature)  //data type of null -> object & undefined->undefined


  //------------------------------------------

  // memory types-> stack(changes in the copy of a variable)-> stores primitive
  // heap (directly gaives the reference of the variable)-> non primitive
   
  let num1=1234
  let num2=num1
  console.log(num2)
  num2=098
  console.log(num2)

  //but 
  let function1={
      gmail:"xyz@gmail.com",
      phone:1233
  }
  let function2=function1
  function2.gmail="tushar@google.com"
  console.log(function2.gmail) //by changing the gmail of function2 ,function1 gmail
                               // also changes

  console.log(function1.gmail)
  //console.log(typeof function1)-> object


   