//  functions
/*
function addTwoNum(number1,number2){
    console.log(number1+number2)
}*/

function addTwoNum(number1,number2){
    //let res=number+number2
    //return res
    return number1+number2
}

const ans=addTwoNum(3,5)
//console.log("result is:", ans)

function isLogin(username){
    //we can also give bydefault value to username by writing username="byDefaultValue"
    if(!username){
        // !username ->> username === undefined
        return `Please! enter user name`
    }
    return `${username} is just logged in this system.`
}
//console.log(isLogin("Gyaspur AALa Tyagi"))
//console.log(isLogin(""))
//console.log(isLogin())

function score(...runs){
    return runs
}
//console.log(score(25,33,58,101,100))

const user={
    username:"TUSHAR",
    income:"3000k"
}

function find(inpu){
    return `hello my name is ${inpu.username}, i am earing ${inpu.income} anually.`
}
console.log(find(user))