
let com=document.getElementById("com")
let com1=document.getElementById("com1")
let som=document.getElementById("som")
let som1=document.getElementById("som1")
let total=document.getElementById("total")
function inc() {
   com.innerHTML=+com.innerHTML+1;
   som.innerHTML=+som.innerHTML+456;
   total.innerHTML=+total.innerHTML+456
}


function dec() {
    if(com.innerHTML==0){

    }
    else{
         com.innerHTML=+com.innerHTML-1;
         som.innerHTML=+som.innerHTML-456;
         total.innerHTML=+total.innerHTML-456;
    }
}


function inc1() {
    com1.innerHTML=+com1.innerHTML+1;
    som1.innerHTML=+som1.innerHTML+290;
    total.innerHTML=+total.innerHTML+290
 }
 
 
 function dec1() {
     if(com1.innerHTML==0){
 
     }
     else{
          com1.innerHTML=+com1.innerHTML-1;
          som1.innerHTML=+som1.innerHTML-290;
          total.innerHTML=+total.innerHTML-290;
     }
 }
 function inc2() {
    com2.innerHTML=+com2.innerHTML+1;
    som2.innerHTML=+som2.innerHTML+349;
    total.innerHTML=+total.innerHTML+349
 }
 
 
 function dec2() {
     if(com2.innerHTML==0){
 
     }
     else{
          com2.innerHTML=+com2.innerHTML-1;
          som2.innerHTML=+som2.innerHTML-349;
          total.innerHTML=+total.innerHTML-349;
     }
 }



 let sbed=document.getElementById('sbed')
 let lo=document.getElementById('lo')
 function dele() {
    sbed.style.display="none";
    com.innerHTML=+com.innerHTML-1;
    som.innerHTML=+som.innerHTML-456;
    total.innerHTML=+total.innerHTML-456;
}


let lo1=document.getElementById('lo1')
function chcol() {
    if(lo1.style.color!=='red'){
        lo1.style.color="red"
    }
    else{
        lo1.style.color='grey'
    }
}

let sbed1=document.getElementById('sbed1')
let loo=document.getElementById('loo')
function delee() {
   sbed1.style.display="none";
   //com1.innerHTML=+com1.innerHTML-1;
   //som1.innerHTML=+som1.innerHTML-290;
   total.innerHTML=+total.innerHTML-som1.innerHTML;
}


let loo1=document.getElementById('loo1')
function chcole() {
   if(loo1.style.color!=='red'){
       loo1.style.color="red"
   }
   else{
       loo1.style.color='grey'
   }
}




let sbed2=document.getElementById('sbed2')
let looo=document.getElementById('looo')
function deleef() {
   sbed2.style.display="none";
   com2.innerHTML=+com2.innerHTML-1;
   som2.innerHTML=+som2.innerHTML-349;
   total.innerHTML=+total.innerHTML-349;
}


let looo1=document.getElementById('looo1')
function chcolef() {
   if(looo1.style.color!=='red'){
       looo1.style.color="red"
   }
   else{
       looo1.style.color='grey'
   }
}