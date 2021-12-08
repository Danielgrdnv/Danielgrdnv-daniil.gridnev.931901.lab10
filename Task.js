let curtain = document.getElementById("curtain");
let triangle = document.getElementById("triangle");
let girl = document.getElementById("girl");
let lamp = document.getElementById("lamp");
let lampToggle = document.getElementById("lampToggle");
let rabbit = document.getElementById("rabbit");
let pigeon = document.getElementById("pigeon");
let hat = document.getElementById("hat");
let animalSwitch = document.getElementById("animalSwitch");

triangle.classList.toggle("visible");
girl.classList.toggle("visible");
lamp.classList.toggle("visible");
lampToggle.classList.toggle("visible");
hat.classList.toggle("visible");
rabbit.classList.toggle("visible");
pigeon.classList.toggle("visible");
animalSwitch.classList.toggle("visible");

curtain.onclick = function () {
  curtain.style.bottom = "100%";
  curtain.style.transition = "1s";
  lamp.classList.toggle("visible");
  lampToggle.classList.toggle("visible");
  lampToggleSwitch.toggle("visible");
};

lampToggleSwitch.onmousedown = function () {
  girl.classList.toggle("visible");
  triangle.classList.toggle("visible");
  hat.classList.toggle("visible");
  animalSwitch.classList.toggle("visible");
  rabbit.classList.toggle("visible");
  pigeon.classList.toggle("visible");
  rabbit.style.bottom = "35%";
  pigeon.style.bottom = "17%";

  lampToggle.style.top = "12%";
  lampToggle.style.transition = "0.2s";
};

lampToggleSwitch.onmouseup = function () {
  lampToggle.style.top = "10%";
  lampToggle.style.transition = "0.2s";
};

let x = true;
animalSwitch.onclick = function () {
  pigeon.style.transition = "0.5s";
  rabbit.style.transition = "0.5s";
  if (x) {
    setTimeout(()=>{pigeon.style.bottom = "35%";},500);
    rabbit.style.bottom = "17%";
  } else {
    setTimeout(()=>{rabbit.style.bottom = "35%";},500);
    pigeon.style.bottom = "17%";
  }
  x=!x;
};
