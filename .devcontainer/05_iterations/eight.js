const nums=[1,2,3]

//const total=nums.reduce( function(acc,currentValue){
   // console.log(`accumlator : ${acc} and current value : ${currentValue}`)
    //return acc+currentValue
//},0)

const total=nums.reduce( (acc,currentValue) =>acc+currentValue,0)
console.log(total)