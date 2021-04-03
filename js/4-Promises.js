// const promise = new Promise(function(resolve, reject) {
//     // the function is executed automatically when the promise is constructed
  
//     // whenever the promise run:
//     // after 1 second signal that the job is done with the result "done successfully" or the error "failed"
//     setTimeout(() => {
//         if(Date.now() % 2 === 0 ){
//             resolve('done successfully')
//         }else{
//             reject('failed')
//         }
//     }, 1000);
// });

// run the job
// promise.then(
//     function(result) { console.log('promise fulfilled! ',result) },
//     function(error) { console.log('promise rejected! ',error)}
// );





// // -----------There can be only a single result or an error-----------
// const promise2 = new Promise(function(resolve,reject){
//     resolve("done");
//     reject(new Error("…")); // ignored
//     setTimeout(() => resolve("…")); // ignored
// })





// // -----------Handling error in catch-----------
// let promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => reject(new Error("Whoops!")), 1000);
//   });
  
// // .catch(f) is the same as promise.then(null, f)
// promise3.then(result => console.log(result)).catch(error => console.log(error)); // shows "Error: Whoops!" after 1 second





// // -----------Using finally with promises-----------
// let promise4 = new Promise((resolve, reject) => {
//     setTimeout(() => reject(new Error("Whoops!")), 1000);
// });
  
// promise4
// .then(result => console.log(result))
// .catch(error => console.log(error))
// .finally(()=>console.log('Promise finished')); // shows "Error: Whoops!" after 1 second then "Promise finished"





// // calling api with promise
// let promise5 = fetch('https://javascript.info/article/promise-chaining/user.json')
  
// promise5
// .then(result => console.log(result))
// .catch(error => console.log(error))
// .finally(()=>console.log('Promise finished')); // shows "Error: Whoops!" after 1 second then "Promise finished"
