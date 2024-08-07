onload = function () {

function toast(txt){
var toas_med=document.querySelector(".toast_med"); 
  var btn_close =toas_med.querySelector("button");

  var span_txt =toas_med.querySelector("span");

  span_txt.innerHTML=txt;
  console.log(span_txt.innerHTML);
  btn_close.addEventListener("click",()=>{
    
  toas_med.style.display="none";
  toas_med.style.zIndex="-5";  
  clearTimeout(mytimer);
  })
 
 
toas_med.style.display="block"; 
toas_med.style.zIndex="5";  
 
var mytimer= setTimeout(()=>{    
  toas_med.style.display="none";
  toas_med.style.zIndex="-5";   

},4000)
 
}


















  btn = document.querySelector("#voir");
btn.addEventListener("click",()=>{

txt= document.getElementById("txt");
  toast(txt); 

var tab=txt.value.split(" ");
var  tab_n=[];
for (let index = 0; index < tab.length; index++) {

    tab_n.push(tab[index].charAt(0).toUpperCase() +(tab[index].toLowerCase()).slice(1) ); 
} 
    txt.value=tab_n.join(" ");
    toast(txt.value);
 
})
 


};
