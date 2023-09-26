let cannang=parseFloat(prompt("Cân nặng của bạn (kg) : "))
let chieucao=parseFloat(prompt("Chiều cao của bạn (cm) : "))
BMI = cannang / ((chieucao / 100) * (chieucao / 100))
console.log(`Chỉ số BMI của bạn là :  ${BMI}`)
if (BMI < 16){
    console.log("Severely underweigh")
}
else if (BMI < 18.5){
    console.log("Underweigh")
}
else if (BMI < 25){
    console.log("Normal")
}
else if (BMI < 30){
    console.log("Overweigh")
}
else {
    console.log("Obese")
}