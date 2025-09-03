
const grid = document.querySelector(".grid");
const gridSize = document.querySelector("#size")
const clearGrid = document.querySelector("#clear-grid")
const colorPicker = document.querySelector("#color-picker")

let currentColor = colorPicker?.value;
let mouseDown = false

colorPicker?.addEventListener("input", () => {
  currentColor = colorPicker.value; 
});

function colorPickerFunction(event) {
  event.target.style.backgroundColor = currentColor;
}

function createGrid(gridCol) {
    const blockSize = (960 / gridCol) - 2;
    grid.innerHTML = ''
    for (let c = 0; c < gridCol; c++) {
        const col = document.createElement("div");
        col.classList.add("col");
        grid?.appendChild(col);

        for (let r = 0; r < gridCol; r++) {
            const gridDiv = document.createElement("div");
            gridDiv.classList.add("grid-block");

            gridDiv.style.width = `${blockSize}px`;
            gridDiv.style.height = `${blockSize}px`;

            gridDiv.addEventListener("mousedown", (e) => 
                { mouseDown = true
                    colorPickerFunction(e);
                 })
            gridDiv.addEventListener("mouseup", (e) => { mouseDown = false })
            gridDiv.addEventListener("dragstart", (e) => e.preventDefault());
            gridDiv.addEventListener("mouseover", (e) => {
                if (mouseDown) {
                    colorPickerFunction(e);
                }
            })

            col.appendChild(gridDiv);
        }
    }
}

function clearGridFunction() {
    clearGrid?.addEventListener("mousedown", () => {
        grid.innerHTML = ''
        createGrid(Number(gridSize.value));
    })
}
function gridSizeFunction() {
    createGrid(Number(gridSize?.value));
    gridSize?.addEventListener("input", () => {
        createGrid(Number(gridSize.value));
    });
}

gridSizeFunction();
clearGridFunction();