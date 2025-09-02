//todo add size adjustable grid
const grid = document.querySelector(".grid");

function createGrid(gridRow) {
  for (let r = 0; r < gridRow; r++) {
    const row = document.createElement("div");
    row.classList.add("row");
    grid?.appendChild(row);

    for (let c = 0; c < gridRow; c++) {
      const gridDiv = document.createElement("div");
      gridDiv.classList.add("grid-block");
      gridDiv.textContent = `(${r},${c})`;
      row.appendChild(gridDiv);
    }
  }
}

createGrid(4);