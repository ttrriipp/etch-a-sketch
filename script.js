const container = document.querySelector('.container');

const COLUMN_COUNT = 16;
const ROW_COUNT = 16;

for (let i = 0; i < COLUMN_COUNT; i++) {
    const rowBoxContainer = document.createElement("div");
    rowBoxContainer.setAttribute('class', 'row-box-container');
    rowBoxContainer.classList.add('row-box-container')
    container.appendChild(rowBoxContainer);
    
    for (let j = 0; j < ROW_COUNT; j++) {
        const box = document.createElement("div");
        box.setAttribute('class', 'box');
        box.classList.add('box');
        rowBoxContainer.appendChild(box);
    }
}