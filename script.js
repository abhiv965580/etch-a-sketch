const body = document.querySelector('body');
const btn = document.createElement('button');
btn.classList.add('btn');
btn.textContent = 'Click to change size of grid';
body.appendChild(btn);
const container = document.createElement('div');
container.classList.add('container');
body.appendChild(container);
const containerBlock = document.querySelector('.container');

function changeGridSize(newSize) {  //function to the change the size of grid
    let newRow = newSize;
    let newColumn = newSize;
    container.innerHTML = '';
    for(let i = 0; i < newRow; i++){
        rowElement = document.createElement('div');
        rowElement.classList.add('row');
        for (let j = 0; j < newColumn; j++) {
            colElement = document.createElement('div');
            colElement.classList.add('col');
            rowElement.appendChild(colElement);
        }
        containerBlock.appendChild(rowElement);
    }
}

function hoverEffect() {       //function that enables hover effect
    const items = document.querySelectorAll('.col');
    items.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.backgroundColor = 'blue';
    });
    item.addEventListener('mouseout', () => {
        item.style.backgroundColor = 'white';
    });
});
}

const btnGrid = document.querySelector('.btn');
btnGrid.addEventListener('click', () => {
    size = prompt("Enter the size of grid between 0 and 100:");
    changeGridSize(size);
    hoverEffect();
});
changeGridSize(16);
hoverEffect();
