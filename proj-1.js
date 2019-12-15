let promise = new Promise((resolve, reject) =>{
    // (resolve, reject)=>{} is known as an executor, when new promise is created, it runs automatically.
    //if the job finished successfully, with result value -- resolve(value)
    //if an error occured, error is the error object
    //the executor runs automatically, it should do a job and call either resolve or reject.
    setTimeout(() => resolve("done"), 1000);
});
let promise = new Promise((resolve, reject) =>{
    // (resolve, reject)=>{} is known as an executor, when new promise is created, it runs automatically.
    //if the job finished successfully, with result value -- resolve(value)
    //if an error occured, error is the error object
    //the executor runs automatically, it should do a job and call either resolve or reject.
    setTimeout(() => reject(new Error("Whoops!")), 1000);
    //a resolved or rejected promise is called settled
});