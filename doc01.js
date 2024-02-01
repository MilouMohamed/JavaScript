// v 167  Modules Import And Export
 

// v 166   Generator Infinite Nimber function
/*
function* generatInfi() {
  let indx = 0;
  while (true) {
    yield indx++;
    console.log("while"); 
  }
}

let gener_ = generatInfi();

console.log(gener_.next());
console.log(gener_.next());
console.log(gener_.next());
console.log(gener_.next());
console.log(gener_.next());

// v 165 Delegate  generator function
// geneR.return("STOP") Stop Le Genetator
/*
function* generNumbr(){
  yield 1;
  yield 2;
  yield 3;
}

function* generLetter(){
  yield "A";
  yield "B";
  yield "C";
}

function* generatAll(){
  yield* generNumbr();
  yield* generLetter();
  yield* [11,12,13];
}

let geneR=generatAll();
console.log(geneR.next());
console.log(geneR.next());
console.log(geneR.return("STOP"));//Stop Le Genetator 
console.log(geneR.next());

 geneR=generatAll();

console.log(geneR.next());
console.log(geneR.next());
console.log(geneR.next());
console.log(geneR.next());
console.log(geneR.next());
console.log(geneR.next()); 
console.log(geneR.next()); 
console.log(geneR.next()); 
console.log(geneR.next()); 
console.log(geneR.next()); 


// v 164 generator function introduction
/*
function* generateNumbers(){
  yield 1;
  console.log('Fter Yield 1');
  yield 2;
  yield 3;
  yield 4;
}


let genrT=generateNumbers();

// for(let val of genrT()){
//   console.log(val);// value of yield 
// } 
console.log(typeof genrT);
console.log( genrT.next() );
console.log( genrT.next() );
console.log( genrT.next() );
console.log( genrT.next() );
console.log( genrT.next() );


for(let val of generateNumbers()){
  console.log(val);// value of yield 
}

// v 163 Tracking Operation Time
/*
// console.log('TOT');
// performance.now();
// performance.mark();
// console.log(performance.now() );
// console.log(performance.mark("test") );

let startDt=new Date();

for (let I = 0; I <100_000; I++) {
document.write(`<div> ${I}</div>`); 
/*let div_=document.createElement("div");
div_.appendChild(document.createTextNode(I));
document.body.appendChild(div_);
}


let endDt=new Date();

let durat=endDt - startDt;
console.log(durat);
// v 162 Formating Date And time
/*
let myDate=new Date();
console.log(""+myDate);


console.log(" D1 =>"+new Date(0));

// let dateFromStringDate=new Date("1-2-2004 12:55:20");
// dateFromStringDate=Date.parse(dateFromStringDate);
// console.log(" D2 =>"+dateFromStringDate);
console.log(" D2 =>"+new Date(1073048120000));

let dt_3=new Date("1986-10-25");
   dt_3=new Date("1980");
console.log(" D3 =>",dt_3);
// May 5 2000 ou 5-12-2000 ou  5 12 2000 ou 5/15/2001 ou 5,15,2001
//2001, 9 ,5 ,12:53 string  et 2001, 9 ,5 ,12,53 Numeric
// ISO  1986-10-25



console.log(" D4 =>"+new Date("2001, 9 ,5 ,12:53"));
console.log(" D4 =>"+new Date(2001, 9 ,5 ,12,53));

// date Avce time Zone 2005-10-25T06:50:12Z
console.log(" D4 =>"+new Date("2005-10-25T06:50:00Z")); 



// v 161 Set Date And time
/*
let dateNow=new Date();
console.log(dateNow);
console.log("##".repeat(30));

dateNow.setTime(0);
console.log(dateNow);
console.log("##".repeat(30));

dateNow.setTime(10_000); // 10 Second
console.log(dateNow);
console.log("##".repeat(30));

dateNow.setDate(15); // Jour=15
dateNow.setDate(-1);  // 0 dernie Jour A mois Precedent -1 -2 ...
dateNow.setDate(35); // Jour=15
console.log(dateNow);
console.log("##".repeat(30));

dateNow.setFullYear(2024,-1,5);// +-yera, +-mois [0-11], +-Jour [1-31]  
console.log(dateNow);
console.log("##".repeat(30));

dateNow.setMonth(3); // Mois de [0-11] + -
console.log(dateNow);
console.log("##".repeat(30));


dateNow.setHours(-1); // Heur de [0-23] -1 de jour derner
console.log(dateNow);
console.log("##".repeat(30));


dateNow.setMinutes(1); // Minute de [0-59] -1 de jour derner 
console.log(dateNow);
console.log("##".repeat(30));


// v 160 Get Date And time
/*
let myDate= new Date();
let brtDate= new Date("2000-11-22");
console.log("getDate "+myDate.getDate());
console.log("getTime "+myDate.getTime()); 

console.log("getDate "+brtDate.getDate());
console.log("getTime "+brtDate.getTime()); 

let datDef=myDate - brtDate;

datDef= datDef / 1000 / 60 / 60 / 24 / 365;
console.log("datDef ",datDef);

console.clear();

console.log(myDate);
console.log("now     "+Date.now()); 
console.log("getTime "+myDate.getTime()); // Time Milusecend
console.log("GetDAte "+myDate.getDate()); // jour du mois
console.log("Year "+myDate.getFullYear()); // l annee 
console.log("Month "+myDate.getMonth()); //  le mois -1 de 0 a 11 pas de 1 a 12 // cree une arry pour Obtenir les noms des mois
console.log("Year "+myDate.getFullYear()); // l annee 
console.log("Jour de la semaine "+myDate.getDay()); // de 0 dimanche // cree une arry pour Obtenir les noms des Semaine
console.log("Heure "+myDate.getHours());  
console.log("Minutes "+myDate.getMinutes());  
console.log("Second "+myDate.getSeconds());  


// v 159 Date And Time 
/*
let myDate= new Date();
// console.log(Date.now());// Milisecond
// console.log(Date.now() / 1000);// Second 
// console.log(parseInt(Date.now() / 60000));// Minutes
// 1_000 Mill = 1 scened

console.log(myDate); 
console.log(myDate.getFullYear()); 
console.log(myDate.getMonth()); 
console.log(myDate.getHours()); 
console.log(myDate.getMinutes()); 
console.log(myDate.getTime());  
console.log((10_123/1000).toFixed(2));
console.log(10_123/1000);





// v 158 POO Object Mate Data And Descriptor P2
/*
const myObject_ = {
  a_: 1,
  b_: 2,
};
console.log(myObject_);

Object.defineProperties(myObject_, {
  c_: {
    value: 3,
    writable: true,
    enumerable: true,
  },
  d_: {
    value: 4,
    configurable: true,
    enumerable: true,
  },
  E_: {
    value: 55,
  },
});

console.log(myObject_);

for (let elem in myObject_) {
  console.log(elem, myObject_[elem]);
}
// console.clear();
console.log(Object.getOwnPropertyDescriptor(myObject_, "a_"));
console.log(Object.getOwnPropertyDescriptor(myObject_, "E_"));

console.log(Object.getOwnPropertyDescriptors(myObject_));

// v 157 POO Object Mate Data And Descriptor P1
/*
const myObject_={
a_:1,
b_:2, 
};

Object.defineProperty(myObject_,"c",{
  writable:false,   // pour afectation c="val"
  enumerable:true, //Pour La Boucle
  configurable:true, // Poue la modifica Delete ou ...
  value:"777" 
})// writable + configurable = false ne pas la redifinition

Object.defineProperty(myObject_,"c",{
  writable:true,   // pour afectation c="val"
  enumerable:true, //Pour La Boucle
  configurable:false, // Poue la modifica Delete ou ...
  value:"7770" 
}) 
 
console.log(" c ",delete myObject_.c); // configurable:false,

for(let elem in myObject_ ){
  console.log(elem , myObject_[elem]);
}

console.log(myObject_);
console.log(myObject_.c);
myObject_.c="Test";
console.log(myObject_.c);



// v 156 POO Add To Prototyp Chain And Axtend Constructor Features

/*
class User_PT {
  constructor(id, userNm) {
    this.iD8 = id;
    this.uN8 = userNm;
  }
  asayHello() {
    return `Hello ${this.uN8}`;
  }
}

let useR = new User_PT(10, "Nom01");
console.log(useR.iD8, useR.uN8);
console.log(User_PT.prototype);
console.log(useR);

User_PT.prototype.sayWelcom=function() {
  return `Wolcome ${useR.uN8}`; 
} 
console.log(useR.sayWelcom());
User_PT.prototype.Test_="testing";
Object.prototype.Test_1="testing 1 Object";
console.log(User_PT);

// String
String.prototype.addBeforAndAfterThis=function()   {
  return `|-- ${this} --|`;
} 
let strNG="Test";
console.log(strNG.addBeforAndAfterThis());

// v 155 POO Prototyp Introduction
/*
class User_PT {
  constructor(id, userNm) {
    this.iD8 = id;
    this.uN8 = userNm;
  }
  asayHello() {
    return `Hello ${this.uN8}`;
  }
}

let useR = new User_PT(10, "Nom01");
console.log(useR.iD8, useR.uN8);

//Prototype
console.log(User_PT.prototype);

console.log(String.prototype);

/*
// v 154 OOP Class Encapsulation

class User_Prv {
  // Private Key
  #e_u;
  constructor(id, name, eSala) {
    this.id_u = id;
    this.name_u = name;
    this.#e_u = eSala;
  }
  getSalle() {
    return `||sal=${parseInt(this.#e_u)}||`;
  }
  getSalle() {
    return parseInt(this.#e_u);
  }
}
/////////////////////////////////////////////////
class Admin_Prev extends User_Prv{
constructor(id,n,e,t){
  super(id,n,e);
  this.t=t;
}

getAll()
{
  return `Admin=Id=${this.id_u} ||N=${this.name_u} ||eSa=${this.getSalle()} ||T=${this.t} ||`;
}


}

// User 
let usr_1 = new User_Prv(10, "Nom 01", "1000 Hd");
console.log(usr_1.id_u, usr_1.name_u);
console.log(usr_1.getSalle());
console.log('User//////////////////////////////////////Admin' );

// Admin 
let admin_1 = new Admin_Prev(15,"Nom 02", "2000 Hd",true);
console.log(admin_1.id_u, admin_1.name_u);
console.log(admin_1.getSalle());
console.log(admin_1.getAll());

// v 153 OOP Class Inhertance Heritge
/*
class User_Heritg{
  constructor(idd,nmm){
    this.i_=idd;
    this.nm_=nmm; 
  } 
  sayHellow(){
    return `id is ${this.i_} || Name=${this.nm_} `;
  }
}

class Admin_Heritg extends User_Heritg{
  constructor(idd,nom,permit){
    super(idd,nom);
    this.per__=permit;
  }
  sayHellow(){
    return `id is ${this.i_} || Name=${this.nm_}  || Perm=${this.per__} `;
  }
}
class Sup_Admin_Heritg extends Admin_Heritg{
  constructor(idd,nom,permit,sal){
    super(idd,nom,permit);
    this.sal__=sal;
  }
  
}

//User
let u_t_01= new User_Heritg(10,"Nom1");
console.log(u_t_01.i_);
console.log(u_t_01.sayHellow());
console.log("////".repeat(15));

//Amdin
let a_t_01= new Admin_Heritg(10,"Nom2","Yess");
console.log(a_t_01.i_,a_t_01.nm_,a_t_01.per__);
console.log(a_t_01.sayHellow()); 
console.log("////".repeat(15));

//SuperAdmin
let sa_t_01= new Sup_Admin_Heritg(10,"Nom3","Noon",20_000);
console.log(sa_t_01.i_,sa_t_01.nm_,sa_t_01.per__,sa_t_01.sal__);
console.log(sa_t_01.sayHellow()); 


// v 152 OOP Class Static Property And Methodes 
// class avce methode Static 
/*
class User_Meth_Static {
  static conteur_ = 0;
  // Static Property
  constructor(i, n, s) {
    this.i = i;
    this.n = n;
    this.s = s;
    User_Meth_Static.conteur_++;
  }
  // static Methode
  static clg_func_stat(v) {
    console.log("tes de " + v);
  }
  clg_func2(v) {
    console.log(" 2 tes de " + v);
  }

static numberUsers(){
  return `${this.conteur_} nbr Of user `;
}

}

let u_1 = new User_Meth_Static(10, "Nom1", 4000);
let u_11 = new User_Meth_Static(10, "Nom1", 4000);
let u_111 = new User_Meth_Static(10, "Nom1", 4000);

console.log(u_1);
u_1.clg_func2("122");
console.log("u_1",u_1.conteur_);
console.log(User_Meth_Static.conteur_);
User_Meth_Static.clg_func_stat("122");

console.log(User_Meth_Static.numberUsers());

// v 151 OOP  Update Properties And Built In Constructors
/*

class User_cls1 {
  constructor(id_, userNam_, sallary_) {
    this.i = id_;
    this.u = userNam_ || "Pas_Nom";
    this.s = sallary_;
  }
  updateUser(idd,use,sal){
    this.i=idd;
    this.u=use;
    this.s=sal;
  }

}

let user_01= new User_cls1(1,"Nom 1",10_000);
console.log(user_01);
user_01.updateUser(22,'Nom 02',15_000);
console.log(user_01);

console.log('##'.repeat(20));
//############################################""
let str_0=111_000;
let str_1=new Number("123_000");
console.clear();
console.log(str_0 );
console.log(str_1 );
console.log(typeof str_0);
console.log(typeof str_1);
console.log('--'.repeat(20));
console.log(str_0 instanceof Number); // F
console.log(str_1 instanceof Number); // T
console.log("--".repeat(18));    
console.log(str_0.constructor === Number); // T
console.log(str_1.constructor === Number); // T

// v 150 OOP Deal With Proporty And Methods
/*
class User_cls {
  constructor(iId,iUser,iSal){
    this.iId=iId,
    this.iUser=iUser || "Pas_De_Nom",
    this.iSal=iSal <6000 ? iSal + 100: iSal ,
    this.mmssgg= function(nbr){
      return `${nbr} Name = ${this.iUser} Sal = ${this.iSal} `;
    }
  }

  writeMsg(nbr){
    return `${nbr} Name = ${this.iUser} Sal = ${this.iSal} `; 
  }
}

let user_1=new User_cls(10,"Nom1",5000);
let user_2=new User_cls(11,"",6000);

console.log(user_1 instanceof User_cls );
console.log(user_1.constructor === User_cls );


console.log(user_1);
// console.log(user_1.iId);
// console.log(user_1.iUser);
// console.log(user_1.iSal);
console.log(user_1.mmssgg(7777));  
console.log(user_1.writeMsg(88)); 

console.log(user_1.mmssgg);     //.name ""
console.log(user_1.writeMsg);   //.name "writeMsg"

// console.log(user_2);
// console.log(user_2.iId);
// console.log(user_2.iUser);
// console.log(user_2.iSal);


// v 149 OOP constructor Function New Syntax 
/*
console.log("object > ");

function User_tesTT(idd,namm,sall) {
  this.id_=idd;
  this.name_=namm;
  this.sall_=sall + 10;
}
class User_tes {
  constructor(idd, namm, sall) {
    this.id_ = idd;
    this.name_ = namm;
    this.sall_ = sall + 10;
  }
}
let userOne_= new User_tes(102,'Nom2' ,6000);

 
console.log("Avce Constreuctor ",userOne_ instanceof User_tes);
console.log("Non Constreuctor ",userOne_ instanceof User_tesTT);

console.log(userOne_ instanceof User_tes); 
console.log(userOne_.constructor === User_tes);
// Pour test si le constructor de function parente


// v 148 OOP constructor Function Introduction 
/*
console.log("object");

function User_tes(idd,namm,sall) {
  this.id_=idd;
  this.name_=namm;
  this.sall_=sall + 10;
}

let userOne= new User_tes();
 userOne.id_=101,
 userOne.name_='Nom1' ;
 userOne.sall_=4500;

let userTwo= new User_tes(102,'Nom2' ,6000);
let userThree= new User_tes(103,'Nom3' ,7000);
let userFour= new Object();
userFour.id_=104;
userFour.name_="Nom04";
userFour.sall_=2500;
// let userFive= new Object.assign(105,'Nom5' ,4000);

console.log(userOne);
console.log(userTwo);
console.log(userThree);
console.log(userFour);
// console.log(userFive);



// v 147 javaScript OOP 
// console.log("object");




// v 146 Regular Expression Challenge
/*
let url_1="elzero.org",
url_2="http://elzero.com",
url_3="https://elzero.org",
url_4="https://www.elzero.net",
url_5="https://www.google.com:8080/article.php?id=510&cat=topic";

let regEx_=/(https?:\/\/)?(www.)?\w*.(org|com|net). * /ig;//Pas d espace ici
/*
console.log(url_1.match(regEx_));
console.log(url_2.match(regEx_));
console.log(url_3.match(regEx_));
console.log(url_4.match(regEx_));
console.log(url_5.match(regEx_));

console.log('v 146');




// v 145 Regular Expression Test Regular Expr and DisCission
// console.log("object");
// les site web pour teste le Regular exprision 
//Regex Enligne Js 


// v 144 Regular Expression Form validation

/*

// btn_val.onclick=function(e) {
  document.querySelector('.form_vali').onsubmit=function(e) {
    console.log("test");
    let int_pho=document.querySelector('#phone_'), 
    span_val=document.querySelector('.spn_val') ;
    console.clear();
    
    let vl=int_pho.value ;
    console.log("vl "+vl);
    
    let gerExp=/^0(6|5)\d{2}$/gi;// Pour 05XX et 06XX
    gerExp=/^\(\d{4}\) \d{3}-\d{4}$/gi;// Pour (1234) 567-8910
    
    
    span_val.innerHTML=gerExp.test(vl) ? "Oui Valid":"Non Valid";
    // int_pho.focus();
console.log(gerExp.test(vl));

    if(gerExp.test(vl))
    return true;

    // e.preventDefault();
    return false;//Pour ne Pas envoye les donnes
}






// v 143 Regular Expression repalce with Pattern
// console.log('test '); 

/*
regular expression
------  replace
------  replaceAll 
*/
/*
let txt="We Love Programing And @ because @ Is Amazing";

console.log(txt.replace("@","CSS"));
console.log(txt.replaceAll("@","JS")); 

let reg=/b.+(?= )/gi;
console.log(txt.match(reg));
console.log(txt.replaceAll(reg,"JS")); 


// v 142 Regular Expression Quantifiers P3
/* 
^  ===> Start with 
$  ===> End with 
?=  ===> Followed By Something  tab3ah xi7aja
?! ===>  non Followed By Something 

*/
/*
let myStriiin="We Love Programing",
namee="1OsamaZ 2AhmedZ 3Mohammed  5azertyuioZ 4MoustafaZ 5gamalZ";

let ngxx=/^We .+ing$/gi;
  // ngxx=/\bwe.+ing\b/gi;
console.log(myStriiin.match(ngxx));
console.log(ngxx.test(myStriiin));

console.log("---".repeat(20));
  ngxx=/.+lZ$/gi;
console.log(namee.match(ngxx));
console.log(/^1Os/.test(namee));
console.log(/^\d/.test(namee));
console.log(/^\s/.test(namee));

console.log("@@@".repeat(15));
console.log(namee.match(/^\d.+z$/ig));
console.log(namee.match(/\d\w{5}(?=Z)/ig));
console.log(namee.match(/\d\w{5}(?!Z)/ig));// not suive Z
console.clear();
console.log(namee.match(/\d\w{7}(?=d)/ig));

//2AhmedZ

console.log(namee.match(/\d\w{9}(?=Z)/ig));
//5azertyuioZ

console.log("1 > ","1abZ 2cbdZ 3azerZ".match(/\d\w{2}(?!z)/ig));

let gerggg=/\d\w{2}(?!z)/ig;
    gerggg=/\d\w{2}z/ig;
// gerggg=/\d\w{3}(?=z)/gi;
// gerggg=/\d\w{1,3}z$/gi;

console.log("2 > ","1abZ 1rc 2cbdZ 3azerZ".match(gerggg));
console.log("2 > ",gerggg.test("1abZ 1rc 2cbdZ 3azerZ"));

// v 141 Regular Expression Quantifiers P2

/* 
n{x}   ===>  x fois de n
n{x,y} ===> range
n{x,} ===> At least x de x a ++

*/
/*
let serail__="s100s s3000s s50000s s950000s";

let reg=/\bs\d{3}s\b/gi;  // 3 numbers
    reg=/s\d{3}s/gi;  // 3 numbers
console.log(serail__.match(reg));

reg=/s\d{4,5}s/gi;  // 4 or 5 numbers
console.log(serail__.match(reg));

reg=/s\d{4,}s/gi;  // 4 or ++ numbers
console.log(serail__.match(reg));

// v 140 Regular Expression Quantifiers P1
/*console.log("test");
/*
+ ===>  1 ++ fois
* ===>  0 ++ fois  aplice sur la letre abc*df c => 1 or 0
? ===>  0 Or 1 fois (www.)?
*/
/*
let mailS="o@nn.sa osama@gmail.com elzero@gmail.net yassine@mail.ec" ;
let mailReg=/\w+@\w+.\w+/gi;
console.log(mailS.match(mailReg));


let lesNums="0110 10 150 05120 0560 350 00";
let regNu_=/\b0w+0\b/gi;
    regNu_=/\b0\d*0\b/gi;
console.log(lesNums.match(regNu_));

let urlWeb="https://google.com http://www.webSite.net web.com www.ih.net ";*/
// let reg__=/https*/gi;
/*
    reg__=/https*:\/\//gi;
    reg__=/https*:\/\/(www.)?\w+.(com|net)/gi;
    reg__=/https*:\/\/(www.)?\w+.\w+/gi;
    reg__=/(https*:\/\/)?(www.)?\w+.\w+/gi;
console.log(urlWeb.match(reg__));



// v 139 Regular Expression Character Classes P2
/*console.log("P02");
/*
\b ===> start with or end with (\bspam|spam\b) from word spam
\B ===>  not start with or end ...

*/
/*
let names_='Sayed 1Spam 2Spam 3Spam Spam4 Spam5 Ossama Ahmed Aspamo';
let regAnmeSpa=/(\bspam|spam\b)/gi;
console.log(names_.match(regAnmeSpa));

/*---------Les fonctions  Match et test -------------------- */
/*
console.log("#".repeat(40));
let reg=/(\Bspam\B)/gi;
let nn="555spamHH";
console.log(reg.test(nn));
if(reg.test(nn)){
  console.log("Ouiiiii ");
}

// v 138 Regular Expression Character Classes P1

/*
. ===> all except newLine 
w ===> word  [a-zA-Z0-9] et _
W ===> All not word 
d ===> [0-9] 
D ===> ![0-9] 
s ===>  space 
S ===>  Non space 

*/
/*
console.log('12 45 msjksd @ gg ..'.match(/\s/g));

let email_="o@@@g...com o@g.com o@g.net A@Y.com O-g.com o@s.org 1@1.com";

let regEm=/[a-zA-Z0-9]@[a-zA-Z0-9](.com|.net|.org)/gi;

console.log(email_.match(regEm));
regEm=/\w@\w.com/gi;
regEm=/\w@\w.(com|net|org)/gi;
console.log(email_.match(regEm));


// v 137 Regular Expression Ranges P2
/*
let mytxt="AaBbcdefG123!234%^&*";
let lowerCas=/[a-z]/g;
let notLowarCas=/[^a-z]/g;
let uperCas=/[A-Z]/g;
let notUperCas=/[^A-Z]/g;
console.log(mytxt.match(lowerCas));
console.log(mytxt.match(notLowarCas));
console.log(mytxt.match(uperCas));
console.log(mytxt.match(notUperCas));

let a_c_e=/[ace]/g;
let not_a_c_e=/[^ace]/g;
console.log(mytxt.match(a_c_e));
console.log(mytxt.match(not_a_c_e));

let upAndLowaAlphab=/[a-zA-Z]/gi;
console.log(mytxt.match(upAndLowaAlphab));

let notAlphaNumbe=/[^a-zA-Z0-9]/gi;
console.log(mytxt.match(notAlphaNumbe));


// v 136 Regular Expression Ranges P1

// (X|Y)  : X ou Y
/*
let txt = "com Net Org Info Code Io";
let regEx = /(net|info|io)/gi;
// console.log(txt.match(regEx));

// let numr_='12345678910';
// let regNum=/[0-3]/g;
// console.log(numr_.match(regNum));
/*
let notNumrs = "12345678910";
console.log(notNumrs.split(""));
let regNumNot = /[1-3]/g; // not 1 et 2 et 3
console.log(notNumrs.match(regNumNot));

regNumNot = /[^1-3]/g; // not 1 et 2 et 3
console.log(notNumrs.match(regNumNot));

regNumNot = /[^13]/g; // not 1 et 3
console.log(notNumrs.match(regNumNot));

let spciNum=":12%354HG_87!@^`5mL";
let regunNotNumber=/[^0-9]/ig;
console.log(spciNum.match(regunNotNumber)); 

let alphab="Os1 Os1Os Os2 Os8 Os8Os";
let regAlph=/os[5-9]os/ig;
console.log(alphab.match(regAlph));


// v 135 Regular Expression Modifiers
/*
// new RegExp("txt",' i g m ')
console.log("v 135");
// ---------- i :case incensitive (a = A)
// ---------- g :global (Toute Les elements)
// ---------- m :Multiline


let myString="Hellow Elzero Web Low School I Love elzero";
let regex_=/low/ig;
console.log(myString.match(regex_));



// v 134 Regular Expression
// console.log("v 134");
// explication 

// v 133 Map and Set Challenge
/*

console.log("object");

let n1=[10,30,10,20],
n2=[30,20,10]; 
 
//  console.log("Resulta 1 ",[...(n1.pop().toString())].shift().concat(n1.shift())); 
  console.log(Math.max(...n1) * ([...n1,...n2]).length); 

console.log(n1);
console.log(n2);


// V 132  Spread syntax And Use Cases
/* 
// ...Iterable
// ---------Concat arry
// ---------Push Inside Arry
// ---------Use With Math Object
// ---------Spread With objects => Merge object
console.log("Yassin");
console.log(..."Yassin");
console.log([..."Yassin"]);
console.log(Array.from("Yassin"));

// Concat 

let ary1=[1,2,3],ary2=[4,5,6];
let allAry=[...ary1, ...ary2]; // allAry=ary1.concat(ary2);
                                //console.log(allAry);

console.log(allAry);
let copy_=[...ary1];
copy_[2]="5555";
console.log(ary1);
console.log(copy_); 

//Push new Element
let frind=["yassine","Nassim","rachid"];
console.log(frind);
// frind=["Nom1",...frind,"Amin"];
frind.push(...["Nom1","Amin"]) // ...arr || pas de ... =>  elem+arr
console.log(frind);

//Math
let numbers= [1,5,20,60,-6,200,30];

console.log(Math.max(...numbers));  

// object 
let objOne ={
  Nom:1,
  Pren:2
};
let objTwo ={
  Adrs:3,
  age:4
}

let obj_1_2={...objOne,...objTwo , hh:55,gg:66};
console.log(obj_1_2);

// V 131 Arry.every Methode  kol elements
// all elements respectes condition
/*
let numeros_=[1,5,2,20,55,9,6,0,-6,150]; 
let chek=numeros_.every((e)=> e < 200); 
console.log(chek);

const locat_ = {
  10:'place 1',
  20:'place 2',
  30:'place 3',
  40:'place 4',
  50:'place 5',
};

let mykesy=Object.keys(locat_); 

console.log(mykesy);
let minLoca_=15;
mykesy=mykesy.map((ele) => +ele);
console.log(mykesy);

chek = mykesy.every(function(ele){

  console.log(typeof ele);
  return ele > this;

},minLoca_)

console.log(chek);


// V 130 Arry.Some Methode  ba3d elements
// attention il faut utilise arrr.some(function(){},val) pas ()=> {}
/*
console.log('test v 130');

let numeros_=[1,5,2,20,55,9,6,0,-6,150];

// let res_=numeros_.some((ele,indx_) => { 
//   console.log(ele);
//  return ele > 5;
// })
let nbr=50;
let res_=numeros_.some(function (ele)  { 
  // console.log(this);
 return ele > this;
},nbr)

console.log(res_);

/****** Some avec Object ************** */
/*
console.log("--".repeat(20));
let myRang = {
  max:20,
  min:10
}

function chekRang(arr,oobbjj) { 

return arr.some(function(elem__8)  { 
  return elem__8 >= this.min && elem__8 <= this.max ;
} , oobbjj);

}


console.log(chekRang(numeros_,myRang));


// V 129 Arry.copyWithin 
/*

let list_=[10,20,30,40,50,"A","B"];
console.log(list_);

// console.log(list_.copyWithin(3));// target index 3 => place de collier || start 0  ||  and 0 

// console.log(list_.copyWithin( 4,-1));//[ 10, 20, 30, 40, "B", "A", "B" ]


// console.log(list_.copyWithin(-6,-2 ));//[ 10,  "A", "B" , 40, 50, "A", "B" ]

console.log(list_.copyWithin(1,-2 ,-1));//[ 10,  "A", 30 , 40, 50, "A", "B" ]


// V 128 Arry.form Methode 

/*

// console.log(("Ossama").split("")); 
console.log(Array.from("Ossama"));
// console.log(Array.from(12345)); // not etirable 

console.log(Array.from("12345",function(n) { 
  return +n + +n;
}));
// Ou meme 
console.log(Array.from("12345",(n)=>   +n + +n ));


let myList_0=[1,1,1,2,2,3,4,5,5];
console.log(myList_0);
// let mySet= new Set(myList_0);
// console.log(Array.from(mySet));

console.log(Array.from(new Set(myList_0)));
// Meme 
console.log([...new Set(myList_0)]);


function testArgument(){
  return Array.from(arguments);
}
console.log(testArgument("Osama","Yassine","Rachid",1,2,"test"));


// V 127 Map vs WeakMap
/*
let mapUser={theNam:"Nom1"};
let myMap=new Map();
myMap.set(mapUser,"Object");

mapUser=null;

console.log(myMap);
console.log("--------".repeat(8));
/****** WeakMap **************************** */
/*
let weakMapUser={theNam_:"Nom_01"};
let myMapWeak = new WeakMap();
myMapWeak.set(weakMapUser,"Object");

weakMapUser = null;
// normalamen il va  le supprime de la memeoire
console.log(myMapWeak);



// V 126 MAP METHODES
// Methode 
// ------ set
// ------ get
// ------ delete
// ------ claer
// ------ has
/*
let testset1=[1,2,3,4,5,5,5,1,2];
let testset= new Set( testset1); 
console.log(testset);


let myMap= new Map( [
  [10,"Number"],
  ["Name","String"],
  [false,"Boolenn"],
]);
// myMap.set(10,"Number");
// myMap.set("Name","String");


console.log(myMap);
console.log(myMap.get(10));
console.log(myMap.get("Name"));
console.log(myMap.get(false));

/// delete
console.log(myMap.size);
console.log(myMap.delete('Name'));
// myMap.clear();
console.log(myMap.size);

// has 
console.log(myMap.has(false));



// V 125 Map Data Type Vs Object
/*
console.log('test');

let obj={};
let objNul=Object.create(null);
let myMap = new Map( );

console.log(obj);
console.log(objNul);
console.log(myMap);

let newObjj = {
  10:"Number",
  '10':"String",
}

console.log(newObjj[10]); //  String
console.log(newObjj["10"]);//  String

myMap.set( 10,"Number" );
myMap.set( "10","String");
myMap.set(true,"Boolen");
myMap.set({a:1,b:2},"Object 12 23 ");
myMap.set(function adddd(iddd){console.log("object "+iddd);},"fonction1");
console.log("### ".repeat(10));
console.log(myMap.get(true));
console.log(myMap.get(10));
console.log(myMap.get("10"));
console.log(myMap.get({a:1,b:2}));
console.log(myMap.get( ));
console.log("### ".repeat(10)); 
console.log(myMap);




// V 124 SET  vs WeakSet and gardage Collector
// Set and WeakSet 
/*
let myData=[1,1,1,50,3,"A","a","A"];
let myDataUniq=new Set(myData);

console.log(myData);
console.log(myDataUniq);
// console.log('This is Size '+myDataUniq.size );

let iterator=myDataUniq.keys();

// console.log("1",iterator.next());
// console.log("2",iterator.next());
// console.log("3",iterator.next().value);
// console.log("4",iterator.next());
// console.log("5",iterator.next()); 


//ForEach
// console.log('ForEach ------------------------');
// myDataUniq.forEach((elem) => console.log(elem))

console.log("#".repeat(40));
const obbbb = {a:1,cc:2};

// SetWeak
let myObject = [{a:1,b:2 , c:3, d:4}];
let myDataUniqWeq=new WeakSet(myObject); 
myDataUniqWeq.add(obbbb);
console.log(myDataUniqWeq.has(obbbb)); 

console.log(myDataUniqWeq.has("a")); 

// WeakSet no size;





// V 123 SET DATA TYPE AND METHODES
// pour Obtenir les unique values
/*
console.log("V 123");

// function
// ---- size 

// Methode 
// ----- add
// ----- delete
// ----- clear
// ----- has
 
let myData=[1,1,1,2,3,"A","a","A"];

// let uniqueData=new Set(myData);
let uniqueData=new Set([1,1,1,2,3,"A","a","A"]);
console.log(myData);

console.log(uniqueData);
console.log(uniqueData.size);
console.log(uniqueData.add(2));
console.log(uniqueData);
console.log(uniqueData.delete(2));
console.log(uniqueData);
// uniqueData.clear();
console.log(uniqueData.has("a"));
uniqueData.add(1).add(1).add(1).add(20);
console.log(uniqueData);





// V 122 destrinction challenge
/*
console.log("test ");


let chosen =3;
let myFrinds = [
  {title:"Osama" , age:39 , avalable:true , skills :["HTML","CSS"]},
  {title:"Ahmed" , age:25 , avalable:false , skills :["Pythone","Django"]},
  {title:"Sayed" , age:33 , avalable:true , skills :["PHP","Laravel"]}
];



let {title , age , avalable , skills :[,skl]}=myFrinds[chosen -1];

console.log(` Title=${title} || age=${age} || avalabel=${avalable ? "Oui Avalab":"Non Avalable"} || Last_Skil=${skl} `);


// V 121 destrinction Mixed Content
/*
console.log('Text 00');


const user8 = {
  name8_: "Nom1",
  age8_: 20,
  skils8_: [ "html", "css" , "JavaScript" ],
  adress8_: {
    pay8_:"maroc",
    vile8_:"kech",
  },
  prof:"pppp"
};

let {name8_:n,age8_:a , skils8_:[ , , js] , adress8_:{vile8_:p}, prof="der"}=user8;
console.log(` Name = ${n} \n age=${a} \n skil=${js} \n adres=${p}\n prof=${prof}`);


// V 120 function parameters
/*
console.log("Finction param ********** ");

const user8 = {
  name8_: "Nom1",
  age8_: 20,
  skils8_: { html8_: 80, css8_: 50 },
};


show_Detail(user8);

function show_Detail({name8_: n,age8_,skils8_:{css8_}}=obj) {
  console.log(` Your Name is   ${ n}`);
  console.log(` Your Age is ${ age8_}`);
  console.log(` Your Css Progre is ${css8_}`);
}

// V 119 distruction Object p2
/*
const user8= {
  name8_:"Nom1",
  age8_:20,
  title8_:"Developer",
  contry8_:"Maroc",
  color8__:"black",
  skils8_:{html8_:80, css8_:50}
}

console.log("object");


let {name8_,age8_,contry8_ ,title8_:tit , color8__ : clr = "red",skils8_: {html8_:ht_, css8_}  }=user8; 

console.log("***********************");
console.log(name8_);
console.log(age8_);
console.log(tit);
console.log(contry8_);
console.log(clr);
console.log(ht_);// user.skils.html
console.log(css8_);// user.skils.css


// For skils
let {html8_ :skl_1 ,css8_:skl_2} = user8.skils8_;


console.log('Html ',skl_1 ,'|| css ',skl_2);


// V 118 distruction Object p1
/*
console.log('distruction object ');
const user8= {
  name8_:"Nom1",
  age8_:20,
  title8_:"Developer",
  contry8_:"Maroc"
}

console.log(user8.name8_);
console.log(user8.age8_);
console.log(user8.title8_);
console.log(user8.contry8_);
// attention meme nom de varaible x=user.x
// let name8_ , age8_ , title8_ ,contry8_ ;
//  ({name8_,age8_,title8_,contry8_}=user8); 
// Ou 
let {name8_,age8_,contry8_}=user8; 

console.log("***********************");
console.log(name8_);
console.log(age8_);
// console.log(title8_);
console.log(contry8_);


// V 117 distruction array swap variables s p3
/*
console.log('swap vaiables');

let book="vidoe",vidoe="book";
console.log("vid ",vidoe ,"|| bok ",book) ;
[vidoe,book]=[book , vidoe];
console.log("vid ",vidoe ,"|| bok ",book) ;



// V 116 distruction arrays p2
/*
let myList= ["a1", "a2", "a3", ["b1", "b2", ["c1","Mohamed","c3"]]];

console.log(myList[3][2][1]);
// let vv="";
 let [, , , [, , [,vv]]] = myList
console.log(vv);


// V 115 distruction arrays p1
 /*
let myArr = ["Nom1","Nom2","Nom3","Nom4"] ;


let  [a1="f", a2, a3, a4, a5="defaullltt"]=myArr; 

console.log(a1,a2,a3,a4,a5);
console.log('test v 115');


let [b1, b2, , b3]=myArr;  //  1 et 2 et 4
console.log(b1 , b2 , b3);


// my test de click

/*
let div_one=document.querySelector('.div_one');


div_one.addEventListener("click",function(e) {

  if(e.target.classList.contains("ok"))
  {
    
    console.log("elem ",e.target.getAttribute("data-ro"));
    console.log("ok p",e.target.parentElement.getAttribute("data-col"));
    console.log("ok p p",e.target.parentElement.parentElement.getAttribute("data-col"));
    
  }
})




// fin my test de click
 
// V 114 challenge

let btn_enrg = document.querySelector('[type="submit"]'),
  inp_enrg = document.querySelector('[name="titre_tsks"]'),
  div_task = document.querySelector(".tasks_tsks"),
  listOfTasks = [
    {
      id: 5,
      title: "Nom1",
      comple: false,
    },
    {
      id: 55,
      title: "Nom2",
      comple: true,
    },
    {
      id: 44,
      title: "Nom3",
      comple: false,
    },
  ];

// if(window.localStorage.getItem('tasks')){
//   listOfTasks=JSON.parse(window.localStorage.getItem('tasks'));
// }

gettaskFromStorage();

btn_enrg.addEventListener("click", function () {
  if (inp_enrg.value.length > 0) {
    addTaskToArry(inp_enrg.value);

    addElementToPage(listOfTasks);

    inp_enrg.value = "";
  }
});

div_task.addEventListener("click", function (e) {
  // console.log(e.target.getA);
  // console.log(e.target.classList.contains("delete_btn"));

  if (e.target.classList.contains("delete_btn")) {
    e.target.parentElement.remove();
    
    deletTaskWithId(e.target.parentElement.getAttribute("data-id"));

    addTaskToStokage(listOfTasks);
  }
  
  if (e.target.classList.contains("task_conta")) {
    e.target.classList.toggle("complit"); 
    toggleStatuTaskWith(e.target.getAttribute("data-id"))
  }
});

function addTaskToArry(taskText) {
  const task = {
    id: Date.now(),
    title: taskText,
    comple: false,
  };

  listOfTasks.unshift(task);

  addTaskToStokage(listOfTasks);
}

function addTaskToStokage(arryList) {
  window.localStorage.setItem("tasks", JSON.stringify(arryList));
}

function gettaskFromStorage() {
  if (window.localStorage.getItem("tasks")) {
    listOfTasks = JSON.parse(window.localStorage.getItem("tasks"));

    addElementToPage(listOfTasks);
  }
}

function addElementToPage(arryList) {
  let ts_k = "";
  arryList.map((task) => {
    ts_k += `<div class="task_conta ${task.comple ? "complit" : ""}" data-id='${
      task.id
    }'><p class="title">${
      task.title
    } </p>    <button class="delete_btn"  >Delete</button>  </div>`;
  });
  div_task.innerHTML = ts_k;
}

function toggleStatuTaskWith(iddd){
  listOfTasks.map((elem) => {
    if(elem.id == iddd){
      elem.comple= !elem.comple;
    }
  })
  // console.log('list => ',listOfTasks);
  addTaskToStokage(listOfTasks);

}

function deletTaskWithId(id_) {
  //   for (let i = 0; i < listOfTasks.length; i++) {
  //   if(listOfTasks[i].id == parseInt(id_))
  //   console.log('Oui ')
  // }

  listOfTasks = listOfTasks.filter((elem) => elem.id !== parseInt(id_));
  
  console.log("dasn delete ", listOfTasks);
}

// V 113   session storage
/*
// meme que storageLocal 
// destroy apre la fermeture de navigator

// sessionStorage.clear();
// localStorage.clear();

console.log('test de vides 113');

localStorage.setItem('color_1',"red ls");
sessionStorage.setItem('color_1',"red ss");

console.log("ls",localStorage.color_1);
console.log("ss",sessionStorage.color_1);// dispare appre la fermeture de navigateur

let inpt_=document.querySelector('[name="name_txt"]');
let stok__=window.sessionStorage.getItem('name_');

inpt_.onblur= function(){ 
  window.sessionStorage.setItem('name_',this.value);
  console.log(this.value);
}
 
if(stok__)
{
  inpt_.value=stok__;
}



// V 112 localstorage
/*
// localStorage.clear();
// localStorage.setItem('color1','red');
// localStorage.setItem('color2','green');
// localStorage.setItem('color3','magenta');
// localStorage.setItem('color4','blue');

let lesButtns = document.querySelectorAll("button");
let div_ecra = document.querySelector(".ecran_color");

if (localStorage.vvvv) {
  div_ecra.style.backgroundColor = localStorage.vvvv;

// M 1
  // lesButtns.forEach((btnn) => {
  //    if(btnn.getAttribute("data-color") === localStorage.vvvv)
  //   {
  //     btnn.classList.add("active_los");
  //   }
  // })
// M 2 best

document.querySelector(`[data-color="${localStorage.vvvv}"]`).classList.add('active_los');

}

lesButtns.forEach((butn) => {
  butn.addEventListener("click", (e) => {
    console.log(e.currentTarget.dataset.color);
    div_ecra.style.backgroundColor = e.currentTarget.dataset.color;
    localStorage.vvvv = e.currentTarget.dataset.color;

    lesButtns.forEach((btnnn) => {
      btnnn.classList.remove("active_los");
    });

    e.currentTarget.classList.add("active_los");

  });
});


/* m 1 moi pas bon pour le pratique
console.log(localStorage.vvvv);
console.log(localStorage);
if(localStorage.vvvv)
{
  div_ecra.style.backgroundColor=localStorage.vvvv; 

}


lesButtns[0].onclick=()=> { 
  div_ecra.style.backgroundColor=localStorage.color1; 
  localStorage.vvvv=localStorage.color1;
}

lesButtns[1].onclick=()=> { 
  div_ecra.style.backgroundColor=localStorage.color2; 
  localStorage.vvvv=localStorage.color2;

}

lesButtns[2].onclick=()=> { 
  div_ecra.style.backgroundColor=localStorage.color3; 
  localStorage.vvvv=localStorage.color3;

}

lesButtns[3].onclick=()=> { 
  div_ecra.style.backgroundColor=localStorage.color4; 
  localStorage.setItem("vvvv",localStorage.color4);  
}

// V 111 Local storage
/*
// BOM 
// localStorage
// --- setItem
// --- getItem
// --- removeItem
// --- clear
// --- key
// --------Info
// ----No Expiration time
// ----http and https
// ----Private Tab

console.log('Locasl storage');
window.localStorage.setItem('K1',"Mot de pass");
window.localStorage.myVar="My New Var";
window.localStorage["v1"]="My New Va11 1111";

console.log(window.localStorage.K1);
console.log(window.localStorage.getItem('myVar'));
console.log(window.localStorage["v1"]);

console.log(window.localStorage );
 

// window.localStorage.removeItem('v1'); 
 
// console.log(window.localStorage );


// window.localStorage.clear(); 
 
console.log(window.localStorage );

console.log(localStorage.key(0));
console.log(localStorage.key(1));
console.log(localStorage.key(2));

// V 110 
/*
console.log("Test De V 110");

console.log(window.scrollX === window.pageXOffset);
console.log(window.screenY === window.pageYOffset);

let btn = document.querySelector(".btn_up");

window.onscroll = (e) => {
  if (window.scrollY > 500) {
    console.log(window.scrollY);
    btn.style.display = "block";
  } else btn.style.display = "none";
};

btn.onclick=function(){
  window.scroll({
    top:20, 
    left:0,
    behavior:"smooth"
  })
}

// V 109 scrooling

// let myNewWind = window.open("https://www.google.com","","height=400,width=300");

// window.scrollTo ===  window.scroll
/*
window.scroll(2000,1000); 
window.scroll(0,0); 
console.log("scrol "+window.screenX);
console.log("scrolX "+parseInt(window.scrollX));
console.log("scrolY "+parseInt(window.scrollY));



let btn = document.createElement('button');
console.log('btn ', btn);
btn.style.backgroundColor="red"; 
btn.innerHTML="Test de button";

btn.addEventListener('click', ()=> {
  
window.scroll({
  top:0,
  left:0,
  behavior:"smooth"
})
})

document.body.appendChild(btn);

/*

  
// V 108 window history Object
/*
// ---- Propre lenght
// ---- Methodes 
// -------------- back() ===== go(-1); 
// -------------- forword() ===== go(1); 
// -------------- go(0) ===== refrech; 

// history.back();

console.log(history);
console.log(History);
// V 107
/*
console.log("object");

setTimeout(() => {
  //_self _blank
  window.open('https://www.google.com/',"","width=200,height=300,top=30,left=300");
  //One_Two.html#sect02 right
}, 20000);




// window.open('test00');// overt par script 
// window.close(); // fermer par script

// V 106 windows Location Object 
//BOM Browser Object Model
/*


console.log(location);

location.assign('https://www.google.com/');



location.replace('https://www.google.com/');
// supprimer cette location et remplace par ( iciciicici)
/*

console.log(location.protocol);  //http :



location.href="#v1";
console.log(location.hash);  //#v1 :



// location.reload();







console.log("location" );
// console.log( location);
// console.log( location.href); 
// location.href="https://www.google.com/";
// location.href="/One_Two.html#sect02"; 

// console.log( location.host);
// console.log( location.hostname); 

 
  // location.hostname="test"; // done test/55000;
//  location.host="Page"; //https://page:5500/



// V 105 setInterval  and clearInterval
// 2s cal 2s cal 2s cal 2s cal ..... fin
/*
let mybtn = document.querySelector(".btn_stop"),
  i = 0;
console.log(mybtn);

let timInter = setInterval(function () {
  i++;
  console.log(" ************* ", i);
  return "";
}, 1000);

mybtn.addEventListener("click", () => {
  clearInterval(timInter);
});

setTimeout(() => {
  console.log("Tiiiiiiiiiiiime ");
}, 2000);

/*
let mytimItr=setInterval(func_, 1000),i=0;

function  func_()   {
  console.log('setInterval boucle '+i);
  btn.innerHTML =" STOP "+i;
  i++;
}

console.log('mytimItr '+mytimItr); 
let btn=document.querySelector('.btn_stop');

btn.onclick=function(){
  console.log('Clikc ici '+mytimItr);
  clearInterval(mytimItr);
}

// V 104 setTimeOut and clearTimeOut
/*
console.log('My tes')
// 2s cal fin
// setTimeout(function(){
//   console.log('Is Time from TimeOute');
// },2000);


// setTimeout(sayHay,2000);
// function sayHay(){
//   console.log('Is Time from TimeOute');
// }


let mytime=setTimeout(sayHay,3000,"Nom 1",20 );
function sayHay(user00,age__){
  console.log('Is Time from TimeOute '+ user00+ ' age= '+age__);
}

let btn= document.getElementsByClassName("btn_stop")[0];
 
btn.onclick=function(){ 
  clearTimeout(mytime); 
}

console.log(mytime);


// V 103 BOM  alert prompt Confirme
/*
console.log(alert("Alert" ));
// voire  sweetAlert2

console.log(confirm("Ok or Not"));

console.log(prompt("Prompt ===> ","Yes"));
*/

