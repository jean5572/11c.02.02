"use strict";
window.addEventListener("DOMContentLoaded", getText);

let i = 0;
//get the text from somewhere
let textHTML = document.querySelector(".typewritten").textContent;

function getText() {
  //clear the HTML area
  document.querySelector(".typewritten").textContent = "";
  // start loops
  loop();
}

function loop() {
  //show the N'th letter:
  // - set textContent to substring of 0 to N
  //Increment N
  //wait before calling loop() again
  //timeout setTimeout(function, number)
  //if statement
  if (i < textHTML.length) {
    document.querySelector(".typewritten").innerHTML += textHTML.charAt(i);
    i++;
    setTimeout(loop, 500);
  }
}
