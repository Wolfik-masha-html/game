const startBtn = document.querySelector(".start");
const screens = document.querySelectorAll(".screen");
const timeList = document.querySelector(".time-list");
const reload = document.querySelector(".game-new");
const board = document.querySelector(".board");
const timeEl = document.querySelector("#time");
let time = 0;

console.log(reload);
startBtn.addEventListener("click", () => {
  screens[0].classList.add("up");
});

timeList.addEventListener("click", (e) => {
    if (e.target.classList.contains("time-btn")) {
      time = parseInt(e.target.getAttribute("data-time"));
      screens[1].classList.add("up");
      console.log("time:", time);
      startGame();
    }
  });

function startGame() {
  setInterval(decreaseTime, 1000);
  setTime(time);
}

function decreaseTime() {
    if (time === 0) {
      finishGame();
    } else {
      let current = --time;
      if (current < 10) {
        current = `0${current}`;
      }
      setTime(current);
    }
  }
function setTime(value) {
  timeEl.innerHTML = `00:${value}`;
}

function finishGame(){
    board.innerHTML = `<h3>your score</h3>`
}
reload.addEventListener("click", () => {
  location.reload();
});

