/*
document.documentElement.scrollHeight (All height Visible Or Note)
document.documentElement.clientHeight (Visible Content Padding)
*/

let heig_ =document.documentElement.scrollHeight - document.documentElement.clientHeight; 
  
document.addEventListener("scroll", () => {

    console.log("clientHeight "+document.documentElement.clientHeight);
    

  let scrol_Top = document.documentElement.scrollTop;
  scrol_Top = (scrol_Top / heig_) * 100;

  let my_prog = document.querySelector(".my_prog");
  let my_prog_2 = document.querySelector(".my_prog_2");

  // Div 1
  my_prog.style.backgroundImage = ` linear-gradient(45deg,green ${scrol_Top}% , red ${scrol_Top}%) `;
  my_prog.style.backgroundImage = ` -webkit-linear-gradient(45deg,green ${scrol_Top}% , red ${scrol_Top}%) `;
  my_prog.style.backgroundImage = `-moz-linear-gradient(45deg,green ${scrol_Top}% , red ${scrol_Top}%) `;
  my_prog.style.backgroundImage = `-o-linear-gradient(45deg,green ${scrol_Top}% , red ${scrol_Top}%) `;
  my_prog.style.backgroundImage = `-ms-linear-gradient(45deg,green ${scrol_Top}% , red ${scrol_Top}%) `;
 

 

    
  // Div 2
  my_prog_2.style.width = `${scrol_Top}%`;
//   console.log(scrol_Top);
});


// MILOU MED 
