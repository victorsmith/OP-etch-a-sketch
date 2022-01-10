
// function poppulateGrid() {
    
    
    // }
    
    
const mainGrid = document.querySelector('.grid');

for (x=0; x<64; x++) {
    const subDiv = document.createElement('div');
    subDiv.classList.add('blue');
    subDiv.textContent = x;
    mainGrid.appendChild(subDiv);
}
