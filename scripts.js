function generateGrid(size)
{
    let container = document.querySelector(".container");

    for (let numRow = 1; numRow <= size; numRow++)
    {
        let row = document.createElement("div");
        for (let numCol = 1; numCol <= size; numCol++)
        {
            let square = document.createElement("div");
            square.classList.add("square");

            square.style.width = `${gridSize / size}px`;
            square.style.height = `${gridSize / size}px`;
            
            row.appendChild(square);
        }
        
        container.appendChild(row);
    }
}

const gridSize = 650;
let container = document.querySelector(".container");
generateGrid(16); // By default, 16 x 16 grid