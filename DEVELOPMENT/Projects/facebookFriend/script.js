let but = document.querySelector("#btn")
let tit = document.querySelector("#tit")
let photu = document.querySelector("#img")
let flag =0;

but.addEventListener("click",()=>{
if(flag==0)
{
    tit.innerHTML=""
    but.style.color="red"
    but.innerHTML="UnFollow"
    photu.src="img1.jpg"
    flag=1

}
else{
    tit.innerHTML=""
    but.style.color="green"
    but.innerHTML="Follow"
    photu.src="img2.jpg"
    flag=0
}
})