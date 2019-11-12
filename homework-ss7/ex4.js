const table = document.getElementById("table")
const row = document.getElementById("row")
const cell = document.getElementById("cell")
const content = document.getElementById("content")
const button = document.getElementById("button")

button.addEventListener("click",()=>{
    row.valueAsNumber <= table.rows.length && row.valueAsNumber >0
    cell.valueAsNumber <= table.rows[row.valueAsNumber-1].cells.length && cell.valueAsNumber >0
    table.rows[row.valueAsNumber-1].cells[cell.valueAsNumber-1].innerText = content.value
   
})