const score=159

const total=new Number(333.458)
const amount=1000000000
//console.log(score)
console.log(total)
//console.log(typeof total) -> object
//console.log(total.toString.length)
console.log(amount.toLocaleString('en-IN')) //-> 1,00,00,00,000

//console.log(total.toPrecision(2))
//console.log(total.toFixed(2)) //333.46

//-------------MATH--------------------

/*
console.log(Math)   //Object [Math]{}
console.log(Math.random())  //Returns a pseudorandom number between 0 and 1.
console.log(Math.ceil(total))
console.log(Math.floor(total))
console.log(Math.abs(-333))
console.log(Math.max(3,4,5,9,10,11,44,555))
*/


//console.log(Math.floor(Math.random()*10+1)) //[1-10]

const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+1)+min))

