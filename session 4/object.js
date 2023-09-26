// 1. Khởi tạo
// 1.1 Object rỗng
// let person = {}
// console.log(typeof(person))

// 1.2 Object có nhiều hơn 1 cặp property va value

// let person = {
//     name: "Tú Nguyễn",
//     age: 18,
//     location: "Hà Nội",
//     status: true,
//     lover: 3,
// }

// Read
// console.log(person.name)

// let userInput = prompt()
// console.log(person[userInput])
// console.log(person["age"])

// Create

// person.school = "Đại học Kiến Trúc"
// person["GPA"] = 2.5

// console.log(person)


// Update

// let userInput = prompt("sửa phần nào")
// person[userInput] = prompt("sửa gì ghi ra")
// console.log(person)

// Delete
// delete person.age
// console.log(person)

// let userInput = prompt()
// delete person[userInput]
// console.log(person)


let dictionary = { 
    any:123,
    stt:234,
    fwb:345,
    bf:456,
    bff:567,  
}

// in ra toan bo cac tu
// Cach 1
// const keys = Object.keys(dictionary)
// console.log(keys)
// keys.forEach((element, index) => {
//     console.log(`${index+1}. ${element}`)
// })
// Cach 2
// Object.keys(dictionary).forEach((v,i) => {
//     console.log(`${i+1}. ${v}`)
    
// })
while(loop){

let userInput= prompt("Nhap tu ban muon xem")

if (userInput in keys){
    console.log(dictionary[userInput])
}
else {
    let userAnswer = prompt("Ban da nhap sai, co muon them vao tu dien ko")
    if(userAnswer === 'y'){
        let userInputValue = prompt("Hay nhap nghia cho tu")
        dictionary[userInput]= userInputValue
        Object.keys(dictionary).forEach((v,i) => {
            console.log(`${i+1}. ${v}`)
        })
    } else if (userAnswer === `n`){
        console.log("Cam on ban")
    } else {
        console.log("Ban nhap sai roi")
    }
}
}
