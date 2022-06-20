function createBoard(size) {
    const grids = document.querySelector('#squares');
    grids.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grids.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    //   check if the input is max 100. return an error message if not
    //   if(size > 100) {
    //     const msg = document.createElement('p');
    //     msg.textContent = 'Maximum amount of squares per side is 100!';
    //     const form = document.querySelector('form');
    //     form.appendChild(msg);
    //   }

    for (let i = 0; i < Math.pow(size, 2); i++) {
        const square = document.createElement('div');
        square.classList.toggle('square');
        grids.appendChild(square);
    }

    // if (size > 100) {
    //     const msg = document.createElement('p');
    //     msg.textContent = 'Maximum amount of squares per side is 100!';
    //     const form = document.querySelector('form');
    //     form.appendChild(msg);
    // } else {
    //     for (let i = 0; i < Math.pow(size, 2); i++) {
    //         const square = document.createElement('div');
    //         square.classList.toggle('square');
    //         grids.appendChild(square);
    //     }

    // }


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

const sizeButton = document.querySelector('#size');

// when button is clicked propmt user for input
sizeButton.addEventListener('click', (e) => {
    e.preventDefault();

    createBoard(0);

    const size = prompt('How many squares per side do you want to set?');
    // createBoard(size);
    if (size <= 100) {
        createBoard(size);
    } else {
        const msg = document.createElement('p');
        msg.textContent = 'Maximum amount of squares per side is 100!';
        const form = document.querySelector('form');
        form.appendChild(msg);

    }
});