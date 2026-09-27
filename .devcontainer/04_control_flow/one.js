// if, else if , else
let a=3
let b=4
if(a>b){
    let power="xz"
    //var power="avc"
   console.log(`${a} is greater than ${b}`)
}
else if(a<b){
    console.log(`${a} is less than ${b}`)
}
else{
    console.log(`${a} is equal to ${b}`)
}
//console.log(power)

// Nullish coalescing operator (??) : null undefined

let val1;
//val1=1 ?? 10
//val1=null??22
//val1=undefined??2
val1=null ?? 2 ?? 3

console.log(val1)

// Ternary Operator-->> condition ? true : false

const num1=2
a>=0 ? console.log(`${num1} is positive`) : console.log(`${num1} is negative`)

