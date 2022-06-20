const grids = document.querySelector('#squares');

grids.style.gridTemplateColumns = 'repeat(16, 1fr)';
grids.style.gridTemplateRows = 'repeat(16, 1fr)';

for (let i = 0; i < 256; i++) {
  const square = document.createElement('div');
  square.classList.toggle('square');
  grids.appendChild(square);
}

const squares = document.querySelectorAll('.square');
squares.forEach((square) => {
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = 'gray';
    })
})