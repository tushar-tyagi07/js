const lang=['java','python','c++','javascript','ruby']
// in for each loop do not name a fuction

//lang.forEach( function(val){
    //console.log(val)
//} )

lang.forEach( (val)=>{
    //console.log(val)
})
lang.forEach( (val,index,arr)=>{
   // console.log( val, index, arr)
})

function printing(item){
    //console.log(item)
}
//lang.forEach(printing) // only give refrence of the function

const programming=[

    {langname:'java',
    filename:'.java'},
    {
    langname:'python',
    filename:'.py'},

    {langname:'javascript',
    filename:'.js'},

    {langname:'ruby',
    filename:'.rb'}
]
programming.forEach( (item)=>{
    console.log(`${item.langname} uses extention ${item.filename}`)
})