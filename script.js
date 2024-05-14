const container = document.getElementById('container');
const resetButton = document.getElementById('resetButton');

function createGrid(size) {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        const div = document.createElement('div');
        div.classList.add('grid-item');
        container.appendChild(div);
    }
}

function resetGrid() {
    const newSize = prompt("Enter the number of squares per side for the new grid (max 100):");
    if (newSize && newSize > 0 && newSize <= 100) {
        container.innerHTML = '';
        createGrid(newSize);
    } else {
        alert("Invalid input! Please enter a number between 1 and 100.");
    }
}

resetButton.addEventListener('click', resetGrid);

createGrid(16); // Initial grid size

container.addEventListener('mouseover', function (e) {
    if (e.target.classList.contains('grid-item')) {
        e.target.style.backgroundColor = getRandomColor();
        darkenColor(e.target);
    }
});

function getRandomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}

function darkenColor(square) {
    let currentColor = square.style.backgroundColor;
    let rgbValues = currentColor.match(/\d+/g);
    let newColor = `rgb(${Math.max(rgbValues[0] - 25, 0)}, ${Math.max(rgbValues[1] - 25, 0)}, ${Math.max(rgbValues[2] - 25, 0)})`;
    square.style.backgroundColor = newColor;
}
