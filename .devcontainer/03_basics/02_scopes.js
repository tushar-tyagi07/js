//var a=10
let b=20
const c=30
if(true){
    var a=100
    let b=200
    const c=300
}
//console.log(a) 
//console.log(b)
//console.log(c)

function one(){
    const username="Tushar"
    function two(){
        const website="github"
        console.log(username)
    }
    two()
    //console.log(website)
}

one()

//___________check. HOSTING------

addone(5)
function addone(num){
    return num+1
}

//addone(10)

//addtwo(10)
const addtwo=function(num){
    return num+2
}
addtwo(10)