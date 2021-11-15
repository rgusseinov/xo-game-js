
/* function getPosts(){
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('timer for 3 second'), 3000);
  })
}

// console.log(getPosts());

getPosts().then((response) => {
  console.log(response);
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('timer for 1 second'), 1000);
  })
}).then(data => {
  console.log(data);
})
*/

/* const data = fetch('https://jsonplaceholder.typicode.com/posts');

data.then((result) => {
  return result.json()
}).then(response => {
  console.log(response)
}) */

const URL = 'https://jsonplaceholder.typicode.com/posts';

function getPosts(){
  const response = fetch(URL);
  return response;
}

getPosts()
  .then(res => res.json())
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.error(err);
  })