window.onload = () => {
  // get Elemnts
  let div_landig_pg = document.querySelector(".landing-page");
  let btn_setting = document.querySelector(".settings-box .bedof_i");
  let listColors = document.querySelectorAll(
    ".settings-container .colors-list li"
  );
  let spanRandomBG = document.querySelectorAll(".settings-box .random-bg span");
  let skills_div = document.querySelector(".skills");
  
let  lesBullets_spn=document.querySelectorAll('.option-box .bullet-bnt span'); 
  //   let nnn= [{ti:"nom1",ag:55},{ti:"nom2",ag:1055},{ti:"nom3",ag:25}];
  // console.table(nnn);
  // Les Options
  let list_Img = [
    "Image0007.jpg",
    "Image0002.jpg",
    "Image0003.jpg",
    "Image0004.jpg",
    "Image0005.jpg",
  ];

  let color_lctr = localStorage.getItem("color_options");
  if (color_lctr) {
    document.documentElement.style.setProperty("--color-orange", color_lctr);

    listColors.forEach((elem_li) => {
      elem_li.classList.remove("active");
      if (color_lctr == elem_li.dataset.colorLi) {
        elem_li.classList.add("active");
      }
    });
  }

  // background Random
  let myTimerInterval = null;

  // function random BG:
  function random_backGround(start) {
    if (start === "no") {
      clearInterval(myTimerInterval);
      return false;
    }
    myTimerInterval = setInterval(() => {
      let rand_indx = Math.floor(Math.random() * list_Img.length);
      div_landig_pg.style.backgroundImage = `url('./imgs/image_1920_1080/1920-1080-${list_Img[rand_indx]}')`;
    }, 1500);
  }

  //check if bg Random in  Local Storage
  let bg_lctr = localStorage.getItem("bg_options");
  if (bg_lctr) {
    spanRandomBG.forEach((el) => {
      el.classList.remove("active");
      if (el.dataset.bg === bg_lctr) {
        el.classList.add("active");
        random_backGround(bg_lctr);
      }
    });
  }

  btn_setting.addEventListener("click", () => {
    btn_setting.parentElement.classList.toggle("open");
  });

  listColors.forEach((lis_elem) => {
    lis_elem.addEventListener("click", (eee) => {
      document.documentElement.style.setProperty(
        "--color-orange",
        eee.target.dataset.colorLi
      );
      localStorage.setItem("color_options", eee.target.dataset.colorLi);
 
      handleClikc(eee); 

    });
  });

  //Button Random Bg
  spanRandomBG.forEach((elem) => {
    elem.onclick = (e) => {

      handleClikc(e); 

      localStorage.setItem("bg_options", e.target.dataset.bg);
      random_backGround(e.target.dataset.bg);
    };
  });

  //Scrolling To Skills
  window.onscroll = () => {
    //  console.clear();
    // Skills Offset Top  // l3lo man fo9;
    let skillsOfsetTop = skills_div.offsetTop;
    // console.log(skillsOfsetTop);

    // Skills Outer Height   ;
    let skillsHeight = skills_div.offsetHeight;
    //  console.log("skillsHeight "+skillsHeight);

    // Window Height  ;
    let window_Height = window.innerHeight;
    // console.log("window_Height "+window_Height);

    // Window Height  ;
    let windowScrol = this.pageYOffset;
    // console.log("windowScrol  "+windowScrol);

    let allSkils = document.querySelectorAll(
      ".skills .skill-box .skill-progres span"
    );
    allSkils.forEach((span) => {
      span.style.width = "0%";
    });

    if (windowScrol > skillsOfsetTop + skillsHeight - window_Height) {
      allSkils.forEach((span) => {
        span.style.width = span.dataset.progresskil;
      });
    }
  };

  // create Popup Images

  let lesImages_list = document.querySelectorAll(".gallery .box-img img");

  lesImages_list.forEach((img_) => {
    img_.addEventListener("click", (e) => {
      let overlay = document.createElement("div");
      overlay.className = "popup-overly";
      document.body.appendChild(overlay);

      let popupBox = document.createElement("div");
      popupBox.className = "popup-box";

      // create title For The Image
      if (img_.alt) {
        let title_img = document.createElement("h3");
        title_img.appendChild(document.createTextNode(img_.alt));
        title_img.style.textAlign = "center";
        popupBox.appendChild(title_img);
      }
      // create Image and add to popup
      let iimmgg = document.createElement("img");
      iimmgg.src = img_.src;

      popupBox.appendChild(iimmgg);
      document.body.appendChild(popupBox);

      // Create Close Botton
      let closeBtn = document.createElement("span");
      closeBtn.className = "close-buttton";
      closeBtn.innerHTML = "X";
      popupBox.appendChild(closeBtn);

      // Click Close Bottom
      // document.addEventListener('click',(e)=> {
      document
        .querySelector(".close-buttton")
        .addEventListener("click", (e) => {
          // if(e.target.className ==="close-buttton"){
          e.target.parentElement.remove();
          document.querySelector(".popup-overly").remove();
          // } 
        });
    });
  });

  // Bullets Click and Scroll
  let bullets_items = document.querySelectorAll(".nav-bullets .bullet"); 
  scrollToSomeWher(bullets_items);

  // NavLiks Click and Scroll
  let links_items = document.querySelectorAll(".header-area .links a"); 
  scrollToSomeWher(links_items); 



function scrollToSomeWher(elemns) { 

  elemns.forEach((elem) => {

    elem.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(e.target.dataset.section).scrollIntoView({
        behavior: "smooth"
      });  
    });

  });
}
let cot_blt=bullets_items[0].parentElement;

if(localStorage.getItem('hide-show_options'))
{  
  isActiveBtn(); 

  if(localStorage.getItem('hide-show_options')=="true") {
    cot_blt.style.display="block"; 
    isActiveBtn("show");
  }  
  if(localStorage.getItem('hide-show_options')=="false") {
    cot_blt.style.display="none"; 
    isActiveBtn("hide");

  }
}

function isActiveBtn(nameClass) {
  
  lesBullets_spn.forEach(ele=> {
    ele.classList.remove("active");

    if(ele.dataset.target===nameClass ) {
      ele.classList.add("active"); 
    }
  }) 
}


lesBullets_spn.forEach(elem_spn => {
  elem_spn.addEventListener('click' ,(e)=>{  
 

    if(e.target.dataset.target === "show") {
      cot_blt.style.display="block";
      localStorage.setItem('hide-show_options',true);
    }
    else  if(e.target.dataset.target === "hide") {
      cot_blt.style.display="none";
      localStorage.setItem('hide-show_options',false);

    }
 
handleClikc(e);
  })

});




function handleClikc(ev) {
  
  ev.target.parentElement.querySelectorAll(".active").forEach((ele_li) => {
        ele_li.classList.remove("active");
      });

      ev.target.classList.add("active");
}



// Button Reset Options 
document.querySelector('.settings-box .btn-reset-option').onclick=()=>{

console.log("object");
// localStorage.clear();
localStorage.removeItem("hide-show_options") ;
localStorage.removeItem("bg_options") ;
localStorage.removeItem("color_options") ; 
window.location.reload();
}
};
