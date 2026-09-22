//there are two ways to declare a objects
//1. as a litrals
//2. as a constructor i.e Object.create ->> singleton

const mysym=Symbol("welcome")


 const user={
    name:"Tushar",
    "full name":"Tushar Tyagi",
    // mysym:"welcome" ->> here it is not used as symbol
    [mysym]:"welcome!",

    mail:"xyx@gmail.com",
    gender:"male",
    age:21,
    lastLogin:["Monday","Saturday"]
}
user.mail="xys@google.com"
//Object.freeze(user)
//user.mail="avc@mail.com" //can't change bcz we freeze our user object
//console.log(user)


//ways to retrive values
console.log(user.name) //not a good way bcz can't access full name
 
console.log(user["mail"])

//console.log(user[mysym])
user.greeting=function(){
    console.log(`Ram Ram JI, i am ${this.name} and i am ${this.age} years old.`)
    //use this to give refrence of current obj name and age
}
console.log(user.greeting)  //it gives funcn refrence i.e ->> [Function (anonymous)]
console.log(user.greeting())
