window.onload = () => {
  let span_Next = document.querySelector(".prev");
  let span_Pev = document.querySelector(".next");
  let lesImaes = document.querySelectorAll(".slider-container img");
  let pgCre = document.querySelector(".paginations");
  let span_slide_nbr = document.getElementById("number-sider");

  // Les options
  let currentSlide = 0;
  lesImaes[currentSlide].className = "active";

  span_Next.style.cursor = "no-drop";
  let nbrImg = lesImaes.length;

  span_slide_nbr.innerHTML = `Slider #${+currentSlide + 1} / ${nbrImg}`;
  addPagination();
  fun_pagination();

  span_Pev.onclick = () => {
    ++currentSlide;
    prev_Next_Slider("P", null);
  };

  span_Next.onclick = () => {
    --currentSlide;
    prev_Next_Slider("M", null);
  };

  pgCre.addEventListener("click", slider_on_click);

  function prev_Next_Slider(sign, pagin) {
    if (pagin) currentSlide = pagin;

    span_slide_nbr.innerHTML = `Slider #${+currentSlide + 1} / ${nbrImg}`;

    fun_pagination();
    span_Pev.style.cursor = "pointer";
    span_Next.style.cursor = "pointer";

    if (sign === "P" && currentSlide >= nbrImg - 1) {
      currentSlide = nbrImg - 1;
      span_Pev.style.cursor = "no-drop";
    } else if (sign === "M" && currentSlide <= 0) {
      currentSlide = 0;
      span_Next.style.cursor = "no-drop";
    }

    if (currentSlide >= 0 && currentSlide < nbrImg) {
      lesImaes.forEach((iimmgg) => {
        iimmgg.classList.remove("active");
      });
      lesImaes[currentSlide].className = "active";
    } else {
      console.log("C est le dernier");
    }
  }

  function fun_pagination() {
    
    if (currentSlide >= 0 && currentSlide < nbrImg) {
      let li_s = Array.from(pgCre.children[0].children);
      
      li_s.forEach((li_elem) => {
        li_elem.classList.remove("is-on");
      }); 
      li_s[currentSlide].classList.add("is-on");
      
      /*
      // let lesPaginat = document.querySelectorAll(".paginations .ul-pagin li");
    if (currentSlide >= 0 && currentSlide < nbrImg) {
      lesPaginat.forEach((li_peg) => {
        li_peg.classList.remove("is-on");
      });
      lesPaginat[currentSlide].classList.add("is-on");
    }
    */
    }
  }

  function addPagination() {
    pgCre.innerHTML = "";
    let ul_ = document.createElement("ul");
    ul_.className = "ul-pagin";

    for (let index = 0; index < nbrImg; index++) {
      let li_ = document.createElement("li");
      li_.innerHTML = index + 1;
      li_.dataset.iidd = index;
      if (index === 0) li_.className = "is-on";

      ul_.appendChild(li_);
    }
    pgCre.appendChild(ul_);
  }

  function slider_on_click(eve) {
    currentSlide = eve.target.dataset.iidd;
    prev_Next_Slider("", currentSlide);
  }
};
// Milou Med
