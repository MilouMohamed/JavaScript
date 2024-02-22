const TITLE_GAME = "Guess The Word MILOU Med ";
document.title = TITLE_GAME;

window.onload = function () {
  main();
};

let wordToGuess = "";
let words = [  "Azer",  "Create",  "Update",
  "Delete",
  "Master",
  "Branch",
  "AZE",
  "Mainly",
  "Elzero",
  "School",
];

function getWordRandom() {
  let myrand = Math.floor(Math.random() * words.length);
  return words[myrand].toLowerCase();
}
wordToGuess = getWordRandom();

// Settign Of GAme
let nbrOfTry = 5;
let curntTry = 1;
let nbr_Hint = 0;
let nbr_disp_Of_Hint = 4;
let nbr_disp_Of_HintOrg = nbr_disp_Of_Hint;

function main() {
  document.querySelector(".titre_global").innerHTML = "Guess The Word";
  document.querySelector("footer").innerHTML = TITLE_GAME;

  let lesInputs = document.querySelectorAll('input[type="text"]');
  let btn_valid = document.querySelector(".chek_word");
  let div_glob_try = document.querySelector(".key");
  let btn_hint = document.querySelector(".hint");
  let messg_ = document.querySelector(".mesasge");

  btn_hint.getElementsByTagName("span")[0].innerHTML = `${nbr_disp_Of_Hint}`;
  // les Buttons Valide et hint
  btn_valid.addEventListener("click", handleGuesse);

  function handleGuesse() {
    btn_valid.innerHTML = wordToGuess;
    console.clear();
    console.log("btn Valide");
    let successGues = true;

    for (let ind_i = 1; ind_i <= wordToGuess.length; ind_i++) {
      let inputField = document.querySelector(
        `#guess-${curntTry}-letter-${ind_i}`
      );
      let letter_ = inputField.value.toLowerCase();
      let actualLetter = wordToGuess[ind_i - 1];
      actualLetter = actualLetter.toLowerCase();

      inputField.classList.remove("y-in-p", "n-in-p", "not_");

      if (actualLetter === letter_) {
        inputField.classList.add("y-in-p");
      } else if (wordToGuess.includes(letter_) && letter_ != "") {
        inputField.classList.add("n-in-p");
        successGues = false;
      } else {
        inputField.classList.add("not_");
        successGues = false;
      }
    }

    if (successGues) {
      // Win
      let msg = `You win The Word Is <span>${wordToGuess}</span>`;
      if (nbr_disp_Of_HintOrg === nbr_disp_Of_Hint)
        msg = `You win without Hint Word=<span>${wordToGuess}</span>`;

      messg_.innerHTML = msg;
      disableLesButns();

      // Add Disabled Class On All Try Divs
      let tut_ = document.querySelectorAll(".les_input");
      tut_.forEach((div) => div.classList.add("disabled_input"));
    } // Lost
    else {
      document
        .querySelector(`.Try-${curntTry}`)
        .classList.add("disabled_input");

      curntTry++;

      let netx_Try = document.querySelector(`.Try-${curntTry}`);

      if (netx_Try) {
        let inpu_Crnt = netx_Try.querySelectorAll("input");
        inpu_Crnt.forEach((inp) => inp.removeAttribute("disabled"));
        netx_Try.classList.remove("disabled_input");
        netx_Try.children[1].focus();
      } else {
        disableLesButns();

        messg_.innerHTML = `You lose The Word Is <span>${wordToGuess}</span>`;
      }
    }
  }

  // Button Hint

  btn_hint.onclick = function () {
    console.clear();
    console.log("Word " + wordToGuess);

    if (nbr_disp_Of_Hint > 0) {
      let curntTry_hnt = document.querySelector(`.Try-${curntTry}`);
      console.log(curntTry_hnt);
      let lesInpt_hint = Array.from(curntTry_hnt.querySelectorAll("input"));

      let randomPlace = Math.floor(Math.random() * nbrOfLetters);
      // let inptVide = lesInpt_hint.filter((inpt) => inpt.value === "");
      let isTrue = true;
      while (isTrue) {
        if (
          wordToGuess[randomPlace] !== lesInpt_hint[randomPlace].value ||
          lesInpt_hint[randomPlace].value === ""
        ) {
          lesInpt_hint[randomPlace].value = wordToGuess[randomPlace];
          isTrue = false;
        } else {
          randomPlace = Math.floor(Math.random() * nbrOfLetters);
          let all_vide = lesInpt_hint.filter(
            (elem) =>
              elem.value === "" ||
              wordToGuess[randomPlace] !== lesInpt_hint[randomPlace].value
          );
          if (all_vide.length === 0) break;
          isTrue = true;
        }
      }

      nbr_disp_Of_Hint--;
      btn_hint.getElementsByTagName("span")[0].innerHTML =
        `${nbr_disp_Of_Hint}`;
    }

    if (nbr_disp_Of_Hint === 0) {
      btn_hint.disabled = true;
      btn_hint.style.cursor = "no-drop";
      return;
    }
  };
 

  let lastChedlBtns = div_glob_try.querySelector(".btn_et_msg");
  div_glob_try.innerHTML = "";

  let nbrOfLetters = wordToGuess.length;

  for (let index = 0; index < nbrOfTry; index++) {
    let tryDiv = document.createElement("div");
    tryDiv.classList.add("les_input");
    tryDiv.classList.add(`Try-${index + 1}`);

    if (index != 0) tryDiv.classList.add("disabled_input");

    let span_of_try = document.createElement("span");
    span_of_try.appendChild(document.createTextNode("TryY " + (index + 1)));
    tryDiv.appendChild(span_of_try);

    for (let j = 0; j < nbrOfLetters; j++) {
      const input = document.createElement("input");
      input.id = `guess-${index + 1}-letter-${j + 1}`;
      input.setAttribute("type", "text");
      input.setAttribute("maxlength", "1");
      tryDiv.appendChild(input);
    }

    div_glob_try.appendChild(tryDiv);
    div_glob_try.appendChild(lastChedlBtns);
  }

  div_glob_try.children[0].children[1].focus();

  // disable les Tabulations
  let inputDisbl = document.querySelectorAll(".disabled_input  input");

  inputDisbl.forEach((inp) => {
    inp.disabled = true;
  });

  // Focuse Next Input
  lesInputs = document.querySelectorAll("input");
  lesInputs.forEach((inpt, indx) => {
    inpt.addEventListener("input", function () {
      if (this.value.length > 0) {
        const nexTunpt = lesInputs[indx + 1];
        if (nexTunpt) nexTunpt.focus();
      }
    });

    inpt.addEventListener("keydown", function (even) {
      let currentIndx = Array.from(lesInputs).indexOf(even.target); // Or this

      if (even.key === "ArrowRight") {
        ++currentIndx;
      } else if (even.key === "ArrowLeft") {
        --currentIndx;
      }

      let inptNext = lesInputs[currentIndx];
      if (inptNext) inptNext.focus();
    });
  });


  // BackSpace
  document.addEventListener("keydown", hendelBackSpac);

  function hendelBackSpac(eve) {
    if (eve.key === "Backspace") {
      const lesInpts = Array.from(
        document.querySelectorAll(".les_input:not(.disabled_input) input")
      );

      //let indxElm = lesInpts.indexOf(document.activeElement);
      let indxElm = lesInpts.indexOf(eve.target); // meme  resulats
      console.log("d a", document.activeElement);
      console.log("ind ", indxElm);

      if (indxElm > 0) {
        lesInpts[indxElm].value = "";
        lesInpts[indxElm - 1].value.clear;
        lesInpts[indxElm - 1].focus();
      }
      console.log(indxElm);
    }
  }

  function disableLesButns() {
    btn_hint.disabled = true;
    btn_hint.style.cursor = "no-drop";
    btn_valid.disabled = true;
    btn_valid.style.cursor = "no-drop";
  }
}

// Milou Med
