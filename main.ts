//typescript specific
let hello:any="hello"

//in javascript
var hi="hi"

let abc= 'another'

function f(input:boolean){
  let a=100
  if(input){
    let b= a+100012
    return b;
  }
  return a;
}

console.log(f(true))
console.log(f(false))
