// EX7
let list = [
    {
        Name: "Xiaomi portable charger 20000mah",
        Brand: "Xiaomi",
        Price: 428,
        Color: "White",
        Cetegory: "Charger",
    },
    {
        Name: "VSmart Active 1",
        Brand: "VSmart",
        Price: 5487,
        Color: "Black",
        Category: "Phone"
    },
    {
        Name: "IPhone X",
        Brand: "Apple",
        Price: 21490,
        Color: "Grey",
        Category: "Phone"
    },
    {
        Name: "Samsung Galaxy A9",
        Brand: "Samsung",
        Price: 8490,
        Color: "Blue",
        Category: "Phone"
    }
]
//Ex8
for(let i=0; i< list.length; i++){
    console.log("----------------------------")
    console.log(`Name:${list[i].Name}`)
    console.log(`Price:${list[i].Price}`)
}
//Ex9
let UserInput=prompt("Enter your category")
if (UserInput="Charger"){
    console.log()
}