//ex1
let x = Math.floor(Math.random()*10)
let y = Math.floor(Math.random()*10)
var t = x+y
console.log(t)

//ex2
let a = Math.floor(Math.random()*10)
let b = Math.floor(Math.random()*10)
let ops = ["+","-","*","/"]
let op = ops[Math.floor(Math.random() * ops.length)]
let errors = [-2,-1,0,1,2,0,0]
let result

const operation = (a,b,op) => {
// console.log(`${a} ${op} ${b} =`)
if (op === "+"){
    // console.log(`${a} ${op} ${b} = ${a+b}`)
    result= a+b
}else if (op === "-"){
    result= a-b
}else if(op === "*"){
    result= a*b
}else if (op === "/")
    result= a/b
}
let r = operation(a,b,op)
    
// console.log(`${a} ${op} ${b} = ${result}`)

// let error = errors[Math.floor(Math.random() * ops.length)]
let error = Math.floor(Math.random()*5-2)
fakeResult = (result + error)
// console.log(error)
// console.log(`${a} ${op} ${b} = ${fakeResult}`)
var UserInput=prompt(`${a} ${op} ${b} = ${fakeResult} 
T/F ? `)
// if (UserInput=="T"){
//     if (fakeResult==result){
//         alert("Ban tra loi dung roi")
//     } else alert("Ban tra loi sai roi")
// }
// else{
//     if (fakeResult==result){
//         alert("Ban tra loi sai roi")
//     } else alert("Ban tra loi dung roi")}
let confirm
if(fakeResult==result){
    if(UserInput === "t"){
        confirm = "Right"
    }else confirm = "Wrong"
}else
    {if(UserInput === "t"){
        confirm = "Wrong"
    }else confirm = "Right"}

alert(confirm)

