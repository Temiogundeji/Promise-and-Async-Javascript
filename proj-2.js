// let promise = new Promise(function(resolve, reject){
//     setTimeout(()=>resolve('done'), 1000);
// });

// promise.then(result => alert(result), error => alert(error)
// );
let promise = new Promise(function(resolve, reject) {
    setTimeout(() => reject(new Error("Whoops!")), 1000);
  });
  
  // reject runs the second function in .then
  promise.then(
    result => alert(result), // doesn't run
    error => alert(error) // shows "Error: Whoops!" after 1 second
  );