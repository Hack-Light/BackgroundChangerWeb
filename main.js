function $(tag) {
  return document.querySelector(tag);
}

let play = $("#continous");
let stopbtn = $("#stop");
let change = $("#change");
let body = $("#full");
let hexCode = $("#hexCode");

let timer;

function code_gen() {
  let result = "#";
  let code = Math.floor(Math.random() * 16777215).toString(16);
  return result + code;
}

let changeColor = () => {
  let code = code_gen();
  hexCode.innerHTML = code;
  body.style.backgroundColor = code;
};

change.addEventListener("click", changeColor);

play.addEventListener("click", () => {
  timer = setInterval(changeColor, 200);
  stopbtn.style.display = "block";
});

stopbtn.addEventListener("click", () => {
  console.log("clicked");
  clearInterval(timer);
  stopbtn.style.display = "none";
});
