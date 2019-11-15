const buttonUp = document.getElementById("button+")
const buttonDown = document.getElementById("button-")
const count = document.getElementById("count")

buttonUp.addEventListener('click', () => {
    // const number = Number(count1.value)
    count.value = Number(count.value) + 1
})

buttonDown.addEventListener('click', () => {
    const number = Number(count.value)
    count.value = number - 1
})