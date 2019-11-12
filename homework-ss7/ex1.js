const google = document.getElementById("gg")
const button = document.getElementById("button")
const userInput = document.getElementById("user-input")
const select = document.getElementById("select")
const colors = document.getElementById("colors")

console.dir(google);
console.dir(select);

button.addEventListener("click", () => {
    userInput.value = google.href
})
colors.addEventListener("click", () => {
    select.remove(select.selectedIndex)
})