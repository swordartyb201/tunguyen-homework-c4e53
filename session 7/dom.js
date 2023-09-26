// const buttonSubmit = document.getElementById("submit")
// console.dir(buttonSubmit)
// const userInput = document.getElementById("input")
// const text = document.getElementById("para")
// console.dir(userInput)
// // text.innerHTML = "hi"
// // input


const buttonAdd = document.getElementById("add")
const userList = document.getElementById("user-list")
const buttonRemove = document.getElementById("remove")
const userName = document.getElementById("username")
console.dir(userList)

buttonAdd.addEventListener('click', () => {
    var entry = document.createElement('li')
    var text1 = document.createTextNode(userName.value)
    entry.appendChild(text1)
    userList.appendChild(entry);
    userName.value=""
})

buttonRemove.removeEventListener('click', () => {
    let value = userName.value
    if(value == ""){
    userList.removeChild(userList.lastElementChild)
    } else {
        let invalid = true
        for(let i = 0; i < userList.children.length; i++){
            if(value.toLowerCase() == userList.children[i].textContent.toLowerCase()){
                userList.removeChild(userList.children[i])
                invalid = false
            }
        }
        if(invalid){
            alert("Nhap sai roi")
        }
    }
})