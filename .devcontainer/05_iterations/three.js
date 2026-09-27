// for of
const arr=[1,2,3,4,5]
for(const val of arr){
  //  console.log(val)
}

const random="Hello World!"
for(const str of random){
    //if(str==" ") continue;
   // console.log(str)
}

// Map ->> does not contains duplicate values
const map=new Map()
map.set(1, "India")
map.set(2,"USA")
map.set(3,"denmark")
map.set(4,"Finland")
map.set(5,"Switzerland")

//console.log(map)
for(const [key,value] of map){
   // console.log(key," -- ", value)
    //console.log(value)
}


const myobj={
    "ind":"hockey",
    "eng":"cricket",
    "canada":"ice-hockey",
    "jap":"Sumo"
}

for(const [country,sport] of myobj){
    console.log(sport)
}
//objects are not iteratable