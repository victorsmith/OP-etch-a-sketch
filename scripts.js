
const mainGrid = document.querySelector('.grid');

for (x=0; x<64; x++) {
    const subDiv = document.createElement('div');
    subDiv.classList.add('blue');
    subDiv.textContent = x;
    mainGrid.appendChild(subDiv);
}


const divs = document.querySelectorAll('div.blue');
// we use the .forEach method to iterate through each button
divs.forEach((subDiv) => {
    // and for each one we add a 'click' listener
    subDiv.addEventListener('click', () => {
        console.log(subDiv.textContent)
    });
});


