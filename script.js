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

function changeSize(width, height) {
    let size = prompt("Enter your grid size (0-100)");
    return makeRows(size,size);
};


const sizeButton = document.querySelector(".sizeButton");

sizeButton.addEventListener("click", 
    () => changeSize());
