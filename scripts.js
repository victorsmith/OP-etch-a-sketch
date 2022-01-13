const defaultSize = 16;
const defaultColour = '#000000';

class Settings {
    constructor(newSize, newColour) {
        this.size = newSize;
        this.colour = newColour;
    }
}

let setup = new Settings(defaultSize, defaultColour);

// Task 1: Draw Grid Programatically [Done]


function drawGrid() {
    const mainGrid = document.querySelector('.grid');

    for  (x=0; x<(setup.size**2); x++) {
        const newCell = document.createElement('div');
        
        newCell.addEventListener('mouseover', hover);
        newCell.classList.add('fresh');
        newCell.textContent = x;

        mainGrid.appendChild(newCell);
    }
}

function hover (e) {
    console.log(e);
    console.log(setup.colour);
    // currentColour : String
    e.srcElement.style['background-color'] = setup.colour;
}     

document.onload = drawGrid();