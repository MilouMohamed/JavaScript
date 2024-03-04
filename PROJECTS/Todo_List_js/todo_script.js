window.onload = () => {
  //Setting Varialble
  let list_taskS = [{
    title:"ABc",Complt:true
},{
    title:"CBD",Complt:false
},{
    title:"FRG",Complt:true
},{
    title:"MTY",Complt:true
},];
  let btn_add = document.querySelector(".plus");
  let inpt_tsk = document.querySelector('.add-task input[name="task"]');
  let tasks_div = document.querySelector(".task-content");

  let nbrTotal = document.querySelector(".task-count span");
  let nbrCompt = document.querySelector(".div-all-comple-nbr span");

  if_no_Tasks();

  //  Botton Add
  btn_add.onclick = () => {
    add_tasks({title:inpt_tsk.value ,Complt:false});
    inpt_tsk.value = "";
    inpt_tsk.setAttribute("placeholder", "Add task her");
  };

  //  Botton Add
  document.addEventListener("click", (eve) => {
    if (eve.target.className == "delete") {
      console.log(eve.target.parentElement.childNodes[0].nodeValue);
      let tsk = eve.target.parentElement.childNodes[0].nodeValue;
      list_taskS = list_taskS.filter((elem) => {
        return elem.title != tsk;
      });
      show_Tasks();
      nbr_Count_Complet();
    }

    if (eve.target.classList.contains("task-box")) {
      eve.target.classList.toggle("complet-task");
      nbr_Count_Complet();

      console.log(eve.target.childNodes[0].nodeValue);
      let txt=eve.target.childNodes[0].nodeValue;
      list_taskS.forEach(tsk => {
        if(tsk.title === txt) 
        tsk.Complt = ! tsk.Complt;
      });
      
    }
  });

  window.onkeyup = (ev) => {
    if (ev.key === "Enter") {
      btn_add.click();
    }
  };

  function add_tasks(task) {
    if (task === "") {
      console.log("Value Is Empty");
      return false;
    }

    if (list_taskS.indexOf(task) != -1) {
      console.log("Deja Dans La List");
      return false;
    }

    list_taskS.push(task);
    if_no_Tasks();

    show_Tasks();
 
  }

  function if_no_Tasks() {
    tasks_div.innerHTML = ' <span class="no-task-msg">No Task To Show</span>';
    if (list_taskS.length > 0) tasks_div.innerHTML = "";

    inpt_tsk.focus();
  }

  function show_Tasks() {
    if_no_Tasks();

    list_taskS.forEach((element) => {
      let span_ = document.createElement("span");
      span_.className = "task-box";

      let txn_spn = document.createTextNode(element.title);
      span_.appendChild(txn_spn);

      if(element.Complt) 
      span_.classList.add("complet-task");

      let span_btn = document.createElement("span");
      span_btn.className = "delete";
      span_btn.innerHTML = "Delete";
      span_.appendChild(span_btn);
      tasks_div.appendChild(span_);
    });
  }

  function nbr_Count_Complet() {
    let nbr_Comp = document.querySelectorAll(".complet-task");
    if (nbr_Comp) { 
      nbrCompt.innerHTML = nbr_Comp.length;
    }
    nbrTotal.innerHTML=list_taskS.length; 
  }
};
