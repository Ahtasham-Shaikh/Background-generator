let selectedClr1 = document.querySelector("#color1");
let selectedClr2 = document.querySelector("#color2");
let body = document.querySelector("body");

function setGradient(){
  body.style = "background: linear-gradient(to left, " + selectedClr1.value + "," + selectedClr2.value + ")";
}

selectedClr1.addEventListener("input", setGradient)

selectedClr2.addEventListener("input", setGradient)
