const container = document.querySelector('.container');

const COLUMN_COUNT = 16;
const ROW_COUNT = 16;
let gridSize;

const button = document.createElement("button");
container.appendChild(button);
button.style.height = "500px";
button.textContent = "new grid";
button.addEventListener('click', () => {
    do {
        gridSize = prompt("size of grid?");
    }
    while (gridSize > 100 || gridSize < 0);
    
    if (gridSize != null) {
        removeGrid();
        makeGrid(gridSize, gridSize);
        
    }
});

makeGrid(COLUMN_COUNT, ROW_COUNT);


function hoverEffect() {
    const box = document.querySelectorAll('.box');
   
    box.forEach (cell => {
        cell.addEventListener('mouseenter', () => {
            let red = Math.floor(Math.random() * 256);
            let green = Math.floor(Math.random() * 256);
            let blue =  Math.floor(Math.random() * 256);
            let rgbValue = "rgb("+red+"," +green+"," +blue +")";

            cell.style.backgroundColor = rgbValue;
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
    hoverEffect();
}

function removeGrid() {
    const boxRowContainer = document.querySelectorAll('.row-box-container');
    boxRowContainer.forEach (cell => {
        container.removeChild(cell);
    });
}


