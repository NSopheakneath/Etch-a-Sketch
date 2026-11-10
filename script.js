const container= document.querySelector('.container');

for (let i=1; i<=16;i++){
    for (let j=1; j<=16; j++){
        const grid = document.createElement('div');
        grid.classList.add("squares")
        container.appendChild(grid);
    }
}

const getRandomColor = () => {
  const hue = Math.floor(Math.random() * 360);
  return `hsl(${hue}, 70%, 85%)`;
};

const squares = document.querySelectorAll(".squares");

squares.forEach((square) => {
  square.addEventListener("mouseover", () => {
    square.style.backgroundColor = getRandomColor();
  });
});