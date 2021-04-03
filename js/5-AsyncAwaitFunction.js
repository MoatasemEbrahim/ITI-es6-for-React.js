async function asyncAwaitFunction() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 5000)
  });

  let result = await promise; // wait until the promise resolves (*)
  console.log(result); // "done!"
  console.log('hola')
}







// // calling api with async/await function
async function showAvatar() {
  // read our JSON

  let response = await fetch('https://javascript.info/article/promise-chaining/user.json');
  let user = await response.json();
  console.log('user',user)

  // read github user
  let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
  let githubUser = await githubResponse.json();
  console.log('githubUser',githubUser)

  // show the avatar
  let img = document.createElement('img');
  img.src = githubUser.avatar_url;
  img.className = "promise-avatar-example";
  document.body.append(img);

  // wait 3 seconds
  await new Promise((resolve, reject) => setTimeout(()=>resolve(), 3000));

  img.remove();
}
