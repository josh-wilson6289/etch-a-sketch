const grid = document.querySelector(".container");
const clearBtn = document.getElementById("clear-btn")
const squaresPerRowSpan = document.getElementById("squares-per-row")

// initial function call to create first grid of 16x16 squares
createGrid(16);

// Creates grid based on number of squares (initializes with 16)
function createGrid(numberOfSquares) {
  squaresPerRowSpan.textContent = numberOfSquares
  clear();
  createRows(numberOfSquares);
  createSquares(numberOfSquares);
  hoverSquares(); 
}

// Deletes all rows and squares
function clear () {
  let rows = document.querySelectorAll(".row")
  rows.forEach((row) => {
    row.remove();
  })
  
  let squares = document.querySelectorAll(".square")
  squares.forEach((square) => {
    square.remove();
  })
}

// Creates each row by dividing the height of container by number of squares
function createRows (numberOfSquares) {
  for (let i=0; i < numberOfSquares; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    row.style.height = `${500/numberOfSquares}px`
    grid.appendChild(row);
  }
}

// Creates squares in each row by dividing the width of the container by the number of squares
function createSquares (numberOfSquares) {
  let rows = document.querySelectorAll(".row");
  rows.forEach((row) => {
    for (i=0; i < numberOfSquares; i++) {
      let square = document.createElement("div");
      square.classList.add("square");
      square.style.width = `${500/numberOfSquares}px`
      row.appendChild(square);
    }
  });
}

// Clear Button event listener
clearBtn.addEventListener("click", () => {
  getNumberOfSquares();
});

// Event listener to change each squares background to black on hover
function hoverSquares () {
  let squares = document.querySelectorAll(".square")
  squares.forEach((square) => {
    square.addEventListener("mouseover", function (e) {
      e.target.style.backgroundColor = "black";
    })
  });
  }

// Gets number of squares from user after clear button is clicked
function getNumberOfSquares() {
    let numberOfSquares = parseInt(prompt("How many squares per row?"), 10);
  
    if (isNaN(numberOfSquares)) {
      console.log("not a number")
      createGrid(16);
    }
    else {
      createGrid(numberOfSquares);
    }
  }

