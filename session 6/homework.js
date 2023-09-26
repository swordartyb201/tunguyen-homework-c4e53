//ex1
function HelloWorld () {
    for(let i = 0; i < 3; i++)
    console.log("Hello world")
}
HelloWorld()

//ex2
function add (x,y) {
    let result = x + y
    console.log(result) 
}
add(1,-1)

//ex3
function drawSquare(len, col) {
    color = col
    for (let i = 0; i < 4; i++) {
        fd(len)
        rt(90)
    }
}
console.log(drawSquare(50,color("red")))

//ex5
function draw_star(len) {
    rt(18)
    for (let i = 0; i < 5; i++) {
        fd(len)
        rt(144)
    }
}
console.log(draw_star(150))

//ex6+7
function remove_dollar_sign (x) {
    var x = x.replace(/\$/g,'');
    return x
}

string_with_no_dollars = remove_dollar_sign("$80% percent of $life is to show $up")
if (string_with_no_dollars == "80% percent of life is to show up"){
    console.log("Your function is correct")}
else{
    console.log("Oops, there's a bug")}

//ex8+9