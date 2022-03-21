"use strict";
let percent = document.querySelector(".percent");
let percent1 = document.querySelector(".percent1");
let btn = document.querySelector("button");
let img = document.querySelector("img");

let a = 100;
percent1.style.opacity = 0;
btn.addEventListener("click", function () {
  percent1.style.opacity = 1;
  let r = setInterval(function () {
    percent.innerHTML = `<h1 class="big">${a--}</h1>`;
    if (a == -1) {
      clearInterval(r);
      percent1.style.opacity = 0;
    }
    img.style.filter = `blur(${a--}px)`;
  }, 50);

  document.querySelector(".big").style.color = "brown";
});

percent1.prepend(percent);
