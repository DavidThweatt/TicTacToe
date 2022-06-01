//Creat Players
const creatPlayer = (name, marker) => {
  return { name, marker };
};

//Game Flow
(function () {
  const s1 = document.getElementById("s1");
  const s2 = document.getElementById("s2");
  const s3 = document.getElementById("s3");
  const s4 = document.getElementById("s4");
  const s5 = document.getElementById("s5");
  const s6 = document.getElementById("s6");
  const s7 = document.getElementById("s7");
  const s8 = document.getElementById("s8");
  const s9 = document.getElementById("s9");
  const twoPlayer = document.getElementById("twoPlayer");
  const Display = document.getElementById("display");
  const squares = document.getElementsByClassName("squares");
  const restart = document.getElementById("restart");

  // create players
  twoPlayer.addEventListener("click", () => {
    const Player1 = creatPlayer("1", "X");
    const Player2 = creatPlayer("2", "O");
    Display.innerHTML = "X's turn!";
  });

  // player turns

  let nextTurn = "X";

  function changeTurn() {
    if (nextTurn == "X") {
      nextTurn = "O";
      Display.innerHTML = "O's Turn";
    } else {
      nextTurn = "X";
      Display.innerHTML = "X's Turn";
    }
  }

  // player marks
  for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", (e) => {
      markSpot(e);
    });
  }

  function markSpot(e) {
    const playerPick = e.target;

    if (playerPick.innerHTML === "") {
      playerPick.innerHTML = nextTurn;
      findWinner();
      changeTurn();
      if (checkEmpty()) Display.innerHTML = "Tie!";
    }
  }

  function checkEmpty() {
    let allFilled = true;
    for (var i = 0; i < squares.length; i++) {
      if (squares[i].innerHTML.length < 1) allFilled = false;
    }
    return allFilled;
  }

  //check for winner
  function findWinner() {
    if (
      (s1.innerHTML === "X" || s1.innerHTML === "O") &&
      s1.innerHTML === s2.innerHTML &&
      s1.innerHTML === s3.innerHTML
    ) {
      gameOver(s1.innerHTML);
    } else if (
      (s4.innerHTML === "X" || s4.innerHTML === "O") &&
      s4.innerHTML === s5.innerHTML &&
      s4.innerHTML === s6.innerHTML
    ) {
      gameOver(s4.innerHTML);
    } else if (
      (s7.innerHTML === "X" || s7.innerHTML === "O") &&
      s7.innerHTML === s8.innerHTML &&
      s7.innerHTML === s9.innerHTML
    ) {
      gameOver(s7.innerHTML);
    } else if (
      (s1.innerHTML === "X" || s1.innerHTML === "O") &&
      s1.innerHTML === s4.innerHTML &&
      s1.innerHTML === s7.innerHTML
    ) {
      gameOver(s1.innerHTML);
    } else if (
      (s2.innerHTML === "X" || s2.innerHTML === "O") &&
      s2.innerHTML === s5.innerHTML &&
      s2.innerHTML === s8.innerHTML
    ) {
      gameOver(s2.innerHTML);
    } else if (
      (s3.innerHTML === "X" || s3.innerHTML === "O") &&
      s3.innerHTML === s6.innerHTML &&
      s3.innerHTML === s9.innerHTML
    ) {
      gameOver(s3.innerHTML);
    } else if (
      (s1.innerHTML === "X" || s1.innerHTML === "O") &&
      s1.innerHTML === s5.innerHTML &&
      s1.innerHTML === s9.innerHTML
    ) {
      gameOver(s1.innerHTML);
    } else if (
      (s3.innerHTML === "X" || s3.innerHTML === "O") &&
      s3.innerHTML === s5.innerHTML &&
      s3.innerHTML === s7.innerHTML
    ) {
      gameOver(s3.innerHTML);
    }
  }

  restart.addEventListener("click", () => {
    window.location.reload();
  });

  function gameOver(winner) {
    if (!alert(winner + " is the winner!")) {
      window.location.reload();
    }
  }

  //    [s1,s2,s3]
  //    [s4,s5,s6]
  //    [s7,s8,s9]

  //    [s1,s4,s7]
  //    [s2,s5,s8]
  //    [s3,s6,s9]

  //    [s1,s5,s9]
  //    [s3,s5,s7]

  // squares.removeEventListener('click', () => {

  // })
})();
