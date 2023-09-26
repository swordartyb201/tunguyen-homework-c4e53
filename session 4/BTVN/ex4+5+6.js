var dictionary={
    debug:`The process of figuring out why your program has a certain error and how to fix it`,
    done: `When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed)`,
    defect: `The formal word for ‘error’`,
    pm: `The short version of Project Manager, the person in charge of the final result of a project`,
    "ui/ux":`UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels`,
}
const keys= Object.keys(dictionary)
console.log(keys)
  alert("Hi there, this is dev dictionary")
  let UserInput= prompt("Enter a keyword")

  if (keys.includes(UserInput)){
   console.log(dictionary[UserInput])
} else {
   let UserInput1= prompt(`We could not find your word: ${UserInput} ,leave your explanation`) 
   alert("Done")
   dictionary[UserInput]=UserInput1
   console.log(dictionary)
}



