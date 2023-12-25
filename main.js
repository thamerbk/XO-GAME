let header = document.querySelector(".header");
let squares = [];
let turn = 'X';

function winner() {
  for (let i = 1; i < 10; i++) {
    squares[i] = document.getElementById(`item${i}`).innerHTML;
  }
  // rows
  if (squares[1] === squares[2] && squares[2] === squares[3] && squares[1] != "") {
    console.log("done rows")
  }
  if (squares[4] === squares[5] && squares[5] === squares[6] && squares[4] != "") {
    console.log("done rows")
  }
  if (squares[7] === squares[8] && squares[8] === squares[9] && squares[7] != "") {
    console.log("done rows")
  }
  // columns
  if (squares[1] === squares[4] && squares[4] === squares[7] && squares[1] != "") {
    console.log("done columns")
  }
  if (squares[2] === squares[5] && squares[5] === squares[8] && squares[2] != "") {
    console.log("done columns")
  }
  if (squares[3] === squares[6] && squares[6] === squares[9] && squares[3] != "") {
    console.log("done columns")
  }
// diagonals
  if (squares[1] === squares[5] && squares[5] === squares[9] && squares[1] != "") {
    console.log("done")
  }
  if (squares[3] === squares[5] && squares[5] === squares[7] && squares[3] != "") {
    console.log("done")
  }
}

function game(id) {
  let element = document.getElementById(id);
  if (turn === "X" && element.innerHTML === "") {
    element.innerHTML = turn
    turn = "O"
    header.innerHTML = `<span>${turn}</span> turn`
  } else if (turn === "O" && element.innerHTML === "") {
    element.innerHTML = turn
    turn = "X"
    header.innerHTML = `<span>${turn}</span> turn`
  };
  winner();
};