const container = document.querySelector('.container');

const COLUMN_COUNT = 16;
const ROW_COUNT = 16;
let gridSize = 0;

const button = document.createElement("button");
container.appendChild(button);
button.style.height = "500px";
button.textContent = "new grid";
button.addEventListener('click', () => {
    while (gridSize > 100 || gridSize < 0) {
        gridSize = prompt("size of grid?");
    } 
    if (gridSize != null) {
        makeGrid(gridSize, gridSize);
    }
});

makeGrid(COLUMN_COUNT, ROW_COUNT);
hoverEffect();

function hoverEffect() {
    const box = document.querySelectorAll('.box');
    box.forEach (cell => {
        cell.addEventListener('mouseenter', () => {
            cell.style.backgroundColor = 'blue';
        });
    });
}


function makeGrid(column, row) {
    for (let i = 0; i < row; i++) {
    const rowBoxContainer = document.createElement("div");
    rowBoxContainer.setAttribute('class', 'row-box-container');
    rowBoxContainer.classList.add('row-box-container')
    container.appendChild(rowBoxContainer);

        for (let j = 0; j < column; j++) {
            const box = document.createElement("div");
            box.setAttribute('class', 'box');
            box.classList.add('box');
            rowBoxContainer.appendChild(box);
        }
    }
}