// V 102 BOM Browser Object Module
/*
console.log('************** BOM Test *************');

// window
// V 101 challeng
/*
let div_Glob = document.createElement("div");
div_Glob.className = "div_glob";
div_Glob.style.cssText="width:100%; ;background-color:#787171 ;position:absolute ;font-family: arial";

///////Debut Header ////////////////////////////// 
let myHeder = document.createElement("div");
myHeder.className = "myHeder"; 

myHeder.style.padding = "4px 12px"; 
myHeder.style.backgroundColor = "white"; 
myHeder.style.display="flex";
myHeder.style.justifyContent="space-between";
myHeder.style.alignItems="center"; 



let div_logo = document.createElement("div");
div_logo.className = "div_logo";
div_logo.innerHTML = "<span>Elzero</span>";
div_logo.style.cssText ="font-weight: bold; color:#0ff50f; font-size: 26px; ";

  
let div_menu = document.createElement("div");
div_menu.style.cssText = "width:250px; display: flex;justify-content: space-between;  ";

div_menu.innerHTML ="<a href='#'>Home</a><a href='#'>Services</a><a href='#'>Aboute</a><a href='#'>Contact</a>";

window.onload = function () {
  for (let i = 0; i < document.links.length; i++) {
    document.links[i].style.color = "black";
  }
  for (let i = 0; i < document.links.length; i++) {
    document.links[i].style.cssText = "text-decoration: none;color: black";

    document.links[i].onmouseenter = function () { 
      document.links[i].style.color = "red"; 
    };
    
    document.links[i].onmouseleave = function () { 
      document.links[i].style.color = "black"; 
    };
  }
};
///////Fin Header //////////////////////////////
///////Debut container ////////////////////////////// 


let div_conta=document.createElement("div");
div_conta.className="div_conta"; 

let div_produ=document.createElement("div");

div_produ.innerHTML="<h2>1</h2> <span>Product<span> ";

div_produ.style.cssText="  align-items: center;display: flex; justify-content: center; background-color: white;  flex-direction: column;padding:10px 20px;border-radius: 10px;";

div_conta.append(div_produ); 
for(let i =2 ; i< 16 ; i++){
  let clon_produ=div_produ.cloneNode(false);
  clon_produ.innerHTML=`<h2>${i}</h2> <span>Product<span> `;
  div_conta.append(clon_produ);
}

div_conta.style.cssText="display: grid;grid-template-columns: repeat(3,auto);grid-gap: 10px;padding: 10px; background-color: gray;he"


let div_footer = document.createElement("div");
div_footer.className="div_footer";
 
div_footer.style.cssText="background-color: red;width: 100%;height: 30px;text-align: center;  display: flex;justify-content: center;align-items: center;font-size: 12px ;font-weight: bold";

div_footer.innerHTML="<span>Copyright 2024 </span>";





///////Fin container //////////////////////////////// 

myHeder.appendChild(div_logo);
myHeder.appendChild(div_menu);
div_Glob.appendChild(myHeder);
div_Glob.appendChild(div_conta);
div_Glob.appendChild(div_footer);
document.body.prepend(div_Glob);
// V 100  DOM and event listner
/*
let mypp = document.getElementById("mypara0011");
console.log(mypp);

// let clonPara=mypp.cloneNode(true);
// clonPara.id=mypp.id+"Clon";

mypp.onclick = function () {
  let clonPara = mypp.cloneNode(true);

  // mypp.after(clonPara);
  clonPara.className = "tesss";
  document.body.appendChild(clonPara);
};

// clonPara.onclick = function (){  
  //Error car l elemnts n est pas encour declare
//   console.log("Im clond");
// }

// Pour Ajouter sur un element pas encour cree sur le document
document.addEventListener("click", function (e) {
  // console.log(e.target);
  if (e.target.className === "tesss") {
    console.log("Click sur para Cloned");
  }
});

/*

mypp.onclick=()=> {
  console.log('One 0');
}

function one(){
  console.log('One 1');
}
function two(){
  console.log('One 2');
}
mypp.onclick=one;
mypp.onclick=two;

mypp.addEventListener('click',one);
mypp.addEventListener('click',function(){
  console.log('One 1 event 1'); 
});



// V 99  DOM Cloning 
// cloneNode (Deep)
/*

let mydiv=document.querySelector('.myddd');
mydiv.style.border="2px solid black";

let mypar= document.querySelector("#my_p").cloneNode(true);
// true toutes les elements et aussi les text 
mypar.id=mypar.id+"Clounne";

console.log(mypar);
 
mydiv.appendChild(mypar);



// V 98 DOM traversing
/*

console.log('Tes');
 
let myele=document.getElementsByClassName('two')[0];
myele.style.cssText="color:red;background-color:green";

// ignere le commentaire soulement les balises
console.log(myele.nextElementSibling);
console.log(myele.previousElementSibling);

// all elements
console.log(myele.nextSibling);
console.log(myele.previousSibling);

//parrent 
console.log(myele.parentElement); 

myele.onclick=()=> {
  myele.parentElement.style.border="2px solid red"; 
  setTimeout(() => {
    myele.parentElement.remove(); 
 console.log('TimeOute');
  }, 2000);
}



// V 97 DOM
// ---- befor
// ---- after
// ---- append
// ---- prepend
// ---- remove
/*
let elem_de_div=document.querySelector('#diivv');
elem_de_div.style.cssText="border:2px solid black;padding:5px";
let elem_p=document.createElement('p');
let tex_pa=document.createTextNode('Mon paragrap');
elem_p.classList.add('mmm');
elem_p.appendChild(tex_pa);


// elem_de_div.before(elem_p);
elem_de_div.after(elem_p);



//elem_de_div.append(elem_p);// ajouter a la fin dans le div
//elem_de_div.prepend(elem_p);// ajouter a la debut  dans le div

elem_de_div.onclick=function(){
  console.log('onclick');

  if(document.querySelector(".mmm")){
   elem_p.remove();   
 }
 else {
  this.prepend(elem_p);  
  console.log(this)
 }
}



// V 96 css styling and stylesheets 
/*
let elem_css=document.getElementsByTagName('div')[0];
console.log(elem_css);


//M1
elem_css.style.color="Red";
elem_css.style.fontSize="1.5em";
elem_css.style.cssText="background-color:green;padding:10px";

//M2
elem_css.style.setProperty("border","4px solid  red","important");
elem_css.style.setProperty("border-radius","20px");

elem_css.style.removeProperty("border-radius");


//M3  supprimer de fichier.css
console.log(document.styleSheets[0].cssRules[0].style);

console.log(document.styleSheets[0].cssRules[0].style.setProperty("font-size",'1px' )); 
console.log(document.styleSheets[0].cssRules[0].style.removeProperty("font-size"));



// V 95 class list Object and method
/*
console.log('test 00');
// ClassList 
// ---- length
// ---- contains
// ---- item
// ---- add
// ---- remove
// ---- toggle


let element_div=document.querySelector('div#diivv');

console.log(element_div);
console.log(element_div.classList);
console.log(element_div.classList.length);
console.log(element_div.classList.contains("test"));
console.log(element_div.classList.item(2));
console.log(element_div.classList.add('bluur','active'));// One oui +
console.log(element_div.classList.remove('bluur','active')); // One oui +



element_div.onclick=function (){
  console.log("Click");
  this.classList.toggle("vvv");
console.log(element_div);

}






// V 94 click Focus Blur
/*
let one =document.getElementsByClassName('one')[0],
two = document.getElementsByClassName('two')[0],
// link01=document.links[0]
;
console.log(link01);

console.log(one);
console.log(two);

  window.onload = function (){ 
  console.log('OnLoad ');  
    two.focus();
} 
one.onblur=function(){
  console.log(' Onblur');
// link01.click();
document.links[0].click();
}


// V 93  validation forme and reevent default
/*
let inpUserNa = document.forms[0].userName;
let inpAge = document.forms[0].age; 
 
console.log(document.links[0])

document.forms[0].onsubmit = function (e) {
  let userName = false;
  let ageUser = false;

  if (inpUserNa.value !== "" && inpUserNa.value.length < 10) userName = true;

  console.log("Ageeee ", inpAge.value.length);
  if (inpAge.value.length > 5) {
    console.log("Suup de 2 ag");
    ageUser = true;
  }

  if (userName === false || ageUser === false) {
    console.log("Preventdefault");
    e.preventDefault();
  }
};
//userName
//age

// V 92 des evntes

/*
console.log("The events");



window.onresize = function (){
  console.log('resize');
}



let btn00 = document.getElementById("btn00");

btn00.onclick= ()=> {
  console.log('this is from  button')
}

btn00.oncontextmenu = function(){ 
  console.log('LE click Drroite ici');
}
document.body.oncontextmenu = ()=> {
  console.log('Le clikc droit sur le body ');
}

let mydivvv=document.createElement("div"),
mytext=document.createTextNode('HH HH'),
myClas=document.createAttribute('Class');


mydivvv.appendChild(mytext);
mydivvv.style.color="red";
mydivvv.style.position="fixed";
mydivvv.style.bottom=0;
mydivvv.style.right="2px";
mydivvv.style.backgroundColor="green";
mydivvv.style.padding="10px";
mydivvv.style.borderRadius=" 80% 50% 40% 80%";
 mydivvv.style.display='none';

document.body.appendChild(mydivvv);
console.log(mydivvv);

let i=0;
document.body.onscroll = function ()  { 
  // console.log("X" ,window.scrollX);
  //  console.log("Y" ,window.scrollY); 
console.log('**');
mydivvv.style.display='none';

  if(parseInt(window.scrollY) > 2000)
  {
 mydivvv.style.display='inline';
 console.log("Y" , window.scrollY); 

  }
    

}
// V 91  create and append elements
/*
console.log("ttttes");


let meElm=document.querySelector('.div_cls');


console.log(meElm);
console.log("childNodes ",meElm.childNodes);
console.log("children ",meElm.children);

// toutes les elements et les text
console.log(meElm.firstChild);
console.log("Last child ",meElm.lastChild);


// soulement les childes pas de text 
console.log(meElm.firstElementChild);
console.log(meElm.lastElementChild);


console.log(meElm.childNodes[5]);

// V 90  create and append elements
/*

let i = 1 
for(; ; ) {

if( i > 10 ) break;
console.log("test");

let myDivG=document.createElement('div');
let myH2=document.createElement('H2');
let myPar= document.createElement('p');

// text 
let t_h2=document.createTextNode('Product N1 title '+i);
let t_p=document.createTextNode('Bla bla bla bla bla bla bla bla bla bl abla  bla');

//Append text
myH2.appendChild(t_h2);
myPar.appendChild(t_p);

// append elements
myDivG.appendChild(myH2);
myDivG.appendChild(myPar);

//append to body
document.body.appendChild(myDivG);


console.log("fin");


 i++;  

}

// V 89  create and append elements
/*

console.log('V89');
let myEle_=document.createElement('div');
let myAtt_=document.createAttribute('data-costom');
let mytext_=document.createTextNode("My text---- append");
let myComn_=document.createComment('This is Comment');

myEle_.className="My Class";
myEle_.setAttributeNode(myAtt_);
myEle_.setAttribute('data-test',"My test");
myEle_.setAttribute('id',"iidd");
console.log(myEle_);


//Pour Ajouter A Intereur text ou element  a la fin d element
myEle_.appendChild(mytext_);
myEle_.appendChild(myComn_);

document.body.appendChild(myEle_);
 mytext_=document.createTextNode('My new text');

//
myEle_.appendChild(mytext_);

//
document.body.appendChild(myEle_) ; 

// V 88 check attributes and exemple
/*
let myDataSrc = document.getElementById("id_div");
console.log(myDataSrc);
// data-src
if (myDataSrc.hasAttribute("data-src")) {
  console.log("exsite");
  if (myDataSrc.getAttribute("data-src") === "") {
    myDataSrc.removeAttribute("data-src");
  } else {
    myDataSrc.setAttribute("data-src", "New Attribuite");
  }
} else {
  console.log("n existe pas");
}
console.log("///////////////////////");
console.log(myDataSrc);


let myVr =document.getElementsByTagName("div")[0];
console.log(myVr);
if(myVr.hasAttribute("ID")){
  console.log("Has Atribute id");
} 

if(myVr.hasAttributes()){
  console.log("Has AtributeS");
}
else {
  console.log("Note have  AtributeS"); 
}

/*
console.log('console ');

console.log(document.querySelector('.mydiv'));
console.log(document.querySelector('.mydiv').attributes);
console.log(document.querySelector('.mydiv').attributes["title"]) ; 
let myLst=[1,5,6,3,-5,10,8,9,8,-10];
console.log(myLst ); 
console.log(myLst.sort() ); // Alphabithique
console.log(myLst.sort((a ,c) =>  a-c ));// Numero



// V 87 DOM get set element Content and attributes
/*

document.images[0].src="Text.jjppgg";
document.images[0].alt="Text.jjppgg";
document.images[0].id="iiiddd";
document.images[0].className="iiiddd";
document.images[0].title="Picture";


let myLink=document.querySelector('.linnk');
console.log(myLink.getAttribute("href"));
console.log(myLink.getAttribute("class"));//Pas value la class ou Nom de l attribute 
myLink.setAttribute("title","Le titre");
myLink.setAttribute("id","l_id");

console.log(myLink);

/*
let elem_=document.querySelectorAll("a");
elem_[0].href="Test"; 
elem_[0].innerHTML="Tesxt de <b>test</b></br>";
elem_[1].textContent="Tesxt de <b>test</b>";
// V 86 DOM
 /*

let myDivId=document.getElementById("id_1");
myDivId.innerHTML="text";
myDivId.style.color="red";
console.log(myDivId);

let myParaS = document.getElementsByTagName("p");
myParaS[0].innerHTML="Para ghraph <b>01</b>";
myParaS[1].textContent="Para ghraph <b>02</b>";  

let divClNams=document.getElementsByClassName("div_1");
divClNams[0].innerHTML="vvv";
divClNams[1].innerHTML="hh hh hh hh hh";

let querySectr=document.querySelector('.a1');
console.log(querySectr);// La premere element

let querySectrAll=document.querySelectorAll('p');
// let querySectrAll=document.querySelectorAll('.a1');
let querySectrAllid=document.querySelectorAll('#a1');
console.log(querySectrAll[0].innerHTML="ggg");


console.log(document.title);

console.log(document.body);

console.log(document.images);
console.log(document.images[0].src);

console.log(document.forms[0].nom);
console.log(document.forms[0].nom2.value);

console.log(document.links[0].href);
console.log(document.links[0].rel);


// V 85 create object with assign Methode
 /*
console.log("test");

let obj_1 = {
  prop1:1,
  m1:function(){
    return this.prop1;
  }
}

let obj_2 = {
  prop2:2,
  m1:function(){
    return this.prop2;
  }
}

let obj_target = {
  prop1:10,
  prop2:20
}

let newOjg1=Object.assign(obj_target,obj_1,obj_2); 
console.log(newOjg1);
//Ou 

let newOjg2=Object.assign({nam0:"mm0"},obj_1,obj_2,{nam:"mm1",doub:function(){
  return this.nam0;
}}); 
console.log(newOjg2.doub());


// V 84 create object with Creacte Methode
// rool of this in Object
/*


let user__44 = {
  name88:"Nom1",
  age88:20,
  doubleAge:function()  {
  //  doubleAge:()  => { // ne pas utilise dans create object
    return this.age88 + 1;
  }
}

console.log(user__44);
console.log(user__44.doubleAge());
console.log("************************");
let newUsr44 =  Object.create(user__44); 
// let newUsr44 =  Object.create({}); //Object vide
//Ne pas utilise row function pour faire une copie d object

newUsr44.age88=40;
newUsr44.name88="nom 4";
console.log(newUsr44);
console.log(newUsr44.age88);
console.log(newUsr44.doubleAge());




// V 83 this 
/*
 
 let btn=document.getElementById('btncl');

 btn.onclick=function() {
  console.log(this);
 }


 let user__33 = {
  name:"Nom1",
  age:30,
  ageInDay : function (){
    // return user__33.age * 365;
    console.log(this);
    return this.age * 365;
  }
 }

 console.log(user__33.ageInDay());



 /***********************/
