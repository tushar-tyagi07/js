const user={
    username:"Tushar",
    charge:999,
    popup:function(){
        console.log(`${this.username}, Welcome you have to pay ${this.charge}`)
        //console.log(this)
    }
}
//user.popup();
//user.username="t.t.G"
//user.popup();
//console.log(this)

//function one(){
//    let name="tushar"
//    console.log(this.name)
    //console.log(this)
//}

//one()

//const one=function(){
 //   let name="tushar"
 //   console.log(this.name)
//}
//one()

//Arrow func
//basic syntax, () => {}

const one = () => {
    name="tushar"
   // console.log(this.name)
    console.log(this)
}
//one()

//const addTwo= (Number1,Number2)=>{
    // EXPLICIT RETURN---> if curly braces is used,then use return keyword
//    return Number1+Number2
//}
//console.log(addTwo(3,5))

// implicit return , if you didn't want to use return keyword,then use paranthesis to wrrap the result
//const addTwo=(Number1,Number2) => (Number1+Number2)

const addTwo =(Number1,Number2) => ({show:"tushar"})
//console.log(addTwo(3,4))

