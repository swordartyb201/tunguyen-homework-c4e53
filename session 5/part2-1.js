let listOfWords =["to", "be", "that", "of", "elon", "to", "this", "now", "back", "cool", "hey", "love", "of", "life", "that", 
                "rain", "summer", "color", "now", "of", "hat", "late", "sorry", "my", "team"]
let Dem ={}

for (let i = 0; i < listOfWords.length; i++) {
    if (Dem[listOfWords[i]] == undefined) {
        Dem[listOfWords[i]] = 1       
    } else {
        Dem[listOfWords[i]]++
    }
}
console.log(Dem)  