//Arrays are the objects
//In js Arrays are resizable.
//we can access array elements by using index i.e starts from 0
//JS array -copy operations create shallow copies rather than deep copies
let myarr=[0,1,2,3,"a"]
//console.log(myarr)
myarr[2]=5
myarr.push(6)
//console.log(myarr)

myarr.unshift(9) //unshift add the element at the 0th index
console.log(myarr)
console.log(myarr.includes(5))

console.log(myarr.indexOf("a")) //if element is not in the array it returns -1


myarr.shift() //shift removes the element at the 0th index
console.log(myarr)

const newarr=myarr.join()
console.log(myarr)
console.log(newarr)
console.log(typeof newarr) //by using join() it changes array to string

//----slice and splice------

const myn1=myarr.slice(0,3)
console.log("A ", myarr)
console.log(myn1)

const myn2=myarr.splice(0,3) //it it fot splice(1,3)
console.log("B" ,myarr)  //by using splice, myarr manupilates [3,'a,6]
console.log(myn2) //[0,1,2,5]
