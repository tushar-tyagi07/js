const useremail=1     //also check for null,undefined, "" , [], {}
if(useremail){
    console.log(`userEmail is ${useremail}`)
}
else{
    console.log("fill your email address")
}


/*falsey values-->>
                 false, 0, null, undefined ,-0, 0n, "" , NaN
      REST are truthy values */
 
const obj1={}

if(Object.keys(obj1).length===0){
    console.log("it is an empty object")
}