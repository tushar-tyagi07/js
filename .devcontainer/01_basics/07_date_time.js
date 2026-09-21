const myDate=new Date()
console.log(myDate)
//console.log(typeof myDate) ->> object
//console.log(myDate.getTime())


//another way to create date
const now=new Date(2026,8,21) //by default month start by 0-january and 11-december
console.log(now.toLocaleDateString()) //only date

console.log(now.toLocaleString())  //date with time
console.log(now.toLocaleTimeString()) //only time