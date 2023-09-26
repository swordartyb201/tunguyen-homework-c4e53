// let loop = true
// while (loop){

//     let temp = Number(prompt("Nhap nhiet do:"))
//     if(temp < 10){
//     console.log("Lanh qua")
// }   else if (temp < 25){
//     console.log("Mat qua")
// }   else{
//     console.log("Nong qua")
// }
//     if (tempt < 50){
//     loop=false
// }}

 let loop=true
 let count=0

 while (count<4){
    let username=prompt("nhap user")
    if(username==="c4e54"){
        console.log("Dung username")
        let password=prompt("nhap password")
           if(password==="codethechange"){
             alert("Dang nhap thanh cong")
             break
        } else {
             console.log("Sai password")
             let count=count+1
    }
    } else {console.log("Sai username")
      let count=count+1
    }
  if(count>3){break
 }}
    

