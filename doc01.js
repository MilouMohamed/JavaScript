// V 64 Function anonyme


tes();

function tes(){
  console.log("test function");
}




// V 63 Function challenge
/*
function showDetail(v1_, v2_, v3_) {
  let outpt_ = "Hello ";
  let list = [v1_, v2_, v3_];

  /* //M1
  for (let i = 0; i < list.length; i++) {
    if (typeof list[i] === "string") outpt_ += " " + list[i];
  }

  for (let i = 0; i < list.length; i++) {
    if (typeof list[i] === "number") outpt_ += ", Your Age is " + list[i];
  }

  for (let i = 0; i < list.length; i++) {
    if (typeof list[i] === "boolean")
      if (list[i]) outpt_ += ", Your Are Avalable ";
      else outpt_ += ", Your Are Not Avalable ";
  }
*/

  /* //M2
  let n1 = "Hello ",
    ag1,
    st;
  for (let i = 0; i < list.length; i++) {
    typeof list[i] === "string"
      ? (n1 += list[i])
      : typeof list[i] === "number"
        ? (ag1 = ",  Your Age is " + list[i])
        : typeof list[i] === "boolean" && list[i]
          ? (st = ", You are Valable")
          : (st = ", You are Not A Valable");
  }
  console.log(`${n1} ${ag1} ${st} `);
*/
  // console.log(outpt_);

  //M3
  /*
  let n1 = "Hi ",
    a_ = ", Your Age is ",
    s_ = ", You are Avalabel";

  for (let i = 0; i < list.length; i++) {
    typeof list[i] === "string" ? (n1 += list[i]) : n1;
    typeof list[i] === "number" ? (a_ += list[i]) : a_;
    typeof list[i] === "boolean"
      ? list[i]
        ? s_
        : (s_ = ", You are Not Avalabel")
      : s_;
  }
  console.log(` ${n1} ${a_}  ${s_} `);
}

showDetail("Nom1", 20, true);
showDetail("Nom2", 50, true);
showDetail(70, "Nom3", false);
showDetail(10, false, "Nom4");
showDetail(true, 66, "Nom5");
showDetail(false, "Nom6", 33);

// V 62 Function
/*
function crration_f(nm_ = "nom1", ag_ = "Unkwon", hr_ = 0, sh_ = "y", ...skls_) {
  document.write(`<hr/><div>`);
  document.write(`<h2> Welcome : ${nm_} </h2>`);
  document.write(`<p> Age : ${ag_} </p>`);
  document.write(`<p> Hour Rate : $${hr_} </p>`);

  document.write(`<div>`);
  
  if (sh_ === "y") {
    if (skls_.length > 0) {
      document.write(`<p> Skils : ${skls_.join(" | ")} </p>`);
    }
    else {
      document.write(`<p> Skils : No skils to show </p>`); 
    }
  } else {
    document.write(`<p> Skils : skils is hiddeng </p>`); 

  }
 
  document.write(`</div>`);

  document.write(`</div> <hr/>`);
}

crration_f("Nom01",40,200,"y","Js","Php","HTML","React");
crration_f("Nom02",20,100,"n","Js","Php","HTML","React");
crration_f("Nom02",20,100,"y");

// V 61 Function  rest param
/*
function calc_(n1, n2, n3) {
  return n1 + n2 + n3;
}

function calc_O(...nbrr) {
  let nbr = nbrr.reduce((sum, nbr01) => {
    return (sum += nbr01);
  }, 10000);

  return nbr;
}

function calc_reduc(...list_) {
  return list_.reduce((som_, val_) => {
    return (som_ += val_);
  });
}


console.log("calc_reduc ", calc_reduc(10, 20, 30, 40, 50, 60,10000));

console.log(calc_(10, 20, 30, 40, 50, 60));
console.log(calc_O(10, 20, 30, 40, 50, 60));

// V 60 Function  defualt param is undefind
/*
function hellow(name_,age_="unknow") { // M3

//if(age_ === undefined) //M1
// age_="unknow";

// age_ = age_ || "unknow"; M2
  return ` Your name is ${name_} and age is ${age_}`;
}
console.log(hellow("abdo",20));
console.log(hellow("Name3")); 

// V 59 Function 
/*
function myFuncRetur(nbr1 ,nbr2){
  return "this is return "+ (nbr1 + nbr2);
}


console.log(myFuncRetur(50,10));



// V 58 Function 


// normale 



// V 57 Function 
/*
function  test(var1){
console.log(" test de function 01 "+var1);
}


test("Ih");


 




// V 56 challenge
/*
let myAdmis = ["Ahmed", "Osama", "Sayed", "Stop", "Reda", "Semera"];
let myEmploi = [
  "Amgad",
  "Rabi3",
  "Samah",
  "Ameer",
  "Omar",
  "Otman",
  "Mjid",
  "Amany",
  "Samia",
  "Anwar",
  "Sa3id",
];

document.write('<h1>We have '+myAdmis.length+' Admins</h1>');

for (let i = 0; i < myAdmis.length; i++) {
  if (myAdmis[i] === "Stop") break;

  document.write("<div>");
  document.write("The team of <b>" + myAdmis[i]+"</b>");
  document.write("<h5>Les Members ::::::::::::</h5>");

  let r = 0;
  for (let j = 0; j < myEmploi.length; j++) {
    if (myAdmis[i][0] === myEmploi[j][0]) {
      r++;
      document.write(`<p>- ${r}  ${myEmploi[j]} </p>`);
    }
    document.write("</div>");
  }
}

// V 54  55 loop  while et do while
/*
let produc_ = ["keyboard", 20, "Mouse", "Pen" , "Monitor"];

let i = 0;

while (i < produc_.length) { 
  console.log("test de  " + produc_[i]);
  i++;
  // if(i === 2) continue; 
}
i = 0;

console.log("******************************");
do {
  console.log("test do while " + produc_[i]);
  i++;
  // if(i > 12) break;
} while (i < produc_.length);

// V 53  document Write
/* 
let produc_=["keyboard",20,"Mouse","Pen",10,"Pad","Monitor"];
let color_=["Red","Green","Black"];
let nbrProd=5;

document.write(` Les ${nbrProd} Produites`);

for(let i=0 ; i < produc_.length  ; i++) {

  if(nbrProd <=  i) break;
  document.write('<div>');
  document.write(`<h1>[${i +1}] >>> ${produc_[i]} </h1>`);

  for (let j = 0; j < color_.length; j++) {
   document.write(`<span> >>>>>>>>> ${color_[j]}  </span></br>`);
    
  }
  document.write(`<span> ${color_.join(' | ')}</span>`); 
  document.write('</div>');

}






// V 52  loop for Break , Continue , Lable

/*
let produc_=["keyboard",20,"Mouse","Pen",10,"Pad","Monitor"];
let color_=["Red","Green","Black"];

let i = 0; 
produc_.unshift("000Teeest");
produc_.push("Teeest");

for( ;  ;) { 

  console.log(`>>>>  ${produc_[i]} `);
  i++;

  //i+=2;//Pour augmente de 2 
  if (produc_.length === i) break;
}







// V 51  loop for Break , Continue , Lable
/*
let produc_=["keyboard",20,"Mouse","Pen",10,"Pad","Monitor"];
let color_=["Red","Green","Black"];

console.log(produc_);
minloop: for (let i = 0; i < produc_.length; i++) {
  
  console.log(`>>>>>> ${produc_[i]}`);

interloop:for (let j = 0; j < color_.length; j++) { 
  console.log(`         ------> ${color_[j]}`);

  if(color_[j] ==="Pad")
  break minloop;
}


/*
if(typeof produc_[i] === "number")
{
  continue;
}
 
  console.log(` >>>>>  ${produc_[i]}`);
 /* if(produc_[i]==="Pen") 
  break; 
*/
/*
}




// V 50  for nested loop  
/*

let produc_=["keyboard","Mouse","Pen","Pad","Monitor"];
let color_=["Red","Green","Black"];
let module_=[2020 , 2021, 2023];



for (let i = 0; i < produc_.length; i++) {
  
  console.log("#".repeat(15));
  console.log(`# ${produc_[i]}`);
  console.log(`Colors -----------------`);
  for (let j = 0; j < color_.length; j++) {
  console.log(`   >>>>  ${color_[j]}`); 
  }
  
  console.log(`Modules -----------------`);
  for (let k = 0; k < module_.length; k++) {
  console.log(`   >>>>  ${module_[k]}`); 
  }
  
}



// V 49  for loop
/*
let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];
let my2 = [1, 5, 10, "Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];
let strigggg = [];

for (let i = 0; i < my2.length; i++) {
  if (typeof my2[i] === "string") {
    strigggg.push(my2[i]);
  }
}

console.log(strigggg);
console.log("*******************");

for (let i = 0; i < my.length; i++) {
  console.log(my[i]);
}

// V 48   for loop
/*
for (let id = 0; id < 10 ; id++) {
 
  ++id ;
  console.log('My i '+id);
     
}






// V 47   Array   challenge
/*
console.log('Challeng v 47');

let 
  zero=0,
  counter=3,
  my=["Ahmed","Mazero","Elham","Osama","Gamal","Ameer"];
console.log(my);  
let my2= [...my],
my3 = [... my];
 

// console.log(my.slice(0,-2).reverse()); 
console.log(my.slice(zero,my.indexOf("Gamal")).reverse());


console.log(my.slice( true , counter ).reverse() );  
 
let newList=my.slice( true , counter ).reverse();

  
console.log(newList.join("").slice(zero ,counter - true )+newList.join("").slice(-counter - true ) );  //Elzero

my.splice(zero , counter + counter , "Elzero");  
console.log(my);  //Elzero


console.log(my2);  //Or
console.log(my2[+true].slice(-counter + true).charAt(zero).toLowerCase()+my2[+true].slice(-counter + true).charAt(+ true).toUpperCase());  //Or

console.log('***********************');  //Or
console.log(my3[++zero][++counter ] + my3[zero][ counter].toUpperCase())  ;//Or


// console.log(my.)

// V 46   Array   concat join
/*
let myfrinds = ["ahmed","sayed","Ali","gamal","Ameers"]; 
let newlist0 = ["foad","mahdi","Nom0" ]; 
let newlist1 = ["rabi3","Adam"]; 
let newlist2 = ["Nom3-3","Nom3-4"]; 


let newlisfin=newlist0.concat(newlist1,newlist2,"Nom4-1",["nom5-1","nom5-2"]);
console.log(newlisfin);

console.log(newlisfin.includes("rabi3"));


console.log(newlisfin.join());//
console.log(newlisfin.join("|"));//
console.log(newlisfin.join(" ** ").toUpperCase());

// V 45   Array  slicing
/*

let myfrinds = ["ahmed","sayed","Ali","Nom1","Osama","gamal","Ameers"]; 

console.log(myfrinds);  

console.log(myfrinds.slice()); 
console.log(myfrinds.slice(2)); // par index and retourn new array
console.log(myfrinds.slice(2,4)); 
console.log(myfrinds.slice(-2)); //  -4 -3 -2 -1
console.log(myfrinds.slice(1,-1)); //  le primer et le dernier

myfrinds.splice(1,2,"Nom3","Nom4"); //  modifer array
console.log(myfrinds ); //  modifer array 





// V 44   Array  sort 
/*
let myfrinds = [10,"sayed","mohamed","90",1000,100,20,"10",-20,-10];

console.log(myfrinds);

console.log(myfrinds.sort());//Sort alphabithique .... 100 1000 20 ....


console.log(myfrinds.reverse()); //Pas de sort


console.log(myfrinds.sort().reverse()); // sort et reverce


// V 43   Array  searching
/*
let myfrinds = ["ahmed","mohamed","sayed","Yassine","mohamed"];

console.log(myfrinds);

console.log(myfrinds.indexOf("mohamed")); 
console.log(myfrinds.indexOf("mohamed",2));

console.log(myfrinds.lastIndexOf("mohamed"));
console.log(myfrinds.lastIndexOf("mohamed",-2));     // -4  -3  -2 -1 

console.log(myfrinds.includes("mohamed"));// true or false start from 0
console.log(myfrinds.includes("ahmed",2));// true or false start from 2




// V 42   Array add and remove
/*
let myfrinds = ["ahmed","mohamed","sayed","Yassine"];

console.log(myfrinds);

myfrinds.unshift("Mon1Unshift");// insere dans la premiere
console.log(myfrinds);

myfrinds.push("Mon2Push");// insere dans la derniere place
console.log(myfrinds);

let shuff= myfrinds.shift("Mon2Push");// suppremer le promere element et le rotourne
console.log(shuff);
console.log(myfrinds);

let popLast= myfrinds.pop("Mon2Push");// suppremer le dernier element et le rotourne
console.log(popLast);
console.log(myfrinds);





// V 41  Array length
/*
let myfrinds = ["ahmed","mohamed","sayed","Yassine"];
console.log(myfrinds);
console.log(myfrinds.length);

myfrinds[myfrinds.length]="Nom3";
// myfrinds.length=3;
console.log(myfrinds);
console.log(myfrinds.length); 



// V 40  Array
/*
let myfrinds = ["ahmed","mohamed","sayed",["mon1","mon2","mon3",]];


console.log(`Hellow ${myfrinds[0]} `) ;
console.log(`Hellow ${myfrinds[1][1]} `);
console.log(`Hellow ${myfrinds[3]} `);
console.log(`Hellow ${myfrinds[3][1][3]} `);

console.log(myfrinds);
myfrinds[2]="Abdolah";
myfrinds[3]=["pre1","pre2","pre3"];
console.log(myfrinds); 
 

console.log(Array.isArray(myfrinds));



// V 39 challeng of  switch
/*
let job = "Manager",
  salary = 0;

switch (job) {
  default: {
    salary = 4000;
    break;
  }

  case "Manager": {
    salary = 8000;
    break;
  }

  case "IT":
  case "Support": {
    salary = 6000;
    break;
  }

  case "Developer":
  case "Designer": {
    salary = 7000;
    break;
  }
}
console.log(` the salary is ${salary} `);

let holidays = 2 ,
  money = 0;

  if(holidays === 0) {
    money=5_000;
    console.log(`My Money is ${money}`);
  }

  else if (holidays === 1 || holidays === 2){ 
    money=3_000;
    console.log(`My Money is ${money}`);
  }

  else if (holidays === 3){
    
    money=2_000;
    console.log(`My Money is ${money}`);
  }

  else if (holidays === 4){
    
    money=1_000;
    console.log(`My Money is ${money}`);
  }
  else {
    money=0;
    console.log(`My Money is ${money}`); 
  }

// V 38 switch
/*
let vr=3;
switch (vr) {

  case 1: { 
    console.log("is 1");
    break;

  };

  case 2:
    console.log("is 2"); 
    break;

  case 3:
    case 4:
    console.log("is 3 et 4"); 
    break;

  default:
    console.log("not 1 or 2 or 3");  
    break;
}

// V 37   challenge if
/*
console.log("test ");

let a = 10;
let result =
  a < 10
    ? console.log("10")
    : a >= 10 && a <= 40
      ? console.log("10 to 40")
      : a > 40
        ? console.log("> 40")
        : console.log('Unknow');


let st = "Elzero Web School";

if( (st.length*2).toString() == "34" ) {
  console.log("Good in 1");
}

if( st.charAt(st.indexOf("W")).toLowerCase() == "w" ) {
  console.log("Good in 2");
} 


if( typeof st.length != "string" ) {
  console.log("Good in 3");
} 


if( st.substring(0,6).repeat(2) === "ElzeroElzero" ) {
  console.log("Good in 4" );
} 





// V 36 Nullish Coalescing Operator And Logical Or
/*
let price =false;

console.log(Boolean(100));
console.log(Boolean(-100)," *********  ");
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined)); 

//null indefende false empty  
console.log(`Le prix est ${price || "free" } `)


//null and indefende 
console.log(`Le prix est ${price ?? "free" } `)



// V 35  co,dition ternary operator
 /*

let a=100,c=20; 
c= a>100 ? 50 : 60 ;
console.log(` Mon var c => ${c}`);


 
// V 34 nested condition 
/*
let a=100,c=20;
 
c=a>100? 50: 60;
console.log(c);





// V 33 if operator 
/*
if 
else  if
else





// V 32 logicl operator 
/*
console.log('v 32');
console.log( 10 == "10");
console.log( 10 != "10");
console.log(!( 10 == "10"));

// && et and
console.log(10 == "10" && 10 > 9 && 10 >= 50);

// || or  ou 
console.log(10 == "10" || 10 > 9 || 10 >= 50);








// V 31 scompariason 
/*
let a=10;b="10";
console.log("V 31");
console.log(10 === "10"); // value et type
console.log(10 == b);  // value 

console.log(10 != "10"); // value >> false
console.log(10 !== "10"); // value et type true

console.log(10 >= 20); // value et type true
console.log(10 <= 20); // value et type true 
console.log("Ossama" === "Yassin");
console.log("Ossama" == "Yassin");
console.log("Ossama" != "Yassin");
console.log(typeof "Ossama" == typeof "Yassin");
console.log(typeof "Ossama" === typeof "Yassin");

/*
// V 30 chalange string
let a="Elzero Web School";
console.log(a);
console.log(a.charAt(2).toUpperCase()+a.slice(3,6));

console.log(a.charAt(13).toUpperCase().repeat(8));
 

console.log((a.split(" ",1)));    


console.log(a.substr(0,1).toUpperCase()+a.substr(1,6) +
a.substr(11,1).toUpperCase()  + a.substr(12).toLowerCase());

a="abcdefg";
console.log(`${a.charAt(0).toLowerCase() + a.substring(1,a.length -1).toUpperCase()+a.slice(-1).toLowerCase()}`);

console.log(`${a.charAt(0).toLowerCase() + a.slice(1,-1).toUpperCase()+a.slice(-1).toLowerCase()}`);

// v 29  string part 3
/*
let a="Elzero Web School";
console.log(a);
/*
console.log(a.substring(2,6));
console.log(a.slice(2,6));
console.log(a.substring(2,6));
console.log(a.length);       
console.log(a.substring(17));
negatif value debut de 0

console.log(a.substr(1,2)); 
console.log(a.includes("web"));  
console.log(a.includes("Web"));  
console.log(a.includes("Web",8));

console.log(a.startsWith("E"));
console.log(a.startsWith("z",2));

console.log(a.endsWith("ro",6));
console.log(a.endsWith("ool"));






// v 28  string
/*
let vvv="Elzero web school";

console.log(vvv.indexOf("web"));
console.log(vvv.indexOf("web",8));// start de  index 8

console.log(vvv.indexOf("o"));
console.log(vvv.lastIndexOf("o"));

console.log(vvv.slice(4));
console.log(vvv.slice(4,6));// 6 n est pas dans l interval
console.log(vvv.slice(-5));
console.log(vvv.slice(-5,-3));

console.log("** ".repeat(4)); 

// retour array 
console.log(vvv.split());
console.log(vvv.split(""));
console.log(vvv.split("",5));
console.log(vvv.split("o"));
console.log(vvv.split(" ",2));






// v 27  string

/*

let nm="  ahmed  ";
 console.log(nm[1]);
 console.log(nm[5]);

 console.log(nm.charAt(1));
 console.log(nm.charAt(5));

 console.log(nm.length); 
 console.log("trim",nm.trim().length);

 console.log(nm.toUpperCase());
 console.log(nm.toLowerCase());

 // get ahMed
 let nm2= nm.trim();
 console.log(nm2.substring(0,2)+nm2.charAt(2).toUpperCase()+nm2.substring(3,nm2.length));









// v 26 challenge number
/*
let 
  a=1_00,
  b=2_00.5,
  c=1e2,
  d=2.4;

  // 1
  console.log(Math.round(Math.min(a,b,c,d)));

  console.log(Math.pow(a,Math.floor(d)));

  console.log(Math.trunc(d));
  console.log(Math.floor(d));
  console.log(Math.round(d));
  console.log(parseInt(d.toFixed()));
  console.log(parseInt(d));


  console.log(( parseInt(b) / Math.ceil(d)).toFixed(2) );
  console.log(Number( parseInt(b) / Math.ceil(d)).toFixed() );

// v 25 Number methodes avce MATH
/*
// round ceil floor min max pow random trunc
console.log(Math.round(100.56));
console.log((100.56).toFixed(1));
console.log(Math.round(100.333));
console.log(100.333.toFixed(1));
/*********************** */
/*
console.log("Math.ceil(99.1) ",Math.ceil(99.1));
console.log("Math.floor(99.6) ",Math.floor(99.9)); 

console.log(Math.min("10","50","30","55","90"));
console.log(Math.max(10,500,30,55,90,80));

console.log(Math.pow(5,2));
console.log(5**2);

console.log(Math.random()); //entre 0 et 1

console.log(Math.trunc(99.9)); // meme que round et floor


// v 24 Number methodes 
 /*
console.log(Number.isNaN("med " * 5));  
console.log(Number.isNaN("med " / 5));  
console.log(Number.isNaN("med " + 5));// string  
/*


console.log(Number.isInteger("1000")); //String not integer
console.log(Number.isInteger("1000.55")); //String not integer

console.log(Number.isInteger(1000.55));  
console.log(Number.isInteger(1000));  


/*
console.log(100);
console.log((100).toString());
console.log(100.0.toString());
console.log(100..toString());

console.log(100.555555.toFixed(2)); // 100.56;
console.log(100.554555.toFixed(2)); // 100.55;

console.log(+"100"); 
console.log(Number("100")); 
console.log(Number("100"));  

console.log(Number("100 med")); 
console.log(parseInt("100 med")); 
console.log(parseInt("med 100 med")); 

console.log(parseInt(" 100.5 med")); 
console.log(parseFloat(" 100.5 med")); 





// v 23

/*
console.log(1000000);
console.log(1_000_0_00);
console.log(1e6);
console.log(10**6);




// v 22

// exercice 02
/*
let 
     d="-100",
     e="20",
     f=30,
     g=true;
console.log(e * -d); //2000
console.log(-d + ++e * ++g + ++f ); //173







// exercice 01
/*
let a=10;
let b="20";
let c=80;
let myvar=0;

console.log("a ",a); 
console.log("b ",b); 
console.log("c ",c);
  
// three  3
//  console.log(--c + +b + --a * +b++ - +b * a + --a - +true);
// 97 
// 79  +  20  +  9 * 20  - 21 * 9 + 8 - 1;
 


// two  2
/*
console.log("Resultat >>> ",++a + -b + +c++ - -a++ + +a);
//  a   |  b   |   c   |   a   |   a 
//  11  -  20  +   80  +   11  +  12    meme line
//  11  |  20  |  81   |   12  |  12    console

// 94  <<<<<  11  -  20  +  80  +  11  +  12 

// b= a++ + ++a;
// console.log("b ",b);  //donne 22
/*
// one  1
myvar=++a  +b++ + +c++ - +a++;
console.log('myvar ',myvar);
console.log(a + b + c -a); 
  console.log(++a + +b++ + +c++ - +a++);
// v 21
/*
let var1=10;
console.log(var1);
var1+=5; 
console.log(var1);




// v 20
/*
let a=20;
let b="30";
let c=true;
console.log(a + b);
console.log(a + +b);
console.log(a + Number(b));
console.log('***********');
console.log("" - 2 );
console.log(+"");
console.log(+false - +true);
console.log('***********');
console.log(b + a + c);
console.log(+b + a + c);




// V 19 
/*
console.log(-"Osama");
console.log(-"-100");




// 18
/*
var a=2,b="med";
console.log(a + b);
console.log(a - b);
console.log(NaN);//Noat a Namber
console.log(11 % 3); // 

a++ ; // => 2;   print >>> incremant 
/*   */ /*
++a ; // => 3;  incremant >>> print   









// v17
/*
var ttc="Incentive",dsc="le paraghraph de cart",dtc="25/10";

let cont=`<div style="width :300px; background-color:red; margin:20px auto; text-align:center; padding:10px;">
<h3>Hello ${ttc}</h3>
<p> ${dsc}  </p>
<span> ${dtc} </span>
</div>`;

  document.writeln(cont.repeat(3));

// for (let i = 0; i < 3; i++) { 
//   document.writeln(cont);
// }



// v 16
/*
let a1=" ****Nom1**** ",a2=" ****Nom2**** " ; 
let markup=` <div class="card v16">
<div class="child">
  <h1>Titre de la carte ${a1}</h1>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo minima
    eum natus commodi corporis dolorem ab ipsa, rem !
  </p>
  <span>${a2}</span>
</div>
</div>`;
document.writeln(markup);


/*
let a1="m1",a2="m2",a3="m3",a4="m4";
console.log(`${a1} ${a2}  "" et '' et \\
${a3} ${a4}`);
console.log(`${5*5} * ${a2+" tt"} `);

// v 15 concatination
/*
let a="med",b="ih";
document.writeln("<h1>"+a+ " ********* "+ b +"</h1>" );
console.log(a,b);

/*
// v 14

console.log(` my var is $bbcc`);
console.log("  mon test de string double  \n coutes \" double\" et ' '  ");
console.log( " les tabulation  a\ta ");
console.log( " les slash a\\a ");
console.log( "  11 \
                22 \
                33  ");



// v13
/*
// From windows  var
var aabb=1;
console.log(aabb);

//not From windows   let et const
const bbcc=2;
console.log(bbcc);


// vv 11
/*
<div id="myvarInHtlk">My var</div>
<div id="myvarInText">My var</div>
<div id="myvarContcex">My var</div>*/
/*
myvarInHtlk.innerHTML="testd <h1> h11 </h1>";
myvarInText.innerText="test de <h1> h11 </h1>";
myvarContcex.textContent="myvarContcex <h3> mon test </h3>"; 

 /*
 console.log(myvar);
 myvar.innerHTML="test tesst 000 222 333 444 <h1>555 </h1>";
  div id="myvar" */

// v10
/*
console.log('Les types');
console.log(typeof 'my name');
console.log(typeof "11-02-2022");
console.log(typeof 500);
console.log(typeof 500.55);
console.log(typeof ["Os","Am"]);
console.log(typeof {name:"med",age:44,ste:"ih"});
console.log(typeof  undefined);
console.log(typeof  null);
 /*
 console.log(myvar);
 myvar.innerHTML="test tesst 000 222 333 444 555 ";
  div id="myvar" */
/*








var btn01 = document.getElementById("btn01");

btn01.addEventListener("click", function () {
  console.log("My click");
  var c = console.log.bind(document);
  c("gooood loook llooll");
  return null;
});
console.log("my test befor loading");
window.onload = function () { 

document.getElementsByTagName("h2")[0].style.fontSize="4em"; 

// v8 elzro web school
// console.table(["med","younes","khalid"]);
console.table({ror:["med","younes","khalid"],one:["med","younes","khalid"]});

console.log("mot %c11 e %cmot %c22","color:red;font-size:40px","border:1px solid yellow","border:5px solid blue");
}


*/
