console.log("first");

window.onload = () => {



/*********Nav Bar ***************************** */


var btn_nav = document.querySelector("#btn-nav");

btn_nav.addEventListener("click",()=>{

  var navbar =document.querySelector(".ul-ligne-nav");
   etat=navbar.classList.contains("block_nav");
   if(etat ){ 
       navbar.classList.add( "none_nav");
       navbar.classList.remove( "block_nav");
    }
    else {
        navbar.classList.add( "block_nav");
        navbar.classList.remove( "none_nav");
    }
     
})
// ferme menu
var doc= document.querySelector(".contaiber_div") ; 
     doc.addEventListener('click',()=>{
    var navbar =document.querySelector(".ul-ligne-nav");
    etat=navbar.classList.contains("block_nav");
    if(etat ){ 
        navbar.classList.add( "none_nav");
        navbar.classList.remove( "block_nav");
     } 
});









    /******Text SHow ****************** */
  function sleep(milliseconds) {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  }

  
  async function addText(elemnt_txt) {
      var my_h1 = document.querySelector(elemnt_txt);
      console.log(my_h1);
    var txt = my_h1.innerHTML+" ...";
    console.log(txt, txt.length);
    my_h1.innerHTML = "";

    for (let index = 0; index < txt.length; index++) { 
      my_h1.innerHTML += txt[index];
      await sleep(100); 
    }
  }
 

  addText(".my-h1");
};
