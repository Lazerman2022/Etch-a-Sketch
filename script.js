
const grid = document.querySelector(".grid");

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

function createGrid(gridCol) {

    const blockSize = 960 / gridCol;

    for (let c = 0; c < gridCol; c++) {
        const col = document.createElement("div");
        col.classList.add("col");
        grid?.appendChild(col);

        for (let r = 0; r < gridCol; r++) {

            const gridDiv = document.createElement("div");
            gridDiv.classList.add("grid-block");

            gridDiv.style.width = `${blockSize}px`;
            gridDiv.style.height = `${blockSize}px`;

            gridDiv.addEventListener("mousedown", (e) => {})
            gridDiv.addEventListener("mouseup", (e) => {})
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
createGrid(32);
