//const obj1=new Object() //singleton Object

//non singleton->> 
const random={}
random.isLogedIn=false
random.name="xyz"
random.is18plus=true

//console.log(random)

const random2={
    gmail:"xyz@google.com",
    phone:12344,
    userName:{
        fullname:{
        first:"xy",
        last:"001"
    }
    } 
}
//console.log(Object.keys(random2))
//console.og(Object.values(random2))
//console.log(random2.userName.fullname) //-->> ?

const target={1:"a",2:"b",3:"c"}
const source={4:"d",5:"e"}

//const obj3={obj1,obj2}

/*Object.assign() copies all the values from two or many source to target and 
returns a modified target object */
//const obj3=Object.assign({},target,source) 

obj3={...target,...source}
console.log(obj3)

//console.log(Object.entries(random2))
//console.log(random2.hasOwnProperty('phone'))
//console.log(random2.hasOwnProperty('fullname'))



