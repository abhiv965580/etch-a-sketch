let rows = 16;
let columns = 16;
// container block
const body = document.querySelector('body');

const container = document.createElement('div');
container.classList.add('container');
body.appendChild(container);

const containerBlock = document.querySelector('.container');

for(let i = 0; i < rows; i++){
    rowElement = document.createElement('div');
    rowElement.classList.add('row');
    for (let j = 0; j < columns; j++) {
        colElement = document.createElement('div');
        colElement.classList.add('col');
        rowElement.appendChild(colElement);
    }
    containerBlock.appendChild(rowElement);
}
