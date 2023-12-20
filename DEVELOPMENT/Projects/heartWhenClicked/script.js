let crd = document.querySelector("#card")
let hrt = document.querySelector("i")
crd.addEventListener("dblclick",()=>{
    console.log(77);
    hrt.style.transform='translate(-50%,-50%) scale(1)'

    setTimeout(()=>{
        hrt.style.transform='translate(-50%,-50%) scale(0)'
    },1000)
    setTimeout(()=>{
        hrt.style.opacity=0.1
    },1000)
  
})

