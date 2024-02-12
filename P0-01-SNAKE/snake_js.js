import { getInputDerection } from "./input_key_down.js";

export const SNAKE_SPEAD = 4; // Fois Par Second
const GRID_SIZE = 21;
let snakBody = [
  { x: 10, y: 11 },
  // { x: 11, y: 11 },
  // { x: 12, y: 11 },
  //   { x: 13, y: 11 },
];

export function drawSnk(gameBoard) {
  snakBody.forEach((segment) => {
    let snakeElement = document.createElement("div");
    snakeElement.style.gridColumnStart = segment.x;
    snakeElement.style.gridRowStart = segment.y;
    snakeElement.classList.add("snake");

    gameBoard.appendChild(snakeElement);
  });
}

export function updateSnk() {
  let derect__ = getInputDerection();
 

  for (let i = snakBody.length - 2; i >= 0; i--) {
    snakBody[i + 1] = { ...snakBody[i] };
  }

  snakBody[0].y += derect__.y;
  snakBody[0].x += derect__.x;

  if (snakBody[0].y === 5 && snakBody[0].x === 5) {
    snakBody[snakBody.length] = { ...snakBody[snakBody.length] };
  }
   isOutOfBordGame();
}

export function expandeSnake(expand_nbr) {
  for (let index = 0; index < expand_nbr; index++) {
    snakBody.push({ ...snakBody[snakBody.length - 1] });
  }
}

export function onSnake(posi_, { ignoreHead = false } = {}) {
  let isIn = false;
  snakBody.forEach((elem, indx) => {
    if (ignoreHead && indx === 0) return false;
    if (elem.x == posi_.x && elem.y == posi_.y) {
      isIn = true;
    }
  });

  return isIn;
}

export function isTruuu(tr) {
  return tr;
}

export function isOutOfBordGame() {
  let tete_Snk = snakBody[0];

  if (
    tete_Snk.x < 1 ||
    tete_Snk.x > GRID_SIZE ||
    tete_Snk.y < 1 ||
    tete_Snk.y > GRID_SIZE
  ) {
    restartGAme(); 
    return true; 
  }

  if (onSnake(tete_Snk, { ignoreHead: true })) {
    restartGAme(); 
    return true;
  }
}

function restartGAme() {
  if(confirm("You Lose !!! \nTry ???")) {
    window.location="/inddex.html";
    snakBody = [{ x: 10, y: 11 }];  
  } 
}
 
