const startBtn = document.querySelector(".start")
const screens = document.querySelectorAll(".screen")
const timeList = document.querySelector(".time-list")
let time= 0

console. log(screens);
startBtn.addEventListener("click", () =>{
    screens[0].classList.add("up");
});

timeList.addEventListener("click", (e) =>{
if(e.target.classList.contains("time-btn")){
    screens[1].classList.add("up");
    console.log("time",time)
}
});

