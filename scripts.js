const defaultSize = 16;
const defaultColour = '#ffffff';


let currentSize = defaultSize;
let currentColour = defaultColour;

// Task 1: Draw Grid Programatically [Done]

function drawGrid() {
    const mainGrid = document.querySelector('.grid');
    
    for  (x=0; x<(currentSize*currentSize); x++) {
        const newCell = document.createElement('div');
        newCell.textContent = "p";
        newCell.classList.add('fresh');
        mainGrid.appendChild(newCell);
        // console.log(x);
    }
}

document.onload = drawGrid();