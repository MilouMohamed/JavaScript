// v 29  string part 3
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

*/
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
/*   */  /*
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