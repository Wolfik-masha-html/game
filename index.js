const startBtn = document.querySelector(".start");
const screens = document.querySelectorAll(".screen");
const timeList = document.querySelector(".time-list");
const reload = document.querySelector(".game-new");
const board = document.querySelector(".board");
const timeEl = document.querySelector("#time");

let time = 0;
let score = 0;

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

  board.addEventListener("click", (e) => {
    if (e.target.classList.contains("circle")){
      score++;
      e.target.remove();
      createRandomCircle();
    }
  })

function startGame() {
  setInterval(decreaseTime, 1000);
  createRandomCircle()
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

function getRandomNumber(min, max){
  return Math.round(Math.random() * (max - min) + min);
};
function createRandomCircle() {
  const circle = document.createElement("div")
  const size = getRandomNumber(20,80);
  const { width, heigh } = board.getBoundingClientRect();
  const x = getRandomNumber(0, width-size);
  const y = getRandomNumber(0, heigh-size);

  circle.classList.add("circle");
  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;
  circle.style.top = `${y}px`;
  circle.style.left = `${x}px`;

  board.append(circle);
}
function finishGame(){
    board.innerHTML = `<h3>your score:${score}</h3>`
    timeEl.parentNode.classList.add("hide")
}
reload.addEventListener("click", () => {
  location.reload();
});

