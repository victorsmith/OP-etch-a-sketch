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


function resetGrid() {
    const mainGrid = document.querySelector('.grid');
    mainGrid.innerHTML = "";
    
    setup.size = getSize();
    
    // redo css config for grid
    mainGrid.style.gridTemplateColumns = `repeat(${setup.size}, 1fr)`
    mainGrid.style.gridTemplateRows = `repeat(${setup.size}, 1fr)`

    drawGrid();
}

function getSize() {
    let newSize = prompt("New grid size?: ");
    if (newSize > 100 || newSize < 1) {
        alert("Pls enter a number between 1-100");
        getSize()
    } else {
        return newSize;
    }
}   

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
    // currentColour : String
    e.srcElement.style['background-color'] = setup.colour;
}     

document.onload = drawGrid();