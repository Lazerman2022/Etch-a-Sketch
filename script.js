
const grid = document.querySelector(".grid");
const gridSize = document.querySelector("#size")
const clearGrid = document.querySelector("#clear-grid")
console.log(gridSize.value)
let mouseDown = false


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

            gridDiv.addEventListener("mousedown", (e) => {mouseDown = true})
            gridDiv.addEventListener("mouseup", (e) => {mouseDown = false})
            gridDiv.addEventListener("dragstart", (e) => e.preventDefault());
            gridDiv.addEventListener("mouseover", (e) => {
                if (mouseDown) {
                    gridDiv.classList.toggle("active");
                }
            })

            col.appendChild(gridDiv);
        }
    }
}
createGrid(Number(gridSize?.value));
gridSize?.addEventListener("input", () => {
    createGrid(Number(gridSize.value));
});
clearGrid?.addEventListener("mousedown",() => {
grid.innerHTML = ''
createGrid(Number(gridSize.value));
})