function generateGrid(size)
{
    for (let numRow = 1; numRow <= size; numRow++)
    {
        let row = document.createElement("div");
        row.classList.add("row");
        for (let numCol = 1; numCol <= size; numCol++)
        {
            let square = document.createElement("div");
            square.classList.add("square");

            square.addEventListener("mouseover", function() {
                this.style.backgroundColor = "black";
            })

            square.style.width = `${pixelSize / size}px`;
            square.style.height = `${pixelSize / size}px`;
            
            row.appendChild(square);
        }
        
        container.appendChild(row);
    }
}

function resetGrid()
{
    let squares = document.querySelectorAll(".square");
    for (let i = 0; i < squares.length; i++)
    {
        squares[i].style.backgroundColor = "white";
    }
}

function removeGrid()
{
    let rows = document.querySelectorAll(".row");
    for (let i = 0; i < rows.length; i++)
    {
        rows[i].remove();
    }
}

function getNewSize()
{
    gridSize = Number(prompt("How many squares per side? (0-99)"));
    if (gridSize > 99)
    {
        alert("Maximum size exceeded.");
    }
    else
    {
        removeGrid();
        generateGrid(gridSize);
    }
}

const pixelSize = 650;
let gridSize = 16;
let container = document.querySelector(".container");
generateGrid(gridSize); 

const reset = document.getElementById("reset");
reset.addEventListener("click", resetGrid);

const changeSize = document.getElementById("change-size");
changeSize.addEventListener("click", getNewSize);