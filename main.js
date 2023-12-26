let header = document.querySelector(".header");
let sq = [];
let turn = 'X';
let btn = document.querySelector(".btn1");

function end(n1, n2, n3) {
  header.innerHTML = `<span>${sq[n1]}</span> won`;
  document.getElementById("item" + n1).style.background = "#5a026c";
  document.getElementById("item" + n2).style.background = "#5a026c";
  document.getElementById("item" + n3).style.background = "#5a026c";

  setInterval(function () { header.innerHTML += "." }, 1000);
  setTimeout(function () { location.reload() }, 4000);
}

function winner() {
  let play = document.querySelectorAll(".square:empty");
  for (let i = 1; i < 10; i++) {
    sq[i] = document.getElementById(`item${i}`).innerHTML;
  }
  // rows
  if (sq[1] === sq[2] && sq[2] === sq[3] && sq[1] != "") { end(1, 2, 3); }
  if (sq[4] === sq[5] && sq[5] === sq[6] && sq[4] != "") { end(4, 5, 6); }
  if (sq[7] === sq[8] && sq[8] === sq[9] && sq[7] != "") { end(7, 8, 9); }
  // columns
  if (sq[1] === sq[4] && sq[4] === sq[7] && sq[1] != "") { end(1, 4, 7); }
  if (sq[2] === sq[5] && sq[5] === sq[8] && sq[2] != "") { end(2, 5, 8); }
  if (sq[3] === sq[6] && sq[6] === sq[9] && sq[3] != "") { end(3, 6, 9); }
  // diagonals
  if (sq[1] === sq[5] && sq[5] === sq[9] && sq[1] != "") { end(1, 5, 9); }
  if (sq[3] === sq[5] && sq[5] === sq[7] && sq[3] != "") { end(3, 5, 7); }
  // draw
  if (!play.length && !header.innerHTML.includes("won")) {
    header.innerHTML = "draw";
    setInterval(function () { header.innerHTML += "." }, 1000);
    setTimeout(() => { location.reload() }, 4000)
    console.log("draw")
  }
}

function game(id) {
  if (header.innerHTML.includes("won")) {
    return;
  }
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

function restart() {
  location.reload();
}