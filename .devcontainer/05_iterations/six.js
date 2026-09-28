//const lang=['a','b','c','d','e']

//const res=lang.forEach( (val)=>{
   // console.log(val)
//})

//console.log(res)

const mynum=[1,2,3,4,4,5,8,7,9,0]
//const newnums=mynum.filter( (num)=> num>=4)
const newnums=mynum.filter( (num)=>{
    return num>=4
})
console.log(newnums)