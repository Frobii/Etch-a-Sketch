const container = document.getElementById("container");

function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (i = 0; i < (rows * cols); i++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
        
        cell.addEventListener("mouseover", 
        e => e.target.classList.add('my-color-class'));
        // add a class to each div which when hovered, changed background-color
    };
};

function changeSize(size) {
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    };
    
    size = prompt("Enter your grid size (0-100)");
    for (i = 0; i < 1; i++) 
        if (size <= 100 && size > 0) {
            return makeRows(size,size);
        } else if (size > 100 || size < 1) {
            size = prompt("Enter a valid grid size (0-100)");
            i--
        };
};

function generateRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

const sizeButton = document.querySelector(".sizeButton");

sizeButton.addEventListener("click", 
    () => changeSize());


const rainbowButton = document.querySelector(".rainbowButton")