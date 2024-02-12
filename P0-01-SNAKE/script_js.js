import { droawF as drawFood } from "./food.js";
import {
  SNAKE_SPEAD,
  updateSnk as u_s_f,
  drawSnk as d_s_f
} from "./snake_js.js";

setTimeout(() => {
  document.querySelector('.conta-all').style.opacity=1; 
}, 1500);



let gameBord = document.querySelector(".myconta");
 
let lastTime = 0;

function main(currentTime) {
 
  window.requestAnimationFrame(main);

  let deferentTime = +((currentTime - lastTime) / 1000).toFixed(2);

  if (deferentTime < 1 / SNAKE_SPEAD) return;

  lastTime = currentTime; 
  u_s_f_snk();
  d_s_f_snk();
}
window.requestAnimationFrame(main);

function u_s_f_snk() {
  gameBord.innerHTML = "";
  u_s_f(); 
}

function d_s_f_snk() {
  d_s_f(gameBord);
  drawFood(gameBord);
}
