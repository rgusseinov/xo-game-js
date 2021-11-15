const PLAYER = 'X';

const arr = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
];


const boxes = document.querySelectorAll('.box');
boxes.forEach(box => box.addEventListener('click', handleBoxClick));

function handleBoxClick(evt){
  const current = evt.target;
  current.innerHTML = PLAYER;

  arr[1][2] = 55;
  console.log(arr);
}

