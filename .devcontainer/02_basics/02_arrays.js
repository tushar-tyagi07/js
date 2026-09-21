const batsman=["rs","sd","vk","kl","dhoni"]
const allrounder=["h.p","YUVI"]
const bowler=["bhumra","bhuvi","shami","shane"]

//if we use concat operation ,we can olny concat two at once
const X1=batsman.concat(bowler)
console.log(X1)

//another method to merger arrays by using spread operator
const playingX1=[...batsman,...allrounder,...bowler]
console.log(playingX1)

const random=[1,2,[3,4,[5,61,10],1],8,[99,100]]
//if we want only single array->> use flat()
const modify=random.flat(Infinity)
console.log(modify)

console.log(Array.isArray("TUSHAR"))
console.log(Array.from("TUSHAR")) //converts TUSHAR into an array
console.log(Array.from({name:"TUSHAR"})) //INTRESTING

//another way of creating array from elements
let stat1=100
let stat2=200
let stat3=300
console.log(Array.of(stat1,stat2,stat3)) //of returns a new array