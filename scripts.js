const defaultSize = 16;
const defaultColour = '#ffffff';


let currentSize = defaultSize;
let currentColour = defaultColour;

// Task 1: Draw Grid Programatically [Done]


function drawGrid() {
    const mainGrid = document.querySelector('.grid');

    for  (x=0; x<(currentSize*currentSize); x++) {
        const newCell = document.createElement('div');
        
        newCell.addEventListener('mouseover', hover);
        newCell.classList.add('fresh');
        newCell.textContent = x;

        mainGrid.appendChild(newCell);
    }
}

function hover (e) {
    // is e just an event
    console.log(e);
    e.srcElement.classList.remove('fresh');
}     

document.onload = drawGrid();