let score = 0
var timer =25
var rn;
function makingBubbles()
{
    
let nBubbles=""
for(let i=0;i<60;i++)
{
   let  ran = getRandomIntInclusive(0,10)
    nBubbles+=`<div id="bubble">${ran}</div>`
}


let ctn=document.querySelector("#content")
ctn.innerHTML=nBubbles;

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}
}

function runtimer(){
    var timig =setInterval(()=>{
        if(timer>0){
            timer--;
            document.querySelector("#timer").textContent=timer;
        }
        else{
            document.querySelector("#content").innerHTML=`GAME OVER !!!<br><br>FINAL SCORE:: ${score}`
            document.querySelector("#content").style.color="red"
            clearInterval(timig)
        }
    },1000)
}

function newHitNUm(){
rn = Math.floor(Math.random()*10)
    document.querySelector("#hit").textContent=rn
}
function scoreCout(){
    score+=10
    document.querySelector("#score").textContent=score
}


function getHitVal(){
     document.querySelector("#content").addEventListener("click",(dets)=>{
    
               let clickNum = Number(dets.target.textContent)

               if(clickNum===rn){
                   scoreCout();
                   newHitNUm();
                   makingBubbles();
                   getHitVal();
                   timer+=3;
               }
    })
  
}

getHitVal()
newHitNUm();
runtimer();
makingBubbles();



