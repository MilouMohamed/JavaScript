// js Big tutoriel
window.onload=function(){
    
// select Elements
var span_contr=document.querySelector(".quiz_info_count span");  
let spans_parent_bulet=document.querySelector('.bullets > .spans');
let title_quest=document.querySelector('.quiz_area_qust h2');

let indx_Quest=0;
 

function get_Data() {
  let myReque = new XMLHttpRequest();

  myReque.onload = function () {
  
    if (this.status === 200 && this.readyState === 4) {
      myReque = JSON.parse(this.responseText);
      console.log(myReque);
      createBullest(myReque.length);
      addQuestData(myReque);
    } else {
      console.log("Pas de donnes ");
    }


  };

  myReque.open("GET", "json_Quiz_App.json", true);
  myReque.send();
}

get_Data();


function createBullest(nbr){

    span_contr.innerHTML=nbr;

spans_parent_bulet.innerHTML="";
   
for (let index = 1; index <= nbr; index++) { 
    
         let the_bullet=document.createElement("span");
         the_bullet.innerHTML=index;
         the_bullet.style.textAlign="center";
         the_bullet.style.color="white";
         if(index === 1 ) the_bullet.classList.add("on");
         spans_parent_bulet.appendChild(the_bullet);
   
}
   
}

function addQuestData(my_arr){

    title_quest.textContent=my_arr[indx_Quest].title+" 444";
    console.log(my_arr);
    for (let index = 0; index < 4; index++) {
        
        document.querySelector(`.answer_${index}`).textContent=my_arr[indx_Quest][`.answer_${index}`]
        
    }
// let nbrOfque=

}

}