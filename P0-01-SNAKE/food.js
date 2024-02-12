 
 
   import { expandeSnake,onSnake  } from "./snake_js.js"; 
  
let food =  {x:14,y:10};
let EXPAND_SNAKE =1; 
 
export function droawF (gameBodrFood) {
  let diiv = document.createElement("div");
  diiv.style.gridColumnStart = food.x;
  diiv.style.gridRowStart = food.y;
  diiv.classList.add("food");
  gameBodrFood.appendChild(diiv); 
   
 

if(onSnake(food))
{  
    expandeSnake(EXPAND_SNAKE);
    food =   positionRandomFood(); 
}     
} 
   
 


function positionRandomFood(){

  let posFood=food; 

while (posFood === food || onSnake(posFood) ) { 
  return {
    x:Math.floor(Math.random() * 21 )+1,
    y:Math.floor(Math.random() * 21 )+1
  }
}

}
console.log("Creer Par Milou MED") ;