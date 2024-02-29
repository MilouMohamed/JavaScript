// js Big tutoriel
window.onload = function () {
  // select Elements
  var span_contr = document.querySelector(".quiz_info_count span");
  let spans_parent_bulet = document.querySelector(".bullets > .spans");
  let bullets_ = document.querySelector(".bullets");
  let quest_Title = document.querySelector(".quiz_area_qust");
  let areas_Answer = document.querySelector(".answer_area");
  let btn_submt = document.querySelector(".bnt_submit");
  let resultas = document.querySelector(".resultas");
  let contDownDiv = document.querySelector(".countdown_");

  //Set Options
  let curt_Indx = 0;
  let rithAnswersNbr = 0;
  let nbrOfSecond=4;

  // timer
  let timer;

  function get_Data() {
    let myReque = new XMLHttpRequest();

    myReque.onload = function () {
      if (this.status === 200 && this.readyState === 4) {
        myReque = JSON.parse(this.responseText);
        
        let qCount = myReque.length;
        createBullest(myReque.length);

        addQuestData(myReque[curt_Indx], qCount);

        countDown(nbrOfSecond, qCount);

        btn_submt.onclick = () => {
          let repons = document.querySelector("input:checked[name='question']");
          //Timer
          clearInterval(timer);
          countDown(nbrOfSecond, qCount);

          checkAnswer(
            myReque[curt_Indx]["right_answer"],
            repons.dataset.answer
          );

          curt_Indx++;
          areas_Answer.innerHTML = "";
          quest_Title.innerHTML = "";

          if (curt_Indx >= qCount) {
            btn_submt.disabled = true;
            btn_submt.style.cursor = "no-drop";
            questIsFinish(qCount);
            return;
          }
          addQuestData(myReque[curt_Indx], qCount);

          bulletsSpan(curt_Indx);
        };
      } else {
        console.log("Pas de donnes ");
      }
    };

    myReque.open("GET", "json_Quiz_App.json", true);
    myReque.send();
  }

  get_Data();

  function createBullest(nbr) {
    span_contr.innerHTML = nbr;

    spans_parent_bulet.innerHTML = "";

    for (let index = 1; index <= nbr; index++) {
      let the_bullet = document.createElement("span");
      the_bullet.innerHTML = index;
      the_bullet.style.textAlign = "center";
      the_bullet.style.color = "white";
      if (index === 1) the_bullet.classList.add("on");
      spans_parent_bulet.appendChild(the_bullet);
    }
  }

  function addQuestData(elem, nbr_) {
    // quest_Title
    let myH2 = document.createElement("h2");
    myH2.textContent = elem.title;
    quest_Title.innerHTML = "";
    quest_Title.appendChild(myH2);

    areas_Answer.innerHTML = "";
    for (let iinndd = 1; iinndd <= 4; iinndd++) {
      let myAnswr = document.createElement("div");
      myAnswr.className = "answer";
      let inptt = document.createElement("input");
      inptt.setAttribute("type", "radio");
      inptt.setAttribute("name", "question");
      inptt.setAttribute("id", `answer_${iinndd}`);
      // inptt.setAttribute("data-Attri",`${elem["right_answer"]}`);
      inptt.dataset.answer = elem[`answer_${iinndd}`];
      if (iinndd === 1) inptt.checked = true;
      let labll = document.createElement("label");
      // labll.setAttribute("for",`anser_${iinndd}`);
      labll.htmlFor = `answer_${iinndd}`;
      let textLable = document.createTextNode(elem[`answer_${iinndd}`]);

      labll.appendChild(textLable);

      myAnswr.appendChild(inptt);
      myAnswr.appendChild(labll);
      areas_Answer.appendChild(myAnswr); 
    }
  }

  function checkAnswer(rightAnswer, repons_) {
    console.log("rightAnswer " + rightAnswer);

    if (rightAnswer === repons_) {
      rithAnswersNbr++; 
    } 
    // btn_submt.textContent = rightAnswer + " " + rithAnswersNbr;
  }

  function bulletsSpan(currentQuest) {
    let span_S = document.querySelectorAll(".spans span");
    /*for (let index = 0; index < span_S.length; index++) { 
    span_S[index].classList.remove("on");
    }
    span_S[currentQuest].classList.add("on");
 */
    span_S[currentQuest].className = "on";
  }

  function questIsFinish(qCount) { 

    if (curt_Indx === qCount) {
      bullets_.remove();
      quest_Title.remove();
      areas_Answer.remove();
      btn_submt.remove();

      let msg = `<span class="bad">Bad</span>, ${rithAnswersNbr} From  ${qCount}`;

      if (rithAnswersNbr > qCount / 2 && rithAnswersNbr < qCount) {
        msg = `<span class="good">Good</span>, ${rithAnswersNbr} From  ${qCount}`;
      } else if (rithAnswersNbr === qCount) {
        msg = `<span class="perf">Perfect</span>,All Answer Is Good`;
      }
      resultas.innerHTML = msg;
    }
  }

  function countDown(duration, count) {
    if (curt_Indx < count) {
      let min_ = 0,
        sec_ = 0;
      timer = setInterval(() => {
        min_ = parseInt(duration / 60);
        sec_ = parseInt(duration % 60);

        min_ = min_ < 10 ? `0${min_}` : min_;
        sec_ = sec_ < 10 ? `0${sec_}` : sec_;

        contDownDiv.innerHTML = min_ + " : " + sec_;

        if (--duration < 0) {
          clearInterval(timer);
          btn_submt.click();
          duration = 0;
        }
      }, 1000);
    }
  }
};

// MILOU Med
