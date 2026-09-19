let char="33"

let num=Number(char)
console.log(num)
/*
"33"=> 33
"33a" => NaN
true => 1 ; false => 0
undefined => NaN
null=0
*/

let guess=1
let str=Boolean(guess)
console.log(str);

//null=> false
//"" => false; "add " or " " => true

console.log(undefined==0) //false
console.log(undefined>=0) //false
console.log(undefined=>0) //[Function (anonymous)]

console.log("2"==2) //true
console.log("2"===2) //false because it uses strict operator i.e ===

console.log(null==0) //false

console.log(null<0)  //false
console.log(null<=0)  //true
