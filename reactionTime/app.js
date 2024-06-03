let main = document.querySelector(".main");
let container = document.querySelector(".container");
let heading = document.querySelector(".heading");
let para = document.querySelector(".para");
let check = false;
let startTime = 0;
let elapsedTime = 0;
let timer = null;
let ran = Math.floor(Math.random() * 3000) + 1000;
let turnGreen = null;
let reset = document.querySelector(".reset");

function start(callback) {
  if (!check) {
    startTime = Date.now();
    check = true;
    main.style.backgroundColor = "rgb(206, 38, 54)";
    heading.textContent = "Waiting for green";
    para.textContent = "";
  }

  turnGreen = setTimeout(() => {
    main.style.backgroundColor = "rgb(75, 219, 106)";
    startTime = Date.now();
  }, ran);

  main.addEventListener("click", (event) => {
    if (check) main.style.backgroundColor = "#2b87d1";
    let currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    heading.textContent = `${elapsedTime}ms`;
    check = false;
    clearTimeout(turnGreen);
    reset.style.visibility = "visible";
  });
}
