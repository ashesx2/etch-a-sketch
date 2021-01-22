/**
 * Creates a grid of (size * size) squares and handles hover
 * events to mimic the etch a sketch function.
 *
 * @param {number} size The number of squares per side, or dimensions of the grid.
 */
function generateGrid(size)
{
    // Create div containers holding rows of squares.
    for (let numRow = 1; numRow <= size; numRow++)
    {
        let row = document.createElement("div");
        row.classList.add("row");

        // Create div containers representing squares.
        for (let numCol = 1; numCol <= size; numCol++)
        {
            let square = document.createElement("div");
            square.classList.add("square");

            // Change the color of the square to the chosen
            // color indicated by the color picker when moused over.
            square.addEventListener("mouseover", function() {
                const color = document.getElementById("color");
                this.style.backgroundColor = color.value;
            })

            // Assign dimensions of the square so that it 
            // correctly fits the container.
            square.style.width = `${pixelSize / size}px`;
            square.style.height = `${pixelSize / size}px`;
            
            row.appendChild(square);
        }
        
        // Add row to HTML.
        container.appendChild(row);
    }
}

/**
 * "Clears" the grid by changing all squares to white.
 *
*/
function clearGrid()
{
    let squares = document.querySelectorAll(".square");
    for (let i = 0; i < squares.length; i++)
    {
        squares[i].style.backgroundColor = "white";
    }
}

/**
 * Removes squares from HTML.
 */
function removeGrid()
{
    let rows = document.querySelectorAll(".row");
    for (let i = 0; i < rows.length; i++)
    {
        rows[i].remove();
    }
}

/**
 * Replaces existing grid with a new grid of a size specified by
 * the user.
 *
 */
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

const pixelSize = 650; // Size of the container.
let gridSize = 16; // Initial size of the grid. 

let container = document.querySelector(".container");
generateGrid(gridSize); 

const clear = document.getElementById("clear");
clear.addEventListener("click", clearGrid);

const changeSize = document.getElementById("change-size");
changeSize.addEventListener("click", getNewSize);