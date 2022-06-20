function createBoard(size) {
  const grids = document.querySelector('#squares');
  grids.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grids.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < Math.pow(size, 2); i++) {
    const square = document.createElement('div');
    square.classList.toggle('square');
    grids.appendChild(square);
  }
}

createBoard(16);

const squares = document.querySelectorAll('.square');
squares.forEach((square) => {
  square.addEventListener('mouseover', () => {
    square.style.backgroundColor = 'gray';
  });
});

squares.forEach((square) => {
  square.addEventListener('mouseover', () => {
    square.style.backgroundColor = 'gray';
  });
});

// function removeSquares() {
//     const squares = document.querySelectorAll('.square');

//     squares.forEach((square) => {
//         square.remove();
//     })
// };

const sizeButton = document.querySelector('#size');

// when button is clicked propmt user for input
sizeButton.addEventListener('click', (e) => {
  // clear existing squares
  // const squares = document.querySelectorAll('.square');
  // squares.forEach((square) => {
  //     square.remove();
  // })
  e.preventDefault();
  console.log('so?');
  createBoard(0);

  const size = prompt('How many squares per side do you want to set?');
  createBoard(size);
});