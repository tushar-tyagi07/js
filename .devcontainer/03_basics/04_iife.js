// Imediately invoked function expression
/* It's syntax-->
                (function defination)();
                 second paranthesis is for function execution call
                 always ends with ;    */
(function getsgo(){
    // named iife
    console.log(`DB connected`)
})();

((name)=>{
    //un-named iife
    console.log(`db2 is connected`)
    console.log(`Hi, ${name}`)
})("Tushar");
