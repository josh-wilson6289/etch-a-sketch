const grid = document.querySelector(".container");
const clearBtn = document.getElementById("clear-btn")

clearBtn.addEventListener("click", () => {
  clear();
});

createRows();
createSquares();
hoverSquares();

function createRows () {
  for (let i=0; i < 16; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    grid.appendChild(row);
  }
}

function createSquares () {
  let rows = document.querySelectorAll(".row");
  rows.forEach((row) => {
    for (i=0; i < 16; i++) {
      let square = document.createElement("div");
      square.classList.add("square");
      row.appendChild(square);
    }
  });
}

function hoverSquares () {
  let squares = document.querySelectorAll(".square")
  squares.forEach((square) => {
    square.addEventListener("mouseover", function (e) {
      e.target.style.backgroundColor = "black";
    })
  });
  }

  function clear () {
    let squares = document.querySelectorAll(".square")
    squares.forEach((square) => {
      square.style.backgroundColor = "white";
    }) 
  }
