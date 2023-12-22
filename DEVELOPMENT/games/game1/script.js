let userChoice=document.querySelector("#el1");
let compChoice=document.querySelector("#el2");
let result=document.querySelector("#el5")
let givenNum = document.querySelectorAll(".vars")
let user;
givenNum.forEach((e)=>{
    e.addEventListener("click",(e)=>{

        console.log(e);
   
    }
    )})

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
