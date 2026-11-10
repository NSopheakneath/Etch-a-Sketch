const container= document.querySelector('.container');

const getRandomColor = () => {
  const hue = Math.floor(Math.random() * 360);
  return `hsl(${hue}, 70%, 85%)`;
};

const createGrid = function(size){
    container.replaceChildren(); // remove the old grid

    for (let i=1; i<=size; i++){
        for (let j=1; j<=size; j++){
            const grid = document.createElement('div');
            grid.classList.add("squares");
            grid.style.flex = `0 0 ${100 / size}%`;
            grid.style.height = `${100 / size}%`;
            container.appendChild(grid);
        }
    }

    const squares = document.querySelectorAll(".squares");

    squares.forEach((square) => {
      square.addEventListener("mouseover", () => {
        square.style.backgroundColor = getRandomColor();
      });
    });
}

//button on top/


const promtForGrid = function(){
    const input = prompt("Number of squares per side (max 100):");

    if (input === null) return; // user cancelled

    const numOfGrid = parseInt(input, 10);

    if (isNaN(numOfGrid) || numOfGrid < 1 || numOfGrid > 100){
        alert("Please enter a whole number between 1 and 100.");
        return;
    }

    createGrid(numOfGrid);
}

const button = document.createElement("button");
button.classList.add("button");
button.textContent = "New Grid";
container.before(button); // puts the button above the grid
button.addEventListener("click", promtForGrid);
button.addEventListener("mouseover", ()=>{
    button.style.backgroundColor = 'lightpink';
})
button.addEventListener("mouseout", ()=>{
    button.style.backgroundColor = "lightcyan";
})

createGrid(16); // initial grid