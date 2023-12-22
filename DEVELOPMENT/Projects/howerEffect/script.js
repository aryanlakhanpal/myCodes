let ele = document.querySelectorAll(".ele")
let photus = document.querySelectorAll(".ele img")




ele.forEach((e)=>{

    e.addEventListener("mouseenter",()=>{
       
          e.style.backgroundColor="red";
          e.childNodes[3].style.opacity=1;
    })
    e.addEventListener("mouseleave",()=>{
        e.style.backgroundColor="pink";
        e.childNodes[3].style.opacity=0;
  })

e.addEventListener("mousemove",(dets)=>{

    e.childNodes[3].style.top=dets.y+"px";
    e.childNodes[3].style.left=dets.x+"px";
})

})