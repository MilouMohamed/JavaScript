window.onload = () => {
  // get Elemnts
  let div_landig_pg = document.querySelector(".landing-page");
  let btn_setting = document.querySelector(".settings-box .bedof_i");
  let listColors = document.querySelectorAll(
    ".settings-container .colors-list li"
  );
  let spanRandomBG = document.querySelectorAll(".settings-box .random-bg span");
  let skills_div = document.querySelector(".skills");
  let nnn= [{ti:"nom1",ag:55},{ti:"nom2",ag:1055},{ti:"nom3",ag:25}];
console.table(nnn);
  // Les Options
  let list_Img = [
    "Image0007.jpg",
    "Image0002.jpg",
    "Image0003.jpg",
    "Image0004.jpg",
    "Image0005.jpg",
  ];

  let color_lctr = localStorage.getItem("setting_box_clr");
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
    }, 1000);
  }

  //check if bg Random in  Local Storage
  let bg_lctr = localStorage.getItem("setting_box_bg");
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
      localStorage.setItem("setting_box_clr", eee.target.dataset.colorLi);

      //  lis_elem.querySelectorAll('.active').forEach
      eee.target.parentElement.querySelectorAll(".active").forEach((ele_li) => {
        ele_li.classList.remove("active");
      });

      eee.target.classList.add("active");
    });
  });

  //Button Random Bg
  spanRandomBG.forEach((elem) => {
    elem.onclick = (e) => {
      e.target.parentElement
        .querySelector(".active")
        .classList.remove("active");
      // .forEach((elm) => elm.classList.remove("active"));
      e.target.classList.add("active");
      localStorage.setItem("setting_box_bg", e.target.dataset.bg);
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

let lesImages_list=document.querySelectorAll('.gallery .box-img img');

lesImages_list.forEach(img_ => { 
img_.addEventListener("click",(e)=>{  
 
  let overlay=document.createElement('div');
  overlay.className="popup-overly";
  document.body.appendChild(overlay);

  let popupBox=document.createElement('div');
  popupBox.className="popup-box";

   // create title For The Image
   if(img_.alt) { 
    let title_img= document.createElement('h3');
    title_img.appendChild(document.createTextNode(img_.alt));
    title_img.style.textAlign="center"; 
    popupBox.appendChild(title_img); 
  }
// create Image and add to popup
  let iimmgg=document.createElement('img');
  iimmgg.src=img_.src; 

  popupBox.appendChild(iimmgg); 
  document.body.appendChild(popupBox);

 
  // Create Close Botton
  let closeBtn= document.createElement("span");
  closeBtn.className="close-buttton";
  closeBtn.innerHTML="X";
  popupBox.appendChild(closeBtn);

  // Click Close Bottom
  // document.addEventListener('click',(e)=> {
    document.querySelector(".close-buttton").addEventListener('click',(e)=> {

    // if(e.target.className ==="close-buttton"){
      e.target.parentElement.remove();
      document.querySelector(".popup-overly").remove();
    // }
console.log(e.target);

  })

})









});


};