/*
console.log(this);
console.log(window) ;
 myvar=100;
console.log(window.myvar);
console.log(this.myvar);




// V 82 Object
//  nouvel methode pour la creation d un object
/*
console.log('My Object ');

// avec construceur Object
let user__22 = new Object({
  age:100,
})

let user__2 ={
  age:10,
}

console.log(user__2);
user__2.age=20;
user__2.name="Nom2";
user__2.sayHay=function(){
 return  "Haaaay";
}
console.log(user__2);
console.log(user__2.age);
console.log(user__2.sayHay());



// V 81 Object
// Nesdted Object And Advanced Trining
/*
let user__1 = {
  nam_1: "Nom_1",
  age_1: 25,
  skils_1: ["CSS", "HTML", "JS"],
  avalabel_1:  false,
  adress_1: {
    ksa_1: "Riyad",
    egyp_1: {
      one_1: "kech",
      two_1: "Casa",
    },
  },

  chekValab_1_func: function () {
    if (user__1.avalabel_1) return "Oui desponible ";
    else return "Non desponible ";
  },
};


console.log(user__1.nam_1);
console.log(user__1.age_1);
console.log(user__1.skils_1[1]);
console.log(user__1.skils_1.join(' | '));

console.log(user__1.adress_1.ksa_1);
console.log(user__1.adress_1.egyp_1.one_1);

console.log(user__1.chekValab_1_func());


;
// V 80 Object
/* 

let user__ = {
  theNam: "Nom01",
  "Contry Of": "Egypt",
  ecriceHay: function (vaaar) {
    return vaaar +"abc".toUpperCase();
  },
};

console.log(user__.theNam);
console.log(user__["theNam"]);
console.log(user__["Contry Of"]);

let var1 = "Contry Of";
console.log(user__[var1]);

console.log(user__.ecriceHay("fffffff"));
// V 79 Object
/*
let usre_= {
  theName:"Osma",
  theAge:10,

  sayHellew : function(){ 
    return  'Hi Im User';
  } 
}

console.log(usre_.theName);
console.log(usre_.theAge);
console.log(usre_.sayHellew());



// V 78 challeng function 
/*
let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

let solt=myString.split(",").filter((ele)=>{
return isNaN(parseInt(ele)) && ele != "_" ;
}) 
.reduce((cur,val) => { 
  return `${cur}${val}`;
});

console.log(solt  );
console.log(solt.substring(+true, --solt.length ) ); 
/*
console.log(-true)
console.log(+true)

// V 77 forEach
// meme que map et reduce mais pas de retourn
/*
console.log("ForEache");

let lesUl = document.querySelectorAll("ul > li");
let lesDiv = document.querySelector("div.content_foreach");
console.log(lesDiv);

lesUl.forEach((element) => {
  element.onclick = function (ele) {

    // lesDiv.classList.toggle("hiiid");
    lesDiv.style.display="none";
  
  };
});

/*
let ListUl = document.querySelectorAll("ul > li");
// console.log('List => '+ListUl);
// console.log( ListUl);

ListUl.forEach((ele) => {
  console.log(ele); 

  ele.onclick = function () {
    console.log(`Click sur ${ele.className}`);
    // Pour supprimer la class
    ListUl.forEach(function (elel) {
      elel.classList.remove("list_cla");
    });

    ele.classList.add("list_cla");
  };
  console.log(`${ele.innerHTML} ${ele.className}`);
});

// V 76 higher order Function
// Reduce Pratique

// 2
/*
let removChars=["E","@","@","L","Z","@","@","E","R","@","O"];


let reoveT=removChars.reduce((cur,val)=> {
  return val != "@" ? cur+=val :cur;
},"")
console.log(reoveT);




// 1
let thisBig=["Bla","Freepalastine","Other","AAA","Battery","Tset"];

let bigWord=thisBig.reduce((cur,ele) => {
  return (cur.length < ele.length)? ele : cur ;
});

console.log(bigWord);


// V 75 higher order Function
// Reduce
/*
let nums_=[10,20,15,30];

console.log(nums_);

let add_=nums_.reduce((acc,val,index,arr) => {
  console.log(`acc=>${acc}| val=>${val}| index=>${index}| acc+val=>${acc+val}`);  
  console.log(`**************************`);
  return acc +val;
},1)

console.log(add_);


// V 74 higher order Function
// Filter pratic
/*
// 3
let mix ="A13BS2ZX";
// roteur le multiple des chifres

let newMix= mix.split('').filter((ele) => { 
return !isNaN(parseInt(ele)) ;
}).map((ele) => ele**2).join("");

console.log(mix);
console.log(newMix);

/*
// 2
let ignorNum_='Elz123er4o';

let newIgnNum_ =ignorNum_.split("").filter((ee) => {
  return isNaN(parseInt(ee))
},10).join('');

console.log(newIgnNum_);

/*


// 1
let listMot="I love Foood Code Too Playing Much";
//Supprumez les mots plus de 4 caraters 
let newlisMo=listMot.split(" ").filter((mot) =>{
  return mot.length <= 4;
}).join(' ');


console.log(newlisMo);


// V 73 higher order Function
// Filter meme que map
/*
console.log('Function filter');


//Get frind with name start  with A
let frind= ["Ahmed","Sameh","Sayed","Asmaa","Amgad","Latifa"],
numbers=[11,20,2,5,17,10];


// Ex2
let ivenNum=numbers.filter((n) => n%2===0 );
console.log(numbers);
console.log(ivenNum);


// Ex1
let nFrind=frind.filter((f) => {
  return f.endsWith("a");
},10);

console.log(nFrind);

/*
console.log(numbers);
console.log("*************----------*************");

let newArr=numbers.map((ele) =>  ele+ele);
console.log(newArr);
 
newArr=numbers.filter((ele) =>  ele>10);
console.log(newArr);







// V 72 higher order Function
// Map practive Aplicat
/*
console.log('V 72');

let ignorNumbr='Elz123er4o';

let ignNbrResut=ignorNumbr.split("").map((ele) =>{
  // return (typeof ele === "number")?  "" :  ele;
  // Probeleme de convert element
console.log(ele);
console.log(typeof +ele);

  return isNaN(parseInt(ele))? ele : "";
},10).join('');

console.log(ignorNumbr);
console.log(ignNbrResut);


/*

let inverseNumbr= [1,-10,-20,15,100,-30];

let invResu= inverseNumbr.map( (nbr) => -nbr);

console.log(inverseNumbr);
console.log(invResu);


let swapcase ="elZERo";

let szResu=swapcase.split("").map((ele) => {
  return ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase() ;
}).join("");

console.log(swapcase);
console.log(szResu);

// V 71 higher order Function
// Accepte une fonction comme parametre
///// map //////////
/*
let myArr = [1, 2, 3, 4, 5, 6];
let myNewArr = [],
  myNewArr2 = [];

// for (let i = 0; i < myArr.length; i++) {
//   myNewArr.push(myArr[i] + myArr[i]);
// }

// myNewArr2 = myArr.map(function (val,index,myArr) {

//   console.log(`Val=> ${val}|| index=> ${index}|| Arry=> ${myArr}|| ${this}`);
 
//   return val + val;
// },10);

//  myNewArr2= myArr.map( (val)=>{
//   return val +val;
//  })

// myNewArr2= myArr.map( (val)=> val+val)

myNewArr = myArr.map( function add(ele){
return ele*3;
},10)
// OU
function add(ele){
  return ele*4;
  }
  myNewArr2=myArr.map(add);


console.log(myArr);
console.log(myNewArr);
console.log(myNewArr2);

// V 70  challeng
/*

// Exercice 02

let myNumbrs =[20,50,10,60];

// let calc=(one ,two , ...nums) =>  one + two +nums[+false]   ;
function calc(one ,two , ...nums) {
   return  one + two + nums[+false]  ;
}
console.log(calc(20,50,10));

// Exercice 01
// let names =function (...listName){
//   return "String ["+listName.join('], [')+"] => Done !";
// }
let names =  (...listName) =>{
  return "String ["+listName.join('], [')+"] => Done !";
}

console.log("Osama","Mohamed","Ali","Ibrahim" );
console.log(names("Osama","Mohamed","Ali","Ibrahim" ));
console.log(names("Osama","Mohamed" ));

// V 69 Scoop Lexical
//console.log('V 69');

// V 68 Scoop Block 
/*
var nbr=0;
if(10 === 10) {
  let nbr=10; 
console.log('From If '+nbr); 
} 
console.log('From Global '+nbr);

/*
var nbr=0;
if(10 === 10) {
let nbr=10; 
} 
console.log('From Global '+nbr);

// V 67 Scoop Global and local  
/*
let a=10;
var b=20;

console.log('From Global a=>'+a);
console.log('From Global b=>'+b);


function testFromLocal(){ 
  let a=80;
  var b=50;
console.log('From Local a=>'+a);
console.log('From Local b=>'+b);
 
}

testFromLocal();

// V 66 Function arrow  => 
/*
let print_F = (n1,n2) => n1+n2;//Si un seul ligne
console.log(print_F(10,40));





let print_G = num => num;//Si un de paramertres
// let print_G = (num) => num;//Si un de paramertres
// let print_G = (num) =>  return num;//Si un de paramertres

console.log(print_G("Test param"));



//One ligne
/*
let print_ = _ => 'Print func';//Si pas de paramertres
let print_0 = () => 'Print func';

console.log(print_());
console.log(print_0());
/*
let print_ = () => {
  return 'Print func';
} 
console.log(print_());
/*
let print_ =function () {
  return 'Print func';
} 
console.log(print_());


// V 65 Function nested
// Methode 03
/*
let fun1 = function (name, age) {
  let hol = "Hallo ";
  function conct() {

    function fulN() {

      return `${name} ${age} `;

    }

    return `${hol}  ---> ${fulN()} `;
  }
  return conct();
};
console.log(fun1("Non1", 50));

// Methode 02
/*
let fun1 = function (name, age) {
  
  let hol = "Hallo "; 
  function conct() {
    return `${hol}  ->${name}  ->${age} `;
  }
  return conct();
};
console.log(fun1("Non1", 50));

// Methode 01
/*
let fun1= function (name,age){

  let hol="Hallo ";

  function conct(){
    hol =`${hol}  ->${name}  ->${ age} `;
  }
conct();
return hol; 
} 
console.log(fun1("Non1",50)); 



// V 64 Function anonyme
/*
setTimeout(  ()=> {
  console.log('*********');
  },1000);
  
  setTimeout( function ()  {
  console.log('**test ****');
  },1500);




////////////////////////////////////////
tes();

function tes(){
  console.log("test function");
}

let myFunc=function(V1,V2) {
  return V1+V2;
}

console.log(myFunc(100,30));

let myFunc_2=function erroroDeFun(V1,V2) {
  return V1+V2;
}

console.log(myFunc_2(100,30));
let i=0;
// document.getElementById('btn_clk').onclick = function test() {
 /* document.getElementById('btn_clk').onclick = function () {
  i++;
  console.log(" Show avent click "+i);
}*/
///////////////////////////
/*
document.getElementById("btn_clk").onclick = show;

function show() {
  i++;
  console.log(" Show  click " + i);
}

/*

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
