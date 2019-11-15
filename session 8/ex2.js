const userInput = document.getElementById("user-input")
const start = document.getElementById("start")
const stop = document.getElementById("stop")
const countDown = document.getElementById("countdown")

// var time
start.addEventListener('click', () => {
    // console.dir(countDown)
    countDown.innerText = userInput.value
    time = setInterval(() => {
        countDown.innerText -= 1
        if (countDown.innerText < 0){
            clearInterval(time)
            countDown.innerText = "Time's up"
    }}, 1000)
    
})

stop.addEventListener('click', () => {
    clearInterval(time)
    countDown.innerText = "Stopped"
})