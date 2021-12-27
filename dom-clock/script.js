"use strict";

let sa = document.querySelector(".sa"); // sa - seconds arm
let ma = document.querySelector(".ma"); // ma - minutes arm
let ha = document.querySelector(".ha"); // ha - hour arm

let tick = setInterval(time, 1000);

function moveArm(arm, d) {
  arm.style.transform = `rotate(${90 + d}deg)`;
}

function time() {
  let date = new Date();
  let seconds = date.getSeconds();
  let minutes = date.getMinutes();
  let hours = date.getHours();

  let secRotate = seconds * (360 / 60);
  let minRotate = minutes * (360 / 60) + secRotate / 60;
  let hRotate = hours * (360 / 12) + minRotate / 60;

  moveArm(sa, secRotate);
  moveArm(ma, minRotate);
  moveArm(ha, hRotate);
}

function stopTick() {
  clearInterval(tick);

  setTimeout(stopTick, 60000);
}
