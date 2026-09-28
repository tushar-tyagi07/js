const mynums=[1,2,3,4,5,7,9]
//const newnum=mynums.map( (num)=> num+4)

//chaining

const newnum=mynums
            .map( (num)=> num*10)
            .map( (num)=> num/10)
            .filter( (num)=> num>=4)
console.log(newnum)            
