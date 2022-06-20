const grids = document.querySelector('#squares');

grids.style.gridTemplateColumns = 'repeat(16, 1fr)';
grids.style.gridTemplateRows = 'repeat(16, 1fr)';

for(let i=0; i<256; i++) {
    let square = document.createElement('div');
    grids.appendChild(square);
}