var promise1 = new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve('Promise is da best');
    }, 5000);
  });
  
  promise1.then(function(mess) {
    console.log(mess);
  });
  
  console.log(promise1);