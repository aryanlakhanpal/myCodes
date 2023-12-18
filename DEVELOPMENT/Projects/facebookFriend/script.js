let but = document.querySelector("#btn")
let tit = document.querySelector("#tit")
let flag =0;

but.addEventListener("click",()=>{
if(flag==0)
{
    tit.innerHTML=""
    but.style.color="red"
    but.innerHTML="UnFollow"
    flag=1

}
else{
    tit.innerHTML=""
    but.style.color="green"
    but.innerHTML="Follow"
    flag=0
}
})