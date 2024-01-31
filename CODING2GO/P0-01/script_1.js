 

let btn_close=document.querySelector(".btn_close_sb");

btn_close.onclick=function(){
    console.log("btn_close_sb");
    document.querySelector(".side-bar").style.display="none";
}

let btn_open=document.querySelector(".btn_open_sb");

btn_open.onclick=function(){
    console.log("btn_open_sb");
    document.querySelector(".side-bar").style.display="flex";
}



